import React, { useState } from "react";
import { SlEnvolope, SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import styled from "styled-components";

const StickyWrapper = styled.div`
  position: fixed;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
`;

const MenuBox = styled.div`
  background: transparent;
  border-radius: 14px;
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48px;
  gap: 10px;
`;

const IconContainer = styled.a<{ $hovered: boolean }>`
  position: relative;
  background: #000000;
  border-radius: 12px;
  border: 2px solid #ffffff;
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: #ffffff;
  transition: all 0.2s cubic-bezier(.4,2,.6,1);
  box-sizing: border-box;
  cursor: pointer;
  font-size: 1.45rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);

  ${({ $hovered }) =>
    $hovered &&
    `
      background: #222222;
      border-color: #2ee0ff;
      transform: scale(1.08);
      box-shadow: 0 0 16px rgba(46, 224, 255, 0.5);
      z-index: 1;
    `
  }

  &:hover {
    background: #222222;
    border-color: #2ee0ff;
    transform: scale(1.08);
    box-shadow: 0 0 16px rgba(46, 224, 255, 0.5);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Tooltip = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: absolute;
  left: 55px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.9);
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0.96;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
`;

const menu = [
  {
    icon: <SlEnvolope />,
    label: "Email Contact",
    // This will open Gmail compose:
    link: "https://mail.google.com/mail/?view=cm&to=nooshin.shahsavan.ca@gmail.com&su=Contact%20from%20my%20website",
    title: "Email Contact"
  },
  {
    icon: <SlSocialLinkedin />,
    label: "LinkedIn",
    link: "https://linkedin.com/in/nooshin-shahsavan",
    title: "LinkedIn"
  },
  {
    icon: <SlSocialInstagram />,
    label: "Instagram",
    link: "https://instagram.com/its.nooshin_/",
    title: "Instagram"
  }
];

const StickyMenu: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <StickyWrapper>
      <MenuBox>
        {menu.map((item, i) => (
          <IconContainer
            key={item.label}
            href={item.link}
            title={item.title}
            target="_blank"
            rel="noopener noreferrer"
            $hovered={hovered === i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {item.icon}
            <Tooltip visible={hovered === i}>{item.label}</Tooltip>
          </IconContainer>
        ))}
      </MenuBox>
    </StickyWrapper>
  );
};

export default StickyMenu;