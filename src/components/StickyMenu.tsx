import React, { useState } from "react";
import { SlEnvolope, SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import styled from "styled-components";

const StickyWrapper = styled.div`
  position: fixed;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;

  @media (max-width: 1024px) {
    left: 0;
    right: 0;
    top: auto;
    bottom: 0;
    width: 100vw;
    transform: none;
    display: flex;
    justify-content: center;
    background: none;
    pointer-events: auto;
  }
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

  @media (max-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-width: unset;
    padding: 10px 0 18px 0;
    gap: 18px;
    background: rgba(25,28,36,0.98);
    border-radius: 0;
  }
`;

const IconContainer = styled.a<{ $hovered: boolean }>`
  position: relative;
  background: ${({ $hovered }) => $hovered ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: ${({ $hovered }) => $hovered ? '#000000' : '#ffffff'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box;
  cursor: pointer;
  font-size: 1.45rem;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: ${({ $hovered }) => $hovered 
    ? '0 8px 32px rgba(255, 255, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)' 
    : '0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)'
  };

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    margin: 0 0.5rem;
    width: 44px;
    height: 44px;
    font-size: 1.25rem;
  }
`;

const Tooltip = styled.div<{ $visible: boolean }>`
  display: ${({ $visible }) => ($visible ? "block" : "none")};
  position: absolute;
  left: 55px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 10px 18px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0.96;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
            <Tooltip $visible={hovered === i}>{item.label}</Tooltip>
          </IconContainer>
        ))}
      </MenuBox>
    </StickyWrapper>
  );
};

export default StickyMenu;