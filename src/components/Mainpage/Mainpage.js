import React, { Component } from "react";
import styled from "styled-components";
import NextTrip from "./NextTrip";
import RecentProduct from "./RecentProduct";
import Benner from "./Benner";
import RecommendCity from "./RecommendCity";
import RecommendDestination from "./RecommendDestination";
import { withTranslation } from "../../i18n";
import PropTypes from "prop-types";

class Mainpage extends Component {
  render() {
    const { t } = this.props;
    return (
      <MainContainer>
        <Div>
          <Title>{t("subHeaderTitle")}</Title>
          <ImgBox>
            <NextTrip
              width={"400px"}
              height={"160px"}
              title={t("headerImgTitle")}
              content={t("headerImgContent")}
            />
            <NextTrip
              width={"400px"}
              height={"160px"}
              title={t("headerImgTitle")}
              content={t("headerImgContent")}
            />
            <NextTrip
              width={"400px"}
              height={"160px"}
              title={t("headerImgTitle")}
              content={t("headerImgContent")}
            />
          </ImgBox>
          <RecentProduct
            margin={"64px"}
            color={"#f5fafb"}
            title={t("recentProduct")}
          />
          <RecentProduct
            margin={"0px"}
            color={"#ffffff"}
            title={t("todayRecommend")}
          />
          <RecentProduct
            margin={"-64px"}
            color={"#ffffff"}
            title={t("todayProduct")}
          />
          <Benner
            width={"264px"}
            height={"156px"}
            url={"/assets/images/main_illu_01.png"}
            fontColor={"#42acc6"}
            content={t("bennerContent")}
            title={t("bennerTitle")}
            color={"#f4fafc"}
            marginLeft={"8px"}
          />
          <RecommendCity />
          <RecommendDestination />
          <Benner
            url={"/assets/images/main_illu_02.png"}
            width={"264px"}
            height={"180px"}
            marginTop={"64px"}
            color={"#fafafa"}
            title={t("secondBennerTitle")}
            content={t("secondBennerContent")}
            marginLeft={"18px"}
            bottom={"4px"}
          />
        </Div>
      </MainContainer>
    );
  }
}

Mainpage.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

Mainpage.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("common")(Mainpage);

const MainContainer = styled.main`
  width: 100%;
  max-width: 1280px;
  height: auto;
  border-radius: 48px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  padding-bottom: 64px;
`;
const Div = styled.div`
  width: 100%;
  max-width: 1280px;
`;

const Title = styled.h1`
  font-family: NotoSansCJKkr;
  font-size: 19px;
  font-weight: bold;
  line-height: 1.47;
  letter-spacing: normal;
  color: #3b3b3b;
  padding-top: 64px;
  margin-left: 24px;
`;

const ImgBox = styled.div`
  /* border: 1px solid red; */
  display: flex;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  justify-content: space-between;
  /* border-radius: 8px; */
  /* margin: 0 24px; */
`;
