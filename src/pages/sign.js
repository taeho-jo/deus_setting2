import React, { Component } from "react";
import styled from "styled-components";
import { withTranslation } from "../i18n";
import { observer } from "mobx-react";
import { emailLogin, googleLogin, facebookLogin } from "../service/authService";

@observer
class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  changeValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = () => {
    emailLogin(this.state.email, this.state.password);
  };

  render() {
    const { t } = this.props;
    const { email, password } = this.state;
    return (
      <Div>
        <Container>
          <IDinput
            value={email}
            placeholder={t("email")}
            onChange={this.changeValue}
            name="email"
            type="email"
            autoComplete="off"
          />
          <PWinput
            value={password}
            placeholder={t("password")}
            onChange={this.changeValue}
            name="password"
            type="password"
          />
          <BtnDiv>
            <Button onClick={this.login}>{t("signIn")}</Button>
            <Button onClick={this.moveSignUp}>{t("signUp")}</Button>
          </BtnDiv>
          <BtnDiv>
            <Google onClick={googleLogin}></Google>
            <Facebook onClick={facebookLogin}></Facebook>
          </BtnDiv>
        </Container>
      </Div>
    );
  }
}

SignIn.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

export default withTranslation("common")(SignIn);

const Div = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8d8d8d;
`;
const Container = styled.div`
  width: 414px;
  height: 600px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;
const IDinput = styled.input`
  width: 350px;
  height: 30px;
  margin-bottom: 15px;
`;
const PWinput = styled(IDinput)``;
const BtnDiv = styled(Div)`
  height: auto;
  margin-top: 30px;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 150px;
  height: 45px;
`;

const Google = styled.div`
  width: 48px;
  height: 48px;
  /* border: 1px solid black; */
  border-radius: 50px;
  background-image: url("/assets/images/google.png");
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 30px;
`;
const Facebook = styled(Google)`
  background-image: url("/assets/images/facebook.png");
`;
