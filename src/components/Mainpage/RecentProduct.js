import React, { useState } from "react";
import styled from "styled-components";
import Product from "./Product";

const RecentProduct = ({ title, color, margin }) => {
  return (
    <MainBox margin={margin} color={color}>
      <Title>{title}</Title>
      <ProductBox>
        <Product image={"/assets/images/mt.jpg"} />
        <Product image={"/assets/images/sea.jpg"} />
        <Product image={"/assets/images/space.jpg"} />
        <Product image={"/assets/images/sea.jpg"} />
      </ProductBox>
    </MainBox>
  );
};

export default RecentProduct;

const MainBox = styled.div`
  height: 405px;
  background-color: ${props => props.color};
  padding-top: 64px;
  padding-left: 24px;
  padding-right: 24px;
  margin-top: ${props => props.margin};
`;

const Title = styled.h1`
  font-family: NotoSansCJKkr;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.45;
  letter-spacing: normal;
  color: #3b3b3b;
`;

const ProductBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;
