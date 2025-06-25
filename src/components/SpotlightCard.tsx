import React, { useRef } from "react";
import "./SpotlightCard.css";

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
  style?: React.CSSProperties;
  onMouseMove?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
  style,
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleInternalMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);

    if (onMouseMove) {
      onMouseMove(e);
    }
  };

  const combinedMouseMoveHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    handleInternalMouseMove(e);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={combinedMouseMoveHandler}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`card-spotlight ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default SpotlightCard; 