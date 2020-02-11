import firebase from "../firebase";
import { moveLogin, moveHome } from "./routerService";
import { AuthStore } from "../stores/authStore";
import { getDisplayName } from "next/dist/next-server/lib/utils";

const Auth = firebase.auth();

export const unKonwnUser = () => {
  if (Auth.currentUser === null) {
    Auth.signInAnonymously()
      .then(res => {
        if (res) {
          Auth.onAuthStateChanged(user => {
            console.log("익명유저", user);
            sessionStorage.setItem("anonymousUid", user.uid);
            sessionStorage.setItem("isAnonymous", user.isAnonymous);
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};

export const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(res => {
      if (Auth.currentUser === null) {
        Auth.signInAnonymously();
      }
    });
  sessionStorage.clear();
  AuthStore.isLogouted();
  AuthStore.userInfoDelete();
};

export const linkEmail = (email, password) => {
  const credential = firebase.auth.EmailAuthProvider.credential(
    email,
    password
  );
  Auth.currentUser
    .linkWithCredential(credential)
    .then(res => {
      if (res) {
        console.log("이것은 연동1", res);
        Auth.onAuthStateChanged(user => {
          console.log("유저", user);
          sessionStorage.setItem("email", user.email);
          sessionStorage.setItem("uid", user.uid);
          sessionStorage.setItem("isAnonymous", user.isAnonymous);
          AuthStore.emailLoginUser(user.email, user.uid, user.isAnonymous);
        });
        AuthStore.emailLoginUser();
        moveHome();
      }
    })
    .catch(e => {
      console.log(e);
    });
};

export const emailLogin = (email, password) => {
  Auth.signInWithEmailAndPassword(email, password)
    .then(res => {
      if (res) {
        console.log("이것은 기존1", res);

        sessionStorage.setItem("email", res.user.email);
        sessionStorage.setItem("uid", res.user.uid);
        sessionStorage.setItem("isAnonymous", res.user.isAnonymous);
        AuthStore.emailLoginUser(
          res.user.email,
          res.user.uid,
          res.user.isAnonymous
        );

        AuthStore.isLogined();
        moveHome();
      }
    })
    .catch(e => {
      console.log(e);
    });
};

export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(res => {
      if (res) {
        console.log("credential: ", res.credential);
        console.log("user: ", res.user);
        console.log("res: ", res);
        sessionStorage.setItem("accessToken", res.credential.accessToken);
        sessionStorage.setItem("idToken", res.credential.idToken);
        sessionStorage.setItem("uid", res.user.uid);
        sessionStorage.setItem("googleEmail", res.user.email);
        sessionStorage.setItem("displayName", res.user.displayName);
        AuthStore.googleUser(
          res.user.email,
          res.user.uid,
          res.user.displayName
        );
        AuthStore.isLogined();
        moveHome();
      }
    })
    .catch(error => {
      alert("다시 로그인하세요" + error.message);
      console.log(error);
    });
};

export const linkGoogleSignUp = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  Auth.currentUser
    .linkWithPopup(provider)
    .then(res => {
      console.log("성공", res);
      sessionStorage.setItem("accessToken", res.credential.accessToken);
      sessionStorage.setItem("idToken", res.credential.idToken);
      sessionStorage.setItem("uid", res.user.uid);
      sessionStorage.setItem("googleEmail", res.user.email);
      sessionStorage.setItem("displayName", res.user.displayName);
      AuthStore.googleUser(res.user.email, res.user.uid, res.user.displayName);
      AuthStore.isLogined();
      moveHome();
    })
    .catch(e => {
      console.log("실패", e);
    });
};

export const facebookLogin = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(res => {
      if (res) {
        console.log("credential: ", res.credential);
        console.log("user: ", res.user);
        console.log("res: ", res);
        sessionStorage.setItem("accessToken", res.credential.accessToken);
        sessionStorage.setItem("uid", res.user.uid);
        sessionStorage.setItem("facebookEmail", res.user.email);
        AuthStore.facebookUser(res.user.email, res.user.uid);
        AuthStore.isLogined();
        moveHome();
      }
    })
    .catch(error => {
      alert("다시 로그인하세요" + error.message);
      console.log(error);
    });
};

export const linkFacebookSignUp = () => {
  const provider = new firebase.auth.FacebookAuthProvider();

  Auth.currentUser
    .linkWithPopup(provider)
    .then(res => {
      console.log("fa", res);
      sessionStorage.setItem("accessToken", res.credential.accessToken);
      sessionStorage.setItem("idToken", res.credential.idToken);
      sessionStorage.setItem("uid", res.user.uid);
      sessionStorage.setItem("facebookEmail", res.user.email);
      AuthStore.facebookUser(res.user.email, res.user.uid);
      AuthStore.isLogined();
      moveHome();
    })
    .catch(e => {
      console.log("fa", e);
    });
};

export const maintainState = () => {
  const uid = sessionStorage.getItem("uid") || "";
  const email = sessionStorage.getItem("email") || "";
  const isAnonymous = sessionStorage.getItem("isAnonymous") || "";
  const googleEmail = sessionStorage.getItem("googleEmail") || "";
  const displayName = sessionStorage.getItem("displayName") || "";
  const facebookEmail = sessionStorage.getItem("facebookEmail") || "";

  {
    uid ? AuthStore.isLogined() : AuthStore.isLogouted();
  }
  {
    email && AuthStore.emailLoginUser(email, uid, isAnonymous);
  }
  {
    facebookEmail && AuthStore.facebookUser(facebookEmail, uid);
  }
  {
    googleEmail && AuthStore.googleUser(googleEmail, uid, displayName);
  }
};
