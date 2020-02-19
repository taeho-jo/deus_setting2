import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { observer } from "mobx-react";
import { AuthStore } from "../../stores/authStore";
import { withTranslation } from "../../i18n";

@observer
class Subheader extends Component {
  render() {
    const { t } = this.props;
    return (
      <Div>
        <Container>
          <P>
            {AuthStore.isLogin ? `${t("helloMessage")}` : `${t("beforeLogin")}`}
            <br />
            {AuthStore.isLogin && `${AuthStore.loginUserName}님`}
          </P>
          <InputBox>
            <SearchInput placeholder={t("searchInput")} />
            <SearchLogo></SearchLogo>
          </InputBox>
        </Container>
      </Div>
    );
  }
}

Subheader.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

Subheader.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("common")(Subheader);

const Div = styled.div`
  width: 100%;
  height: 248px;
  color: white;
  font-size: 20px;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
`;

const P = styled.p`
  padding-top: 48px;
  padding-left: 31px;
  height: 80px;
  font-family: NotoSansCJKkr;
  font-size: 27px;
  font-weight: bold;
  line-height: 1.48;
  letter-spacing: normal;
  color: #3b3b3b;
`;

const InputBox = styled.div`
  margin-top: 24px;
  display: flex;
  width: 704px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 704px;
  height: 48px;
  border-radius: 8px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  border: none;
  margin-left: 32px;
  font-family: NotoSansCJKkr;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.13px;
  padding-left: 16px;
  color: #3b3b3b;
  ::placeholder {
    font-family: NotoSansCJKkr;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.13px;
    /* padding-left: 16px; */
    color: #d3d3d3;
  }
`;

const SearchLogo = styled.div`
  background-image: url("/assets/images/magnify.png");
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  background-size: contain;
  position: absolute;
  right: 16px;
  top: 12px;
`;

{
  /* <Div>{t("helloMessage")}</Div>
        {AuthStore.isLogin && <Div>{AuthStore.isLoginUser.email}</Div>}
        {AuthStore.isLogin && (
          <Div>{AuthStore.googleLoginUser.displayName}</Div>
        )}
        {AuthStore.isLogin && (
          <Div>{AuthStore.facebookLoginUser.facebookEmail}</Div>
        )}
        {AuthStore.isLogin ? (
          <div>{t("logout")}</div>
        ) : (
          <div>{t("signIn")}</div>
        )} */
}
