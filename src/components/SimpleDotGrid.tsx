import React, { useRef, useEffect, useImperativeHandle, forwardRef } from "react";
import styled from "styled-components";

interface SimpleDotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

const GridContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const Dot = styled.div<{ $size: number; $color: string }>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background-color: ${({ $color }) => $color};
  border-radius: 50%;
  transition: background-color 0.3s ease, transform 0.2s ease;
`;

const SimpleDotGrid = forwardRef<{ triggerShockwave: (pageX: number, pageY: number) => void }, SimpleDotGridProps>(({
  dotSize = 4,
  gap = 40,
  baseColor = "#ffffff",
  activeColor = "#4CAF50",
  className = "",
  style,
}, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing dots
    container.innerHTML = "";
    dotsRef.current = [];

    const { clientWidth: w, clientHeight: h } = container;
    const cols = Math.floor(w / (dotSize + gap));
    const rows = Math.floor(h / (dotSize + gap));
    
    // Limit the number of dots for performance
    const maxDots = 150;
    const total = Math.min(cols * rows, maxDots);

    for (let i = 0; i < total; i++) {
      const dot = document.createElement("div");
      dot.style.cssText = `
        position: absolute;
        width: ${dotSize}px;
        height: ${dotSize}px;
        background-color: ${baseColor};
        border-radius: 50%;
        transition: background-color 0.3s ease, transform 0.2s ease;
      `;
      
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = col * (dotSize + gap) + gap;
      const y = row * (dotSize + gap) + gap;
      
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      
      container.appendChild(dot);
      dotsRef.current.push(dot);
    }
  }, [dotSize, gap, baseColor]);

  const handleMouseMove = (e: MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const proximity = 80;

    dotsRef.current.forEach((dot) => {
      const dotX = parseFloat(dot.style.left) + dotSize / 2;
      const dotY = parseFloat(dot.style.top) + dotSize / 2;
      
      const distance = Math.sqrt((mouseX - dotX) ** 2 + (mouseY - dotY) ** 2);
      
      if (distance < proximity) {
        const intensity = 1 - (distance / proximity);
        dot.style.backgroundColor = activeColor;
        dot.style.transform = `scale(${1 + intensity * 0.3})`;
      } else {
        dot.style.backgroundColor = baseColor;
        dot.style.transform = `scale(1)`;
      }
    });
  };

  const handleShockwave = (pageX: number, pageY: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const shockX = pageX - rect.left;
    const shockY = pageY - rect.top;
    const shockRadius = 120;

    dotsRef.current.forEach((dot) => {
      const dotX = parseFloat(dot.style.left) + dotSize / 2;
      const dotY = parseFloat(dot.style.top) + dotSize / 2;
      
      const distance = Math.sqrt((shockX - dotX) ** 2 + (shockY - dotY) ** 2);
      
      if (distance < shockRadius) {
        const intensity = 1 - (distance / shockRadius);
        dot.style.backgroundColor = activeColor;
        dot.style.transform = `scale(${1 + intensity * 0.5})`;
        
        setTimeout(() => {
          dot.style.backgroundColor = baseColor;
          dot.style.transform = `scale(1)`;
        }, 300);
      }
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [baseColor, activeColor, dotSize]);

  useImperativeHandle(
    ref,
    () => ({
      triggerShockwave: (pageX: number, pageY: number) => {
        handleShockwave(pageX, pageY);
      }
    }),
    []
  );

  return (
    <GridContainer
      ref={containerRef}
      className={className}
      style={style}
    />
  );
});

SimpleDotGrid.displayName = 'SimpleDotGrid';

export default SimpleDotGrid; 