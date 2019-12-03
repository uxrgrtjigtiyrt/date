import React from "react";
import styled from "styled-components";
import axios from "axios";
import Banner from "../components/Banner";
import withLayout from "../components/withLayout";
import Date from "../components/Date";
import Result from "../components/result";

const ContainerWrapper = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 25px;
  }
`;
class Main extends React.Component {


  handlingEdit = (e)=>{
    e.preventDefault();
    const {editInfoData} = this.props;
    const {dataInformation} = this.props;
    let {toggle} = this.state;
    if (toggle){
        editInfoData({
            name:this.state.name,
            phone:this.state.phone
        },dataInformation.key);
    }else{
        this.setState({
           name:dataInformation.name,
           phone:dataInformation.phone
        });
    }
   this.setState({
      toggle: !this.state.toggle
   });
};

  render() {
    return (
      <>
        <ContainerWrapper
          style={{ marginTop: "5%", overflowX: "hidden", overflowY:"hidden", width: "100%" }}
        >
          <Result></Result>
        </ContainerWrapper>
      </>
    );
  }
}
export default withLayout(Main);