import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { i18n, Link, withTranslation } from "../i18n";

const Home = ({ t }) => {
  return (
    <>
      <Link href="/counter">
        <Div>{t("hi")}</Div>
      </Link>
      <Div>{t("home")}</Div>
      <Button onClick={() => i18n.changeLanguage("en")}>EN</Button>
      <Button onClick={() => i18n.changeLanguage("ko")}>KO</Button>
    </>
  );
};

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
