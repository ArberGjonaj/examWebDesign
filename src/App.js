import React from 'react';

class App extends React.Component{
  state={
    backGroundColor:'red',
    font:12,
    size:14
  }
  backgroundColorChanger=()=>{
   let backGroundColor=this.state.backGroundColor;
    if(backGroundColor==='red'){
      this.setState({backGroundColor:'green'})
    }
    if(backGroundColor==='green'){
      this.setState({backGroundColor:'red'})
    }
  }
  fontChanger=()=>{
let font = this.state.font;
this.setState({font:font+1});

  }
  sizeChanger=()=>{
    let size = this.state.size;
    this.setState({size:size+100});
    
      }
  render(){
  return (
    <div style={{backgroundColor:this.state.backGroundColor}}  className="App">
     <h1 style={{height:`${this.state.size}px`,width:`${this.state.size}px`,fontSize:`${this.state.font}px`}}>Introduction to Web Design</h1>
     <button  onClick={this.backgroundColorChanger}>Background Color Changer</button>
     <button onClick={this.fontChanger}>Font size changer</button>
     <button  onClick={this.sizeChanger}>Size changer</button>
    </div>
  );}
}

export default App;
