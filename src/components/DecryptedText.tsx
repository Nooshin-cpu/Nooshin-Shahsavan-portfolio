import React, { useEffect, useState, useRef, ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { useFlipCardContext } from '../context/FlipCardContext';

const styles = {
    wrapper: {
        display: 'inline-block',
        whiteSpace: 'pre-wrap',
    },
    srOnly: {
        position: 'absolute' as 'absolute',
        width: '1px',
        height: '1px',
        padding: 0,
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0,0,0,0)',
        border: 0,
    },
}

interface DecryptedTextProps extends HTMLMotionProps<'span'> {
    text: string
    speed?: number
    maxIterations?: number
    sequential?: boolean
    revealDirection?: 'start' | 'end' | 'center'
    useOriginalCharsOnly?: boolean
    characters?: string
    className?: string
    parentClassName?: string
    encryptedClassName?: string
}

export default function DecryptedText({
    text,
    speed = 50,
    maxIterations = 10,
    sequential = false,
    revealDirection = 'start',
    useOriginalCharsOnly = false,
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
    className = '',
    parentClassName = '',
    encryptedClassName = '',
    ...props
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState<string>(text)
    const [isScrambling, setIsScrambling] = useState<boolean>(false)
    const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set())
    const containerRef = useRef<HTMLSpanElement>(null)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)
    const iterationCountRef = useRef(0)

    const flipCardContext = useFlipCardContext();
    const isFlipped = flipCardContext ? flipCardContext.isFlipped : false;

    useEffect(() => {
        console.log('DecryptedText - isFlipped changed:', isFlipped);
    }, [isFlipped]);

    const getNextIndex = (revealedSet: Set<number>): number => {
        const textLength = text.length
        switch (revealDirection) {
            case 'start':
                return revealedSet.size
            case 'end':
                return textLength - 1 - revealedSet.size
            case 'center': {
                const middle = Math.floor(textLength / 2)
                const offset = Math.floor(revealedSet.size / 2)
                const nextIndex =
                    revealedSet.size % 2 === 0
                        ? middle + offset
                        : middle - offset - 1

                if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
                    return nextIndex
                }

                for (let i = 0; i < textLength; i++) {
                    if (!revealedSet.has(i)) return i
                }
                return 0
            }
            default:
                return revealedSet.size
        }
    }

    const availableChars = useOriginalCharsOnly
        ? Array.from(new Set(text.split(''))).filter((char) => char !== ' ')
        : characters.split('')

    const shuffleText = (originalText: string, currentRevealed: Set<number>): string => {
        if (useOriginalCharsOnly) {
            const positions = originalText.split('').map((char, i) => ({
                char,
                isSpace: char === ' ',
                index: i,
                isRevealed: currentRevealed.has(i),
            }))

            const nonSpaceChars = positions
                .filter((p) => !p.isSpace && !p.isRevealed)
                .map((p) => p.char)

            for (let i = nonSpaceChars.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1))
                ;[nonSpaceChars[i], nonSpaceChars[j]] = [nonSpaceChars[j], nonSpaceChars[i]]
            }

            let charIndex = 0
            return positions
                .map((p) => {
                    if (p.isSpace) return ' '
                    if (p.isRevealed) return originalText[p.index]
                    return nonSpaceChars[charIndex++]
                })
                .join('')
        } else {
            return originalText
                .split('')
                .map((char, i) => {
                    if (char === ' ') return ' '
                    if (currentRevealed.has(i)) return originalText[i]
                    return availableChars[Math.floor(Math.random() * availableChars.length)]
                })
                .join('')
        }
    }

    useEffect(() => {
        if (isFlipped) {
            // Start animation when flipped to true
            setIsScrambling(true);
            iterationCountRef.current = 0;
            setRevealedIndices(new Set());
            // Start with fully scrambled text
            setDisplayText(shuffleText(text, new Set()));

            // Clear any existing interval before setting a new one
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }

            intervalRef.current = setInterval(() => {
                let animationComplete = false;
                let nextRevealed = new Set<number>();

                setRevealedIndices(prevRevealed => {
                    nextRevealed = new Set<number>(prevRevealed);
                    if (sequential) {
                        if (nextRevealed.size < text.length) {
                            const nextIndex = getNextIndex(nextRevealed);
                            nextRevealed.add(nextIndex);
                        } else {
                            animationComplete = true;
                        }
                    } else {
                        iterationCountRef.current++;
                        if (iterationCountRef.current >= maxIterations) {
                            animationComplete = true;
                        }
                    }
                    return nextRevealed;
                });

                // Check for animation complete AFTER the state update is scheduled
                // This ensures we are checking against the most recent state
                const currentIteration = iterationCountRef.current;
                const currentRevealedSize = nextRevealed.size; // Use nextRevealed from the state update

                const isComplete = sequential
                    ? currentRevealedSize >= text.length
                    : currentIteration >= maxIterations;

                if (isComplete) {
                    if (intervalRef.current) clearInterval(intervalRef.current);
                    intervalRef.current = null;
                    setIsScrambling(false);
                    setDisplayText(text); // Set final text
                } else {
                    // Use the state updated by setRevealedIndices in the next render cycle
                    // For immediate calculation in the same interval tick, use the returned nextRevealed
                    const shuffled = shuffleText(text, nextRevealed);
                    setDisplayText(shuffled); // Set scrambled/decrypting text
                }

            }, speed);

        } else {
            // Reset state when not flipped or on initial render if starting false
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            setIsScrambling(false);
            setRevealedIndices(new Set());
            setDisplayText(text);
            iterationCountRef.current = 0;
        }

        // Cleanup function
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            intervalRef.current = null;
        };

    }, [isFlipped]); // Only re-run when isFlipped changes

    return (
        <motion.span className={parentClassName} ref={containerRef} style={styles.wrapper} {...props}>
            <span style={styles.srOnly}>{displayText}</span>

            <span aria-hidden="true" style={{
                display: 'block', // Ensure it\'s block or inline-block
                visibility: 'visible', // Ensure visibility
                opacity: 1, // Ensure not transparent
            }}>
                {displayText.split('').map((char, index) => {
                    const isRevealedOrDone = !isScrambling || (sequential && revealedIndices.has(index));

                    return (
                        <span
                            key={index}
                            className={isRevealedOrDone ? className : encryptedClassName}
                            style={{ // Add this style prop
                                color: 'lime', // DEBUG COLOR - change if you like
                                fontSize: '1rem', // Ensure minimum size - adjust if needed
                                visibility: 'visible', // Ensure visibility
                                opacity: 1, // Ensure not transparent
                                display: 'inline-block', // Ensure display
                            }}
                        >
                            {char}
                        </span>
                    )
                })}
            </span>
        </motion.span>
    )
} 