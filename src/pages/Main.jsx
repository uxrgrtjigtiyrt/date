import React from "react";
import styled from "styled-components";
import axios from "axios";
import Banner from "../components/Banner";
import withLayout from "../components/withLayout";
import Date from "../components/Date";

const MovieContainerWrapper = styled.div`
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

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr"
      )
      .then(response => {
        console.log(response);
        this.setState({ movies: response.data.results });
      })
      .catch(err => {
        console.log("err!!", err);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr"
      )
      .then(response => {
        console.log(response);
        this.setState({ movies2: response.data.results });
      })
      .catch(err => {
        console.log("err!!", err);
      });
  }

  render() {
    return (
      <>
        <MovieContainerWrapper
          style={{ marginTop: "5%", overflowX: "hidden", overflowY:"hidden", width: "100%" }}
        >
          <Date></Date>
        </MovieContainerWrapper>
      </>
    );
  }
}
export default withLayout(Main);