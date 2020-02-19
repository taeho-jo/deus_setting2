import React from "react";
import styled from "styled-components";
import { withTranslation } from "../../i18n";
import PropTypes from "prop-types";

const Product = ({ image, t }) => {
  return (
    <MainBox>
      <Img image={image}>
        <StarBox>
          <FillStar></FillStar>
          <Score>4.5</Score>
        </StarBox>
      </Img>

      <TextBox>
        <Div>
          <P>{t("hashFoodTrip")}</P>
          <P>{t("hashTogether")}</P>
          <P>{t("hashSea")}</P>
        </Div>
        <H1>
          {t("recentProductTitle")}
          <br />
          {t("recentProductSubTitle")}
        </H1>
        <Date>{t("period")}</Date>
        <Price>$ 500 ~</Price>
      </TextBox>
    </MainBox>
  );
};

Product.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

Product.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("common")(Product);

const MainBox = styled.div`
  width: 296px;
  height: 312px;
  border-radius: 8px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.06);
  background-color: #ffffff;
`;

const Img = styled.div`
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 136px;
  position: relative;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const StarBox = styled.div`
  width: 50px;
  height: 20px;
  border-radius: 10px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  position: absolute;
  margin: 16px 0 0 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const FillStar = styled.div`
  /* border: 1px solid black; */
  background-image: url("/assets/images/star_ico.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 10px;
  height: 10px;
  margin-left: 8px;
`;

const Score = styled.p`
  font-family: NotoSansCJKkr;
  font-size: 12px;
  font-weight: bold;
  line-height: 0.67;
  letter-spacing: normal;
  color: #3b3b3b;
  margin-left: 6px;
`;

const TextBox = styled.div`
  /* border: 1px solid black; */
  padding-left: 16px;
`;

const Div = styled.div`
  /* border: 1px solid red; */
  display: flex;
  margin-top: 16px;
`;
const P = styled.p`
  font-family: NotoSansCJKkr;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: normal;
  color: #42acc6;
  margin-right: 9px;
`;

const H1 = styled.h1`
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.43;
  letter-spacing: normal;
  color: #3b3b3b;
  margin-top: 8px;
`;

const Date = styled.p`
  font-family: NotoSansCJKkr;
  font-size: 12px;
  line-height: 1.75;
  letter-spacing: normal;
  color: #acacac;
  margin-top: 8px;
`;

const Price = styled.p`
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #3b3b3b;
  margin-top: 8px;
`;
