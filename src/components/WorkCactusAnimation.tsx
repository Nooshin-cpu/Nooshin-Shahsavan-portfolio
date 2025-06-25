import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: transparent;
  margin: 0 auto;
`;

const StyledSVG = styled.svg`
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 600px;
  margin: 0 auto;
  display: block;
`;

const WorkCactusAnimation: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Create timeline
    const tl = gsap.timeline({ repeat: -1 });

    // Right cactus animation
    const rightCactus = svgRef.current.querySelector('[data-spirit-id="right-cactus"]');
    if (rightCactus) {
      tl.to(rightCactus, {
        y: -12,
        rotation: 1,
        duration: 0.6,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 1
      });
    }

    // Left cactus animation
    const leftCactus = svgRef.current.querySelector('[data-spirit-id="left-cactus"]');
    if (leftCactus) {
      tl.to(leftCactus, {
        y: -12,
        rotation: -1,
        duration: 0.6,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 1
      }, "-=0.3");
    }

    // Bubble animation
    const bubble = svgRef.current.querySelector('[data-spirit-id="bubble"]');
    if (bubble) {
      tl.to(bubble, {
        y: -6,
        scale: 1.02,
        duration: 0.8,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 1
      }, "-=0.6");
    }

    // Burst bubbles animation
    const burstBubbles = svgRef.current.querySelectorAll('[data-spirit-id^="burst-bubble"]');
    burstBubbles.forEach((bubble, index) => {
      tl.to(bubble, {
        scale: 1.15,
        opacity: 0.6,
        duration: 0.4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 1
      }, `-=${0.8 + index * 0.1}`);
    });

    // Burst strokes animation
    const burstStrokes = svgRef.current.querySelectorAll('[data-spirit-id^="burst-stroke"]');
    burstStrokes.forEach((stroke, index) => {
      tl.to(stroke, {
        strokeDashoffset: 0,
        opacity: 0,
        duration: 1.5,
        ease: "power1.inOut",
        delay: index * 0.1
      }, "-=1.2");
    });

    // Set initial states
    gsap.set(burstStrokes, { strokeDashoffset: 100, opacity: 1 });
    gsap.set(burstBubbles, { scale: 1, opacity: 1 });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Container>
      <StyledSVG
        ref={svgRef}
        width="833"
        height="637"
        viewBox="0 0 833 637"
        preserveAspectRatio="xMidYMid meet"
      >
        <g data-spirit-id="right-cactus" transform="translate(500, 300)" style={{ transformOrigin: "bottom center" }}>
          <path d="M0,0 L0,-100 L20,-100 L20,0 Z" fill="#2ecc71"/>
          <path d="M10,-120 L10,-140 L30,-140 L30,-120 Z" fill="#2ecc71"/>
        </g>
        <g data-spirit-id="left-cactus" transform="translate(300, 300)" style={{ transformOrigin: "bottom center" }}>
          <path d="M0,0 L0,-80 L15,-80 L15,0 Z" fill="#27ae60"/>
          <path d="M7,-90 L7,-110 L22,-110 L22,-90 Z" fill="#27ae60"/>
        </g>
        <g data-spirit-id="bubble" transform="translate(400, 200)">
          <circle cx="0" cy="0" r="20" fill="#3498db" opacity="0.8"/>
        </g>
        <g data-spirit-id="burst">
          {[...Array(5)].map((_, i) => (
            <circle
              key={`burst-bubble-${i}`}
              data-spirit-id={`burst-bubble-${i}`}
              cx={400 + Math.cos(i * 72 * Math.PI / 180) * 30}
              cy={200 + Math.sin(i * 72 * Math.PI / 180) * 30}
              r="8"
              fill="#3498db"
              opacity="0.6"
            />
          ))}
          {[...Array(5)].map((_, i) => (
            <line
              key={`burst-stroke-${i}`}
              data-spirit-id={`burst-stroke-${i}`}
              x1="400"
              y1="200"
              x2={400 + Math.cos(i * 72 * Math.PI / 180) * 40}
              y2={200 + Math.sin(i * 72 * Math.PI / 180) * 40}
              stroke="#3498db"
              strokeWidth="2"
              strokeDasharray="100"
              strokeDashoffset="100"
            />
          ))}
        </g>
      </StyledSVG>
    </Container>
  );
};

export default WorkCactusAnimation; 