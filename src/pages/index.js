import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { i18n, withTranslation } from "../i18n";
import Layout from "../components/Layout";
import { observer } from "mobx-react";
import { AuthStore } from "../stores/authStore";

@observer
class Home extends Component {
  check = () => {
    const token = sessionStorage.getItem("idToken");
    console.log(token);
  };

  render() {
    const { t } = this.props;
    return (
      <Layout>
        <Div>{t("helloMessage")}</Div>
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
        )}
        <Button onClick={() => i18n.changeLanguage("en")}>EN</Button>
        <Button onClick={() => i18n.changeLanguage("ko")}>KO</Button>
        <Button onClick={this.check}>TOKEN</Button>
      </Layout>
    );
  }
}

Home.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

Home.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("common")(Home);

const Div = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  color: white;
  font-size: 20px;
  background: #273c75;
`;
const Button = styled.button`
  background: red;
  color: white;
`;
