import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";
import { observer } from "mobx-react";
import { withTranslation } from "../i18n";
import { AuthStore } from "../stores/authStore";
import { moveSignIn } from "../service/routerService";
import { logout } from "../service/authService";

@observer
class Layout extends Component {
  render() {
    const { t, children } = this.props;
    return (
      <>
        <Nav>
          {AuthStore.isLogin ? (
            <Login onClick={logout}>{t("logout")}</Login>
          ) : (
            <Login onClick={moveSignIn}>{t("signIn")}</Login>
          )}

          <Link href="sign_up">
            <Login>{t("signUp")}</Login>
          </Link>
        </Nav>
        <div>{children}</div>
      </>
    );
  }
}

Layout.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

export default withTranslation("common")(Layout);

const Nav = styled.div`
  height: 70px;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Login = styled.h1`
  margin-right: 20px;
  font-size: 20px;
`;
