import React, { Component } from "react";
import styled from "styled-components";
import { comebackLogin, moveHome } from "../../service/routerService";
import FindInput from "../../components/Auth/FindInput";
import { withTranslation } from "../../i18n";

const FindPassword = ({ t }) => {
  return (
    <Container>
      <LoginBox>
        <HeaderBox>
          <LoginHeader>{t("findPassword")}</LoginHeader>
          <CancelIcon onClick={moveHome} />
        </HeaderBox>
        <TextBox>
          <P>
            {t("enterEmail")}
            <br /> {t("newPasswordEmail")}
          </P>
        </TextBox>
        <FindInput />
        <Comeback>
          <Image onClick={comebackLogin} src="/assets/images/left.png" />
          <ComebackText onClick={comebackLogin}>
            {t("comebackLogin")}
          </ComebackText>
        </Comeback>
      </LoginBox>
    </Container>
  );
};
FindPassword.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

export default withTranslation("common")(FindPassword);

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8d8d8d;
`;
const LoginBox = styled.div`
  width: 414px;
  height: 447px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
`;
const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;
const CancelIcon = styled.div`
  background-image: url("/assets/images/cancel.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 24px;
  height: 24px;
  position: absolute;
  right: 16px;
  bottom: -8px;
  cursor: pointer;
`;

const TextBox = styled.div`
  margin-top: 40px;
  width: 360px;
`;

const LoginHeader = styled.p`
  color: #3b3b3b;
  font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.81;
  letter-spacing: normal;
  text-align: left;
  margin-top: 40px;
`;

const P = styled.p`
  font-family: NotoSansCJKkr;
  font-size: 14px;
  line-height: 1.57;
  letter-spacing: normal;
  color: #acacac;
`;

const Comeback = styled.div`
  width: 360px;
  /* border: 1px solid black; */
  margin-top: 40px;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 12px;
  height: 12px;
  cursor: pointer;
`;

const ComebackText = styled.p`
  font-family: NotoSansCJKkr;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: normal;
  color: #66696a;
  margin-left: 10px;
  cursor: pointer;
`;
