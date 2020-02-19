import React from "react";
import { withTranslation } from "react-i18next";
import styled from "styled-components";

const SocialPage = ({ facebook, google }) => {
  return (
    <>
      <OrBox>
        <EmptyBox></EmptyBox>
        <OrText>Or</OrText>
        <EmptyBox></EmptyBox>
      </OrBox>
      <LogoBox>
        <LogoFlexBox>
          <FacebookBox onClick={facebook}>
            <Facebook />
          </FacebookBox>
          <LogoText>facebook</LogoText>
        </LogoFlexBox>
        <LogoFlexBox>
          <GoogleBox onClick={google}>
            <Google />
          </GoogleBox>
          <LogoText>google</LogoText>
        </LogoFlexBox>
      </LogoBox>
    </>
  );
};

SocialPage.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

export default withTranslation("common")(SocialPage);

const OrBox = styled.div`
  width: 366px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const OrText = styled.div`
  width: 14px;
  height: 18px;
  font-family: NotoSansCJKkr;
  font-size: 12px;
  line-height: 1.5;
  text-align: left;
  color: #d3d3d3;
  margin: 0 10px;
`;

const EmptyBox = styled.div`
  border-top: 0.5px solid #d3d3d3;
  width: 100%;
`;

const LogoBox = styled.div`
  width: 366px;
  /* border: 1px solid black; */
  margin-top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :last-child {
    margin-left: 48px;
  }
`;

const FacebookBox = styled.div`
  width: 48px;
  height: 48px;
  /* border: 1px solid black; */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  cursor: pointer;
`;

const GoogleBox = styled(FacebookBox)``;

const Facebook = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("/assets/images/facebook.png");
  background-repeat: no-repeat;
  background-size: contain;
`;
const Google = styled(Facebook)`
  background-image: url("/assets/images/google.png");
`;

const LogoText = styled.p`
  font-family: NotoSansCJKkr;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.6px;
  text-align: left;
  color: #d3d3d3;
`;
