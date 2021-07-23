import React from "react";
import { NavbarContainer, NavbarLink, NavbarList, NavbarLogo, NavbarUl, NavbarWrapper } from "./style-components";

type NavbarProps = {
  background?: string
  padding?: string
  fontColor?: string
  fontSize?: string
  fontFamily?: string
  display?: string
  alignItems?: string
  flex?: number
  flexWrap?: string
  justifyContent?: string

  linkColor?: string
}

export function Navbar({ background, padding, fontColor, fontSize, display, flex, alignItems, linkColor }: NavbarProps) {
  return (
    <NavbarWrapper backgroud={background}>
      <NavbarContainer padding={padding} display="flex">
        <NavbarLogo color={fontColor} fontSize={fontSize} flex={flex}>
          Logo
        </NavbarLogo>
        <NavbarUl display={display} alignItems={alignItems}>
          <NavbarList linkColor={linkColor}>
            <NavbarLink href="/">
              Home
            </NavbarLink>
          </NavbarList>
        </NavbarUl>
      </NavbarContainer>
    </NavbarWrapper>
  )
}