import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";
import { observer } from "mobx-react";
import { withTranslation } from "../i18n";
import { AuthStore } from "../stores/authStore";
import { moveLogin } from "../service/routerService";
import { logout } from "../service/authService";

@observer
class Layout extends Component {
  render() {
    const { t, children } = this.props;
    return (
      <>
        <Nav>
          <MenuDiv>
            <NavMeun>{t("mycalendar")}</NavMeun>
            <NavMeun>{t("myreservation")}</NavMeun>
            <NavMeun>{t("cart")}</NavMeun>
            {AuthStore.isLogin ? (
              <>
                <NavMeun onClick={logout}>{t("profile")}</NavMeun>
                <BellIcon />
              </>
            ) : (
              <NavLogin onClick={moveLogin}>{t("signIn")}</NavLogin>
            )}
          </MenuDiv>
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
  height: 64px;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MenuDiv = styled.div`
  /* border: 1px solid black; */
  display: flex;
`;

const NavMeun = styled.h1`
  margin-right: 32px;
  font-size: 14px;
  font-family: "NotoSansCJKkr";
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: #3b3b3b;
`;
const NavLogin = styled(NavMeun)`
  color: #42acc6;
`;
const BellIcon = styled.div`
  background-image: url("/assets/images/bell.png");
  margin-right: 32px;
  width: 24px;
  height: 24px;
`;
