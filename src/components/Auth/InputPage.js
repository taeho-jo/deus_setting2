import React, { Component } from "react";
import styled from "styled-components";
import { withTranslation } from "../../i18n";
import { emailLogin } from "../../service/authService";
import { observer } from "mobx-react";
import { AuthStore } from "../../stores/authStore";

@observer
class InputPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  changeValue = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        AuthStore.isValue(this.state.email, this.state.password);
      }
    );
  };
  render() {
    const { t, login, sign, msg } = this.props;
    const { email, password } = this.state;
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
          <Div>
            <P>{t("password")}</P>
            <Input
              type="password"
              value={password}
              name="password"
              onChange={this.changeValue}
            />
            <img src="/assets/images/lighteyes.png" alt="eye" />
          </Div>
        </InputBox>
        <FlexBox>
          <ForgetPassword>{msg}</ForgetPassword>
        </FlexBox>
        <LoginButton onClick={login}>{sign}</LoginButton>
      </>
    );
  }
}

InputPage.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

export default withTranslation("common")(InputPage);

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

const FlexBox = styled.div`
  width: 366px;
  display: flex;
  justify-content: flex-end;
  margin-top: 6px;
`;
const ForgetPassword = styled.span`
  font-family: NotoSansCJKkr;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: normal;
  text-align: left;
  color: #66696a;
  cursor: pointer;
`;

const LoginButton = styled.button`
  width: 366px;
  height: 48px;
  border: none;
  border-radius: 30px;
  background-color: #42acc6;
  margin-top: 32px;
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.21;
  color: #ffffff;
  outline: none;
  cursor: pointer;
`;
const Div = styled.div`
  margin-top: 32px;
  position: relative;
  & img {
    width: 24px;
    position: absolute;
    right: 12px;
    bottom: 10px;
  }
`;
