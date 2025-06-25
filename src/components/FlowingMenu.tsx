import React from 'react';
import { gsap } from 'gsap';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const marqueeAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const MenuWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const MenuItemWrapper = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 -1px #fff;
`;

const MenuItemLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  font-weight: 600;
  color: #fff;
  font-size: 4vh;

  &:hover {
    color: #060606;
  }

  &:focus:not(:focus-visible) {
    color: #fff;
  }
`;

const Marquee = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: #fff;
  transform: translate3d(0, 101%, 0);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  ${MenuItemLink}:hover + & {
    transform: translate3d(0, 0%, 0);
  }
`;

const MarqueeInnerWrap = styled.div`
  height: 100%;
  width: 200%;
  display: flex;
  transform: translateX(0);
`;

const MarqueeInner = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  width: 200%;
  will-change: transform;
  animation: ${marqueeAnimation} 15s linear infinite;
`;

const MarqueeText = styled.span`
  color: #060606;
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 4vh;
  line-height: 1.2;
  padding: 1vh 1vw 0;
`;

const MarqueeImage = styled.div<{ imageUrl: string }>`
  width: 200px;
  height: 7vh;
  margin: 2em 2vw;
  padding: 1em 0;
  border-radius: 50px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: 50% 50%;
`;

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
}

function MenuItem({ link, text, image }: MenuItemProps) {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const distMetric = (x: number, y: number, x2: number, y2: number) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  const handleMouseEnter = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap.timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
  };

  const handleMouseLeave = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap.timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
  };

  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <MarqueeText>{text}</MarqueeText>
      <MarqueeImage imageUrl={image} />
    </React.Fragment>
  ));

  return (
    <MenuItemWrapper ref={itemRef}>
      <MenuItemLink
        to={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </MenuItemLink>
      <Marquee ref={marqueeRef}>
        <MarqueeInnerWrap ref={marqueeInnerRef}>
          <MarqueeInner aria-hidden="true">
            {repeatedMarqueeContent}
          </MarqueeInner>
        </MarqueeInnerWrap>
      </Marquee>
    </MenuItemWrapper>
  );
}

interface FlowingMenuProps {
  items: MenuItemProps[];
}

function FlowingMenu({ items = [] }: FlowingMenuProps) {
  return (
    <MenuWrap>
      <Menu>
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </Menu>
    </MenuWrap>
  );
}

export default FlowingMenu; 