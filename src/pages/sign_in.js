import React, { Component } from "react";
import styled from "styled-components";
import { withTranslation } from "../i18n";
import { observer } from "mobx-react";
import { moveHome, moveSignUp } from "../service/routerService";
import InputPage from "../components/Auth/InputPage";
import SocialPage from "../components/Auth/SocialPage";
import { AuthStore } from "../stores/authStore";
import { emailLogin, facebookLogin, googleLogin } from "../service/authService";

@observer
class SignIn extends Component {
  login = () => {
    emailLogin(AuthStore.inputValue.email, AuthStore.inputValue.password);
  };
  render() {
    const { t } = this.props;
    return (
      <Container>
        <LoginBox>
          <HeaderBox>
            <LoginHeader>{t("signIn")}</LoginHeader>
            <CancelIcon onClick={moveHome} />
          </HeaderBox>
          <InputPage
            msg={t("forgetPassword")}
            sign={t("signIn")}
            login={this.login}
          />
          <SocialPage facebook={facebookLogin} google={googleLogin} />
          <FooterBox>
            <FooterText>{t("notUser")}</FooterText>
            <SignUp onClick={moveSignUp}>{t("signUp")}</SignUp>
          </FooterBox>
        </LoginBox>
      </Container>
    );
  }
}

SignIn.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

export default withTranslation("common")(SignIn);

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8d8d8d;
`;

const LoginBox = styled.div`
  width: 414px;
  height: 600px;
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

const FooterBox = styled.div`
  width: 366px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;
const FooterText = styled.span`
  font-family: NotoSansCJKkr;
  font-size: 14px;
  line-height: 1.21;
  text-align: center;
  letter-spacing: normal;
  color: #66696a;
`;

const SignUp = styled(FooterText)`
  font-weight: 500;
  color: #42acc6;
  margin-left: 8px;
  cursor: pointer;
`;
