import React, { useState } from "react";
import styled from "styled-components";
import { i18n, withTranslation } from "../../i18n";
import PropTypes from "prop-types";
import Select, { NonceProvider } from "react-select";

const Footer = ({ t }) => {
  const [ko, setKo] = useState("");
  const checkClick = e => {
    console.log(e);
    if (e.value === `${t("kolanguage")}`) {
      i18n.changeLanguage("ko");
      console.log(`${t("kolanguage")}`);
    } else if (e.value === `${t("enlanguage")}`) {
      i18n.changeLanguage("en");
    }
  };
  const styles = {
    control: styles => ({ ...styles, backgroundColor: "#f9f9f9" })
  };
  const style = {
    control: styles => ({
      ...styles,
      backgroundColor: "#f9f9f9",
      marginTop: "24px"
    })
  };

  const money = [
    { value: `${t("koCurrency")}`, label: `${t("koCurrency")}` },
    { value: `${t("enCurrency")}`, label: `${t("enCurrency")}` }
  ];
  const lang = [
    { value: `${t("kolanguage")}`, label: `${t("kolanguage")}` },
    { value: `${t("enlanguage")}`, label: `${t("enlanguage")}` }
  ];
  return (
    <MainContainer>
      <Div>
        <TextBox>
          <P>
            {t("representativeName")} / {t("cellNum")}: 010-6790-0979
            <br />
            {t("companyRegistrationNumber")}: 123-123-123
            <br />
            {t("mailOrderNumber")}: 123-123-123
            <br />
            {t("patentApplicationNumber")}: 123123123 /{" "}
            {t("trademarkRegistrationNumber")}: 123123123
            <br />© Deus Adventures 2020 All Rights Reserved.
          </P>
        </TextBox>
        <SocialBox>
          <Images src="/assets/images/footerfacebook.png" />
          <Images src="/assets/images/instagram.png" />
        </SocialBox>
      </Div>
      <SelectBox>
        <Select
          styles={styles}
          placeholder={t("currency")}
          options={money}
        ></Select>
        <Select
          onChange={checkClick}
          styles={style}
          placeholder={t("language")}
          options={lang}
          value={ko}
        ></Select>
      </SelectBox>
    </MainContainer>
  );
};

Footer.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

Footer.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("common")(Footer);

const MainContainer = styled.div`
  height: 202px;
  width: 100%;
  max-width: 1280px;
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
`;

const Button = styled.button`
  background: red;
  color: white;
`;
const Div = styled.div`
  /* border: 1px solid red; */
  padding-left: 32px;
`;
const TextBox = styled.div`
  /* border: 1px solid salmon; */
`;
const SocialBox = styled(TextBox)`
  margin-top: 24px;
`;
const Images = styled.img`
  :last-child {
    margin-left: 32px;
  }
`;

const P = styled.p`
  font-family: NotoSansCJKkr;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: 0.14px;
  text-align: left;
  color: #3b3b3b;
`;

const SelectBox = styled.div`
  /* border: 1px solid blue; */
  width: 366px;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
`;

// const Select = styled.select`
//   width: 334px;
//   height: 48px;
//   padding: 0 16px;
//   background-color: #f9f9f9;
//   :last-child {
//     margin-top: 24px;
//   }
// `;

// const Option = styled.option`
//   background-color: #f9f9f9;
// `;
