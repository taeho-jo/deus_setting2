import React from "react";
import styled from "styled-components";

const DestinationBox = ({ background, title, city, city2 }) => {
  return (
    <MainContainer>
      <ImageBox background={background}></ImageBox>
      <TextBox>
        <Title>{title}</Title>
        <Content>
          {city},<br />
          {city2}
        </Content>
      </TextBox>
    </MainContainer>
  );
};

export default DestinationBox;

const MainContainer = styled.div`
  width: 192px;
  height: 318px;
  /* border: 1px solid salmon; */
  border-radius: 8px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const ImageBox = styled.div`
  width: 192px;
  height: 200px;
  /* border: 1px solid green; */
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-image: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
`;

const TextBox = styled.div`
  /* border: 1px solid black; */
  margin: 16px 0 0 16px;
  /* width: 93px; */
`;

const Title = styled.h1`
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.43;
  letter-spacing: normal;
  color: #3b3b3b;
`;

const Content = styled.p`
  font-family: NotoSansCJKkr;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: normal;
  color: #acacac;
  margin-top: 8px;
  /* width: 42px; */
`;
