import React from "react";
import Preview from "../components/Preview";
import MovieContainer from "../components/MovieContainer";
import styled from "styled-components";
import axios from "axios";
import Banner from "../components/Banner";
import withLayout from "../components/withLayout";

const MovieContainerWrapper = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 25px;
  }
`;
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
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
  }

  render() {
    return (
      <>
        <Preview />
        <MovieContainerWrapper
          style={{ marginTop: "45%", overflowX: "hidden", width: "100%" }}
        >
          <MovieContainer title="TV프로그램" movies={this.state.movies} />
        </MovieContainerWrapper>
      </>
    );
  }
}
export default withLayout(Main);
