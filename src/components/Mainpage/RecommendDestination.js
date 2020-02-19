import React from "react";
import styled from "styled-components";
import DestinationBox from "./DestinationBox";
import { withTranslation } from "../../i18n";
import PropTypes from "prop-types";

const RecommendDestination = ({ t }) => {
  return (
    <MainConatainer>
      <Title>{t("todayDestination")}</Title>
      <Div>
        <DestinationBox
          title={t("destination1")}
          city={t("city1")}
          city2={t("city2")}
          background={"/assets/images/seoul.jpg"}
        />
        <DestinationBox
          title={t("destination2")}
          city={t("city3")}
          city2={t("city4")}
          background={"/assets/images/busan.jpg"}
        />
        <DestinationBox
          title={t("destination3")}
          city={t("city5")}
          city2={t("city6")}
          background={"/assets/images/air.jpg"}
        />
        <DestinationBox
          title={t("destination4")}
          city={t("city7")}
          city2={t("city8")}
          background={"/assets/images/china.jpg"}
        />
        <DestinationBox
          title={t("destination5")}
          city={t("city9")}
          city2={t("city10")}
          background={"/assets/images/como.jpg"}
        />
        <DestinationBox
          title={t("destination6")}
          city={t("city11")}
          city2={t("city12")}
          background={"/assets/images/uyuni.jpg"}
        />
      </Div>
    </MainConatainer>
  );
};

RecommendDestination.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

RecommendDestination.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("common")(RecommendDestination);

const MainConatainer = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 379px;
  /* border: 1px solid salmon; */
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  display: flex;
  margin: 0 24px;
  justify-content: space-between;
`;
