import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Home = () => (
  <Link href="/counter">
    <Div>홈화면</Div>
  </Link>
);

export default Home;

const Div = styled.div`
  width: 100px;
  height: 100px;
  background: orange;
`;
