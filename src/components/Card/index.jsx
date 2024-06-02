/* eslint-disable react/prop-types */
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa6";

const CardContainer = styled.section`
  background-color: ${(props) => props.theme.colors.dark20};
  width: 1216px;
  padding: 40px;
  font-family: ${(props) => props.theme.fonts.inter};
  border-radius: 8px;
  margin-bottom: 40px;
`;

const CardHeader = styled.div`
  color: ${(props) => props.theme.colors.brandColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Date = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const IconStyle = styled(FaRegHeart)`
  font-size: 32px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.dark60};
  margin-bottom: 16px;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.dark50};
  font-weight: 400;
  font-size: 20px;
`;

function Card({ title, date, description }) {
  return (
    <CardContainer>
      <CardHeader>
        <Date>{date}</Date>
        <IconStyle />
      </CardHeader>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
}

export default Card;
