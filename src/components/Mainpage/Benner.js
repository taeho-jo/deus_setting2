import React from "react";
import styled from "styled-components";

const Benner = ({
  color,
  marginTop,
  title,
  marginLeft,
  content,
  fontColor,
  width,
  height,
  url,
  bottom
}) => {
  return (
    <MainContainer marginTop={marginTop} color={color}>
      <Image url={url} width={width} height={height}></Image>
      <TextBox>
        <div>
          <Title>{title}</Title>
          {color === "#fafafa" && (
            <Arrow
              bottom={bottom}
              marginLeft={marginLeft}
              src="/assets/images/rightarrow.png"
            />
          )}
        </div>
        <Content fontColor={fontColor}>{content}</Content>
        {/* <Content fontColor={fontColor}>{secondContent}</Content> */}
        {color === "#f4fafc" && (
          <Arrow marginLeft={marginLeft} src="/assets/images/rightarrow.png" />
        )}
      </TextBox>
    </MainContainer>
  );
};

export default Benner;

const MainContainer = styled.div`
  width: 100%;
  max-width: 1232px;
  margin: 0 auto;
  background-color: ${props => props.color};
  height: 252px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: ${props => props.marginTop};
`;

const Image = styled.div`
  background-image: url(${props => props.url});
  width: ${props => props.width};
  height: ${props => props.height};
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 120px;
`;

const TextBox = styled.div`
  /* border: 1px solid black; */
  justify-content: center;
`;

const Title = styled.span`
  font-family: NotoSansCJKkr;
  font-size: 23px;
  font-weight: bold;
  line-height: 1.48;
  letter-spacing: normal;
  color: #3b3b3b;
`;
const Content = styled.p`
  display: inline-block;
  font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${props => props.fontColor};
  margin-top: 16px;
`;

const Arrow = styled.img`
  width: 12px;
  margin-left: ${props => props.marginLeft};
  margin-bottom: ${props => props.bottom};
`;
