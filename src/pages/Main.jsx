import React from "react";
import styled from "styled-components";
import axios from "axios";
import Banner from "../components/Banner";
import withLayout from "../components/withLayout";
import Date from "../components/Date";

const ContainerWrapper = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 25px;
  }
`;
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      movies2 : []
    };
  }

  render() {
    return (
      <>
        <ContainerWrapper
          style={{ marginTop: "5%", overflowX: "hidden", overflowY:"hidden", width: "100%" }}
        >
          <Date></Date>
        </ContainerWrapper>
      </>
    );
  }
}
export default withLayout(Main);