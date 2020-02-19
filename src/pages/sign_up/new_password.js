import React, { Component } from "react";
import styled from "styled-components";
import firebase from "../../firebase";

const Auth = firebase.auth();

class NewPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userPassword: "",
      rePassword: ""
    };
  }

  new = e => {
    this.setState({
      userPassword: e.target.value
    });
  };
  re = e => {
    this.setState({
      rePassword: e.target.value
    });
  };

  resetPassword = () => {
    const user = Auth.currentUser;
    const newPassword = this.state.userPassword;

    if (this.state.userPassword === this.state.rePassword) {
      user
        .updatePassword(newPassword)
        .then(function() {
          alert("재설정되었습니당");
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      alert("다시 한번 확인해주세요");
    }
  };

  render() {
    const { userPassword, rePassword } = this.state;
    return (
      <Container>
        <Input
          value={userPassword}
          type="password"
          onChange={this.new}
          placeholder="비밀번호"
        />
        <Input
          value={rePassword}
          type="password"
          onChange={this.re}
          placeholder="비밀번호 확인"
        />
        <Button onClick={this.resetPassword}>비밀번호 재설정</Button>
      </Container>
    );
  }
}

export default NewPassword;
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  height: 24px;
  width: 300px;
`;

const Button = styled.button`
  height: 24px;
  width: 300px;
`;
