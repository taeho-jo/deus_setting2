import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { globalStyles } from "../styles/reset";
import { Provider, observer } from "mobx-react";
import CountryCodeStore from "../service/countryCode";
import { appWithTranslation } from "../i18n";
import initializeStore from "../stores/stores";
import firebase from "../firebase";
import { unKonwnUser, maintainState } from "../service/authService";

const Auth = firebase.auth();

@observer
class MyApp extends App {
  static async getInitialProps(appContext) {
    const mobxStore = initializeStore();
    appContext.ctx.mobxStore = mobxStore;
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      initialMobxState: mobxStore
    };
  }

  componentDidMount() {
    CountryCodeStore.getGeoInfo();
    unKonwnUser();
    maintainState();
    // console.log(AuthStore.isLoginUser.);
  }

  constructor(props) {
    super(props);
    const isServer = typeof window === "undefined";
    this.mobxStore = isServer
      ? props.initialMobxState
      : initializeStore(props.initialMobxState);
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider {...this.mobxStore}>
        <Head>
          <meta charSet="utf-8" />
          <style type="text/css">{globalStyles}</style>
          <title>DeusAdventures</title>
        </Head>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>
    );
  }
}

export default appWithTranslation(MyApp);
