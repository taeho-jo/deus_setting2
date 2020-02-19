import React, { Component } from "react";
import styled from "styled-components";
import { withTranslation } from "../../i18n";
import PropTypes from "prop-types";

class NextTrip extends Component {
  render() {
    const { title, content, width, height, marginTop } = this.props;
    return (
      <MainBox width={width} height={height} marginTop={marginTop}>
        <H1>{title}</H1>
        <P>{content}</P>
      </MainBox>
    );
  }
}

NextTrip.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

NextTrip.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("common")(NextTrip);

const MainBox = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  opacity: 0.9;
  border-radius: 8px;
  background-image: url("/assets/images/space.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.marginTop};
`;

const H1 = styled.h1`
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  font-family: NotoSansCJKkr;
  font-size: 21px;
  font-weight: bold;
  line-height: 0.95;
  letter-spacing: normal;
  color: #ffffff;
`;

const P = styled.p`
  margin-top: 4px;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: normal;
  color: #ffffff;
`;
