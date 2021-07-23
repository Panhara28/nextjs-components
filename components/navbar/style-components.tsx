import styled from "styled-components";

export type StyleComponentProps = {
  backgroud?: string
  padding?: string
  fontSize?: string
  fontColor?: string
  fontFamily?: string
}

export const NavbarWrapper = styled.div`
  ${(props: StyleComponentProps) => {
    return `background: ${props.backgroud ? props.backgroud : "#000"};`
  }}
`;

export const NavbarContainer = styled.div`
${(props: StyleComponentProps) => {
    return `padding: ${props.padding ? props.padding : "20px"};`
  }}
`

export const NavbarLogo = styled.div`
${(props: StyleComponentProps) => {
    return `
      font-size: ${props.fontSize ? props.fontSize : "16px"};
      color: ${props.fontColor ? props.fontColor : "#fff"};
      font-family: ${props.fontFamily ? props.fontFamily : ` 'Montserrat', Open Sans `};
    `
  }}
`