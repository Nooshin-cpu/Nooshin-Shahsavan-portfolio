import React, { useRef, useEffect, useCallback, useState, useImperativeHandle, forwardRef } from "react";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";

import "./DotGrid.css";

gsap.registerPlugin(InertiaPlugin);

interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  speedTrigger?: number;
  shockRadius?: number;
  shockStrength?: number;
  maxSpeed?: number;
  resistance?: number;
  returnDuration?: number;
  className?: string;
  style?: React.CSSProperties;
}

interface Dot {
  x: number;
  y: number;
  element: HTMLDivElement;
  originalX: number;
  originalY: number;
  currentX: number;
  currentY: number;
  velocityX: number;
  velocityY: number;
}

// Add debounce utility at the top
function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

const DotGrid = forwardRef<{ triggerShockwave: (pageX: number, pageY: number) => void }, DotGridProps>(({
  dotSize = 16,
  gap = 32,
  baseColor = "#00d8ff",
  activeColor = "#00ff00",
  proximity = 150,
  speedTrigger = 100,
  shockRadius = 250,
  shockStrength = 8,
  maxSpeed = 5000,
  resistance = 750,
  returnDuration = 1.5,
  className = "",
  style,
}, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const centresRef = useRef<Array<{ el: HTMLDivElement; x: number; y: number }>>([]);

  const buildGrid = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";
    dotsRef.current = [];
    centresRef.current = [];

    const { clientWidth: w, clientHeight: h } = container;
    const centerX = w / 2;
    const centerY = h / 2;
    const maxRadius = Math.min(w, h) * 0.5 * 0.95;
    const baseGap = gap;
    const baseDotSize = dotSize;
    const rings = Math.floor(maxRadius / baseGap);

    // Precompute all dot positions
    const dotPositions: Array<{x: number, y: number}> = [];
    for (let ring = 0; ring < rings; ring++) {
      const radius = (ring / rings) * maxRadius;
      const ringGap = baseGap + (radius / maxRadius) * baseGap * 1.5;
      const circumference = 2 * Math.PI * (radius || 1);
      const dotsInRing = Math.max(6, Math.floor(circumference / ringGap));
      for (let i = 0; i < dotsInRing; i++) {
        const angle = (i / dotsInRing) * 2 * Math.PI;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        if (x < 0 || x > w || y < 0 || y > h) continue;
        dotPositions.push({ x, y });
      }
    }

    // Progressive rendering in batches
    const batchSize = 40;
    let index = 0;
    function renderBatch() {
      if (!container) return;
      const end = Math.min(index + batchSize, dotPositions.length);
      for (; index < end; index++) {
        const { x, y } = dotPositions[index];
        const dot = document.createElement("div");
        dot.classList.add("dot-grid__dot");
        (dot as any)._inertiaApplied = false;
        gsap.set(dot, { x: 0, y: 0, backgroundColor: baseColor, width: baseDotSize, height: baseDotSize, left: x - baseDotSize / 2, top: y - baseDotSize / 2, position: 'absolute' });
        container.appendChild(dot);
        dotsRef.current.push({
          x,
          y,
          element: dot,
          originalX: x,
          originalY: y,
          currentX: x,
          currentY: y,
          velocityX: 0,
          velocityY: 0,
        });
      }
      if (index < dotPositions.length) {
        requestAnimationFrame(renderBatch);
      } else {
        // Update centresRef after all dots are rendered
        requestAnimationFrame(() => {
          centresRef.current = dotsRef.current.map(({ element: el, x, y }) => {
            return { el, x, y };
          });
        });
      }
    }
    renderBatch();
  }, [dotSize, gap, baseColor]);

  useEffect(() => {
    const debouncedBuildGrid = debounce(buildGrid, 250); // was 150
    buildGrid();
    const ro = new ResizeObserver(debouncedBuildGrid);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [buildGrid]);

  const handleShockwave = (pageX: number, pageY: number) => {
    centresRef.current.forEach(({ el, x, y }) => {
      const dist = Math.hypot(x - pageX, y - pageY);
      const dot = dotsRef.current.find(d => d.element === el);

      if (dot && dist < shockRadius && !(el as any)._inertiaApplied) {
        (el as any)._inertiaApplied = true;
        const falloff = Math.max(0, 1 - dist / shockRadius);
        const pushX = (x - pageX) * shockStrength * falloff;
        const pushY = (y - pageY) * shockStrength * falloff;

        // First change color
        gsap.to(el, {
          backgroundColor: activeColor,
          duration: 0.2,
          onComplete: () => {
            gsap.to(el, {
              backgroundColor: baseColor,
              duration: 0.5,
              delay: 0.3
            });
          }
        });

        // Then apply movement
        gsap.to(el, {
          inertia: { x: pushX, y: pushY, resistance },
          onComplete: () => {
            gsap.to(el, {
              x: 0,
              y: 0,
              duration: returnDuration,
              ease: "elastic.out(1,0.75)",
            });
            (el as any)._inertiaApplied = false;
          },
        });
      }
    });
  };

  useEffect(() => {
    let lastTime = 0;
    let lastX = 0;
    let lastY = 0;
    let throttleTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleMove = (e: MouseEvent) => {
      const now = performance.now();
      const dt = now - (lastTime || now);
      const dx = e.pageX - lastX;
      const dy = e.pageY - lastY;
      let vx = (dx / dt) * 1000;
      let vy = (dy / dt) * 1000;
      let speed = Math.hypot(vx, vy);

      if (speed > maxSpeed) {
        const scale = maxSpeed / speed;
        vx *= scale;
        vy *= scale;
        speed = maxSpeed;
      }

      lastTime = now;
      lastX = e.pageX;
      lastY = e.pageY;

      requestAnimationFrame(() => {
        centresRef.current.forEach(({ el, x, y }) => {
          const dist = Math.hypot(x - e.pageX, y - e.pageY);
          const interp = Math.max(0, 1 - dist / proximity);
          gsap.set(el, {
            backgroundColor: gsap.utils.interpolate(
              baseColor,
              activeColor,
              interp
            ),
          });

          // Find the corresponding dot in dotsRef based on the element
          const dot = dotsRef.current.find(d => d.element === el);
          
          if (dot && speed > speedTrigger && dist < proximity && !(el as any)._inertiaApplied) {
            (el as any)._inertiaApplied = true;
            const pushX = x - e.pageX + vx * 0.005;
            const pushY = y - e.pageY + vy * 0.005;

            gsap.to(el, {
              inertia: { x: pushX, y: pushY, resistance },
              onComplete: () => {
                gsap.to(el, {
                  x: 0,
                  y: 0,
                  duration: returnDuration,
                  ease: "elastic.out(1,0.75)",
                });
                (el as any)._inertiaApplied = false;
              },
            });
          }
        });
      });
    };

    // Throttle mousemove handler
    const onMove = (e: MouseEvent) => {
      if (throttleTimeout) return;
      throttleTimeout = setTimeout(() => {
        handleMove(e);
        throttleTimeout = null;
      }, 60); // was 40ms throttle
    };

    const onClick = (e: MouseEvent) => {
      handleShockwave(e.pageX, e.pageY);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, [
    baseColor,
    activeColor,
    proximity,
    speedTrigger,
    shockRadius,
    shockStrength,
    maxSpeed,
    resistance,
    returnDuration,
  ]);

  useImperativeHandle(
    ref,
    () => ({
      triggerShockwave: (pageX: number, pageY: number) => {
        handleShockwave(pageX, pageY);
      }
    }),
    [baseColor, activeColor, shockRadius, shockStrength, resistance, returnDuration]
  );

  return (
    <section
      className={`dot-grid ${className}`}
      style={{
        ...style,
        "--dot-size": `${dotSize}px`,
        "--dot-gap": `${gap}px`,
      } as React.CSSProperties}
    >
      <div className="dot-grid__wrap">
        <div ref={containerRef} className="dot-grid__container" />
      </div>
    </section>
  );
});

export default DotGrid; 