import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { i18n, withTranslation } from "../i18n";
import Layout from "../components/Layout";
import { observer } from "mobx-react";
import { AuthStore } from "../stores/authStore";
import Subheader from "../components/Subheader/Subheader";
import Mainpage from "../components/Mainpage/Mainpage";
import Footer from "../components/Footer/Footer";

@observer
class Home extends Component {
  check = () => {
    const token = sessionStorage.getItem("idToken");
    console.log(token);
  };

  checkClick = () => {
    console.log("dndkdndk");
  };

  render() {
    const { t } = this.props;
    return (
      <Layout>
        <Subheader />
        <Mainpage />
        <Footer></Footer>
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
