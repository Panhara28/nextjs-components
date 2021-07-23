import React from "react";
import { NavbarContainer, NavbarLogo, NavbarWrapper } from "./style-components";

type NavbarProps = {
  background?: string
  padding?: string
  fontColor?: string
  fontSize?: string
}

export function Navbar({ background, padding, fontColor, fontSize }: NavbarProps) {
  return (
    <NavbarWrapper backgroud={background}>
      <NavbarContainer padding={padding}>
        <NavbarLogo color={fontColor} fontSize={fontSize}>
          Logo
        </NavbarLogo>
      </NavbarContainer>
    </NavbarWrapper>
  )
}