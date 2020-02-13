import React, { Component } from "react";
import styled from "styled-components";
import { withTranslation } from "../i18n";
import { observer } from "mobx-react";
import { moveHome, moveSignUp } from "../service/routerService";
import InputPage from "../components/Auth/InputPage";
import SocialPage from "../components/Auth/SocialPage";
import { AuthStore } from "../stores/authStore";
import {
  linkEmail,
  linkFacebookSignUp,
  linkGoogleSignUp
} from "../service/authService";

@observer
class SignUpPage extends Component {
  signUp = () => {
    linkEmail(AuthStore.inputValue.email, AuthStore.inputValue.password);
  };
  render() {
    const { t } = this.props;
    return (
      <Container>
        <LoginBox>
          <HeaderBox>
            <LoginHeader>{t("signUp")}</LoginHeader>
            <CancelIcon onClick={moveHome} />
          </HeaderBox>
          <InputPage sign={t("signUp")} login={this.signUp} />
          <SocialPage facebook={linkFacebookSignUp} google={linkGoogleSignUp} />
        </LoginBox>
      </Container>
    );
  }
}

SignUpPage.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

export default withTranslation("common")(SignUpPage);

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8d8d8d;
`;

const LoginBox = styled.div`
  width: 414px;
  height: 521px;
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
