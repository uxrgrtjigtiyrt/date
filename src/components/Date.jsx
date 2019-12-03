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



class Date extends React.Component {

  state = {
    checked: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
  }
  ifx = i => {
    this.setState({
      checked: this.state.checked[i]=1,
    });
  }

  ifnx = i => {
    this.setState({
      checked: this.state.checked[i]=0,
    });
  }


  onClickDay=u=>{
    let i;
    let v;
    let ch;
    console.log(u);
     v=String(u).slice(8,10);
     if(v.slice(0,1)=="0"){
       v=v.slice(1,2);
      }
    var tile=document.getElementsByClassName("react-calendar__tile");
    for(i=0;i<tile.length;i++){
      if(tile[i].firstChild.innerHTML==v||tile[i].firstChild.innerHTML=="X"){
        ch=tile[i].firstChild;
        break;
      }
    }
    console.log(ch.check);
    if(ch.check==false){
      ch.check=true;
      ch.innerHTML=v;

    }
    
    else if(ch.check==true){
      ch.check=false;
      ch.innerHTML="X";
    }
    else if(ch.check==undefined){
      ch.check=false;
      ch.innerHTML="X";
    }
    console.log(this.state.checked);
  }

  render() {
    return (
      <Container>
        <Calendar className="calendar" onClickDay={this.onClickDay}/>
      </Container>
    );
  }
}
export default Date;