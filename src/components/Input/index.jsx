import styled from "styled-components";
import { FaMagnifyingGlass } from "react-icons/fa6";

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const InputStyle = styled.input`
  background-color: ${(props) => props.theme.colors.dark30};
  border: none;
  border-radius: 8px;
  padding: 1rem 1rem 1rem 3rem;
  width: 45rem;

  &:focus {
    border: none;
    color: ${(props) => props.theme.colors.dark60};
    font-family: ${(props) => props.theme.fonts.inter};
    outline: none;
  }
`;

const IconStyle = styled(FaMagnifyingGlass)`
  color: ${(props) => props.theme.colors.brandColor};
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
`;

function Input() {
  return (
    <div>
      <InputContainer>
        <IconStyle />
        <InputStyle placeholder="Pesquisar no Blog" />
      </InputContainer>
    </div>
  );
}

export default Input;
