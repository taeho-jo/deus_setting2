import React, { Component } from "react";
import styled from "styled-components";
import { withTranslation } from "../i18n";
import { observer } from "mobx-react";
import { linkEmail } from "../service/authService";
import { linkGoogleSignUp, linkFacebookSignUp } from "../service/authService";

@observer
class SignUp extends Component {
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

  signUp = () => {
    linkEmail(this.state.email, this.state.password);
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
            <Button onClick={this.signUp}>{t("signUp")}</Button>
          </BtnDiv>
          <BtnDiv>
            <Google onClick={linkGoogleSignUp}></Google>
            <Facebook onClick={linkFacebookSignUp}></Facebook>
          </BtnDiv>
        </Container>
        {/* <div onClick={this.}></div> */}
      </Div>
    );
  }
}

SignUp.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

export default withTranslation("common")(SignUp);

const Div = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 400px;
  height: 500px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

// "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ4ZWZlYTFmNjZlODdiYjM2YzJlYTA5ZDgzNzMzOGJkZDgxMDM1M2IiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTA4NDU0OTE0MDA3OC1hc2lyZzc3bzI0MWc5NzM2bWpncnJoZTExaXJ1NGZmNC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjEwODQ1NDkxNDAwNzgtYXNpcmc3N28yNDFnOTczNm1qZ3JyaGUxMWlydTRmZjQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDUyMTQ2NDQzNzEwOTIyMzA0NTAiLCJlbWFpbCI6ImpvdGFuZzM3MjZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJvM3J4WmNBTFRxMVJPT21QelZ3WjV3IiwiaWF0IjoxNTgxMDUyOTA0LCJleHAiOjE1ODEwNTY1MDR9.KZfF9bdtp5mo3wNIj-DE2fhbFcEN_DyG5ZUpv35ultqJq-w2uM4ReWPIRDIHL35Sz8x0uiikImTI4aRqReVDKjVxz9iss4Y3K9tVSj1FGcTrTDnHQSW9sjcV2lTNOfREAd5xd6M5JBBiWYChoubeZlD_AfOD5b80KWKVvvvD2Nqt4RtMGOk4BeeWIbvIW59HUfIef1Bo_1Q27HtvH6jaihZHv346_KGC2KQGBnVCXvtrDbAYPuHgEo485n1T52Uf4bbXxQKOe0Q0fnysGA5ya9N6--Vx5msIcR3eK7aKuzhxOd1CWx1NWWCIgYyVawN7ivWjp1eIjKPlvyUC_y_3Jg"
