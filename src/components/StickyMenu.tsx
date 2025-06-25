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
  background: #fff;
  border-radius: 14px;
  padding: 12px 0;
  box-shadow: 0 6px 32px 0 rgba(0,0,0,0.16), 0 1.5px 8px 0 rgba(0,0,0,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48px;
  gap: 10px;
`;

const IconContainer = styled.a<{ $hovered: boolean }>`
  position: relative;
  background: #13291b;
  border-radius: 8px;
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: #fff;
  transition: background 0.18s, box-shadow 0.18s, transform 0.18s, font-size 0.18s;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 1.45rem;

  ${({ $hovered }) =>
    $hovered &&
    `
      font-size: 2.05rem;
      box-shadow: 0 2px 8px rgba(35,66,42,0.15);
      transform: scale(1.18);
      z-index: 1;
    `
  }

  &:hover {
    background: #23422a;
  }
`;

const Tooltip = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: absolute;
  left: 45px;
  top: 50%;
  transform: translateY(-50%);
  background: #222;
  color: #fff;
  padding: 7px 16px;
  border-radius: 6px;
  font-size: 0.97rem;
  font-weight: 500;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0.96;
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
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