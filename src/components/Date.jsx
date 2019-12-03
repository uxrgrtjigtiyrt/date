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
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }
  }
  
  ifx = i => {
    this.setState({
      checked: !this.state.checked,
    });
  }

  ifnx = i => {
    this.setState({
      checked: !this.state.checked,
    });
  }

  editInfoData = (externalData, id)=>{
    let {info} = this.state;
    this.setState({
    info:info.map(data=>{
    if(data.key === id){
    return {
    ...externalData,
    key:id
    }
    }
    })
    })
    };

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
      this.ifnx(i);
    }
    
    else if(ch.check==true){
      ch.check=false;
      ch.innerHTML="X";
      this.ifx(i);
    }
    else if(ch.check==undefined){
      ch.check=false;
      ch.innerHTML="X";
      this.ifx(i);
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