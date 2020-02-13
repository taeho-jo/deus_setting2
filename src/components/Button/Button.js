import React from "react";
import styled from "styled-components";

const Button = ({ checkClick }) => {
  return <Btn checkClick={checkClick}>되냐?</Btn>;
};

export default Button;

const Btn = styled.button`
  background-color: lightblue;
`;
