import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import './App.css';

class App extends Component{
//using the constructor to initialize local state of the component
  constructor(props){
    super(props);
    //assign the initial state to the component using this.state
    this.state = {
      title: 'React Simple Crud Application',
      act: 0,
      index: '',
      datas: []
    }
  }

  componentDidMount(){
      this.refs.name.focus();
  }

  fSubmit= (e) => {
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;

    if(this.state.act === 0){ //new
      let data = {
        name, address
      }
      datas.push(data);
    }
    else{                      //update
      let index = this.state.index;
      datas[index].name = name;
      datas[index].address = address;
    }

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.focus.names();
  }

  fRemove(i) {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas : datas
    });
    this.refs.myForm.reset();
    this.refs.focus.names();
  }

  fEdit(i) {
    let datas = this.state.datas[i];
    this.refs.name.value = datas.name;
    this.refs.address.value = datas.address;

    this.setState({
      act: 1,
      index: 1
    })


    this.refs.focus.names();
  }

  render(){
    let datas = this.state.datas;
      return (
        <div className="App">
          <h1>{this.state.title}</h1>
          <form ref="myForm" className="myForm">
            <input type="text" ref="name" placeholder="Enter your name" className="formField"/>
            <input type="text" ref="address" placeholder="Enter your Address" className="formField"/>
            <button onClick={(e)=>this.fSubmit(e)} className="myButton">Submit</button>
          </form>
          <pre>
            {/* using map function to loop within on our data */}
            {datas.map((data, i) =>
              <li key={i} className="myList">
                {i+1}, {data.name}, {data.address}
                <button onClick={()=>this.fRemove(i)} className="myListButton">Remove</button>
                <button onClick={()=>this.fEdit(i)} className="myListButton">Edit</button>
              </li>
              )}

          </pre>
        </div>
      );
    }
}

export default App;
