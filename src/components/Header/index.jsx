import styled from "styled-components";
import Logo from "../Logo";
import Input from "../Input";

const HeaderStyle = styled.header`
  background-color: ${(props) => props.theme.colors.dark20};
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function Header() {
  return (
    <HeaderStyle>
      <Logo />
      <Input />
    </HeaderStyle>
  );
}

export default Header;
