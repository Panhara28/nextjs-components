import styled from "styled-components";
import Link from 'next/link';

export type StyleComponentProps = {
  backgroud?: string
  padding?: string
  fontSize?: string
  fontColor?: string
  fontFamily?: string
  display?: string
  alignItems?: string
  flex?: number
  flexWrap?: string
  justifyContent?: string

  linkColor?: string
}

export const NavbarWrapper = styled.div`
  ${(props: StyleComponentProps) => {
    return `background: ${props.backgroud ? props.backgroud : "#000"};`
  }}
`;

export const NavbarContainer = styled.div`
${(props: StyleComponentProps) => {
    return `
      padding: ${props.padding ? props.padding : "20px"};
      display: ${props.display ? props.display : "flex"};
      align-items: ${props.alignItems ? props.alignItems : "stretch"};
    `
  }}
`

export const NavbarLogo = styled.div`
${(props: StyleComponentProps) => {
    return `
      font-size: ${props.fontSize ? props.fontSize : "16px"};
      color: ${props.fontColor ? props.fontColor : "#fff"};
      font-family: ${props.fontFamily ? props.fontFamily : ` 'Montserrat', Open Sans `};
      flex: ${props.flex ? props.flex : 0}
    `
  }}
`

export const NavbarUl = styled.ul`
${(props: StyleComponentProps) => {
    return `
    display: ${props.display ? props.display : "flex"};
    flex-wrap: ${props.flexWrap ? props.flexWrap : "nowrap"};
    justify-content: ${props.justifyContent ? props.justifyContent : "normal"};
    align-items: ${props.alignItems ? props.alignItems : "stretch"};
    `
  }}
`;

export const NavbarList = styled.li`

a{
  ${(props: StyleComponentProps) => {
    return `
      color: ${props.linkColor ? props.linkColor : "#fff"};
    `
  }}
}

`

export const NavbarLink = styled(Link)`

`