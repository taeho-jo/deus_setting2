import { observable } from "mobx";

export const AuthStore = observable({
  isLogin: false,
  loginUserName: "홍길동",
  inputValue: {
    email: "",
    password: ""
  },
  isLoginUser: {
    email: "",
    uid: "",
    isAnonymous: ""
  },
  googleLoginUser: {
    googleEmail: "",
    uid: "",
    displayName: ""
  },
  facebookLoginUser: {
    facebookEmail: "",
    uid: ""
  },

  isValue(email, password) {
    this.inputValue = {
      email,
      password
    };
  },

  isLogined() {
    this.isLogin = true;
  },
  isLogouted() {
    this.isLogin = false;
  },
  userInfoDelete() {
    (this.isLoginUser = {
      email: "",
      uid: "",
      isAnonymous: ""
    }),
      (this.googleLoginUser = {
        googleEmail: "",
        uid: "",
        displayName: ""
      }),
      (this.facebookLoginUser = {
        facebookEmail: "",
        uid: ""
      });
  },

  emailLoginUser(email, uid, isAnonymous) {
    this.isLoginUser = {
      email,
      uid,
      isAnonymous
    };
  },
  googleUser(googleEmail, uid, displayName) {
    this.googleLoginUser = {
      googleEmail,
      uid,
      displayName
    };
  },
  facebookUser(facebookEmail, uid) {
    this.facebookLoginUser = {
      facebookEmail,
      uid
    };
  }
});
