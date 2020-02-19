import React from "react";
import styled from "styled-components";
import NextTrip from "./NextTrip";
import { withTranslation } from "../../i18n";
import PropTypes from "prop-types";

const RecommendCity = ({ t }) => {
  return (
    <MainContainer>
      <Title>{t("todayCity")}</Title>
      <Div>
        <NextTrip
          width={"608px"}
          height={"148px"}
          title={t("headerImgTitle")}
          content={t("headerImgContent")}
          marginTop={"24px"}
        />
        <NextTrip
          width={"608px"}
          height={"148px"}
          title={t("headerImgTitle")}
          content={t("headerImgContent")}
          marginTop={"24px"}
        />
        <NextTrip
          width={"608px"}
          height={"148px"}
          title={t("headerImgTitle")}
          content={t("headerImgContent")}
          marginTop={"16px"}
        />
        <NextTrip
          width={"608px"}
          height={"148px"}
          title={t("headerImgTitle")}
          content={t("headerImgContent")}
          marginTop={"16px"}
        />
      </Div>
    </MainContainer>
  );
};
RecommendCity.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

RecommendCity.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("common")(RecommendCity);

const MainContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  /* border: 1px solid salmon; */
  height: 365px;
  margin-top: 64px;
`;
const Title = styled.h1`
  font-family: NotoSansCJKkr;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.45;
  text-align: left;
  color: #3b3b3b;
  margin-left: 24px;
`;

const Div = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid salmon; */
  justify-content: space-around;
  align-items: center;
`;
