import React from "react";
import styled from 'styled-components';
import Calendar from 'react-calendar';
import './Date.css';

const Container=styled.div`
  display:flex;
  flex-direction:column;
`;

function check(e){
  e.value=""
}



class result extends React.Component {
  render() {
    return (
      <>
        <div style="border:1px solid #dedede; width:600px; height:250px; line-height:250px; color:#666;font-size:100px; text-align:center;" id="clock">
            </div>
            <h1 id="cal"></h1>
      </>
    );
  }
}
export default result;