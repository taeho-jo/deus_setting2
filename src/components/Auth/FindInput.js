import React, { Component } from "react";
import styled from "styled-components";
import { withTranslation } from "../../i18n";
import firebase from "../../firebase";

const Auth = firebase.auth();

class FindInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };
  }
  changeValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  findPw = () => {
    const emailAddress = this.state.email;

    Auth.sendPasswordResetEmail(emailAddress)
      .then(function() {
        alert("메일을 전송했습니다");
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    const { t } = this.props;
    const { email } = this.state;
    return (
      <>
        <InputBox>
          <P>{t("email")}</P>
          <Input
            type="email"
            value={email}
            name="email"
            autoComplete="off"
            onChange={this.changeValue}
          />
        </InputBox>
        <LoginButton onClick={this.findPw}>{t("sendLink")}</LoginButton>
      </>
    );
  }
}

FindInput.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

export default withTranslation("common")(FindInput);

const InputBox = styled.div`
  margin-top: 40px;
`;
const P = styled.p`
  font-family: NotoSansCJKkr;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: normal;
  text-align: left;
  color: #66696a;
`;

const Input = styled.input`
  font-family: NotoSansCJKkr;
  font-size: 16px;
  line-height: 1.06;
  letter-spacing: normal;
  text-align: left;
  color: #3b3b3b;
  width: 366px;
  height: 32px;
  border: none;
  border-bottom: 1px solid #ededed;
  outline: none;
  :focus {
    border: none;
    border-bottom: 1px solid #42acc6;
  }
  ::placeholder {
    font-size: 12px;
  }
`;

const LoginButton = styled.button`
  width: 366px;
  height: 48px;
  border: none;
  border-radius: 30px;
  background-color: #42acc6;
  margin-top: 40px;
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.21;
  color: #ffffff;
  outline: none;
  cursor: pointer;
`;
