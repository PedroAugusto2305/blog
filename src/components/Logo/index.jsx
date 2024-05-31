import styled from "styled-components";

const LogoStyle = styled.h1`
  color: ${(props) => props.theme.colors.dark60};
  font-family: ${(props) => props.theme.fonts.spaceGrotesk};
  margin-bottom: 3rem;
`;
const ContrastLogo = styled.span`
  color: ${(props) => props.theme.colors.brandColor};
`;

function Logo() {
  return (
    <LogoStyle>
      <ContrastLogo>Code</ContrastLogo>Lab
    </LogoStyle>
  );
}

export default Logo;
