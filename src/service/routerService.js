import Router from "next/router";

export const moveLogin = () => {
  Router.push("/sign_in");
};

export const moveHome = () => {
  Router.push("/");
};

export const moveSignUp = () => {
  Router.push("/sign_up");
};
