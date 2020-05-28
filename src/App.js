import React from 'react';
import './App.css';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash)

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      items : [],
      currentIteam :  {
        text:'',
        key:''
      }
    }
     this.handleInput = this.handleInput.bind(this);
     this.addItem = this.addItem.bind(this);
     this.deletIteam = this.deletIteam.bind(this);
     this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(e){
    this.setState({
      currentIteam:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newIteam = this.state.currentIteam;
    console.log(newIteam);
    if(newIteam.text !== ''){
      const newIteams = [...this.state.items, newIteam];
      this.setState({
        items : newIteams,
        currentIteam :  {
          text : '',
          key : ''
        }
      })
    }
  }
  deletIteam(key){
    const deletedKey = this.state.items.filter(item => 
      item.key !== key)
      this.setState({
        items : deletedKey
      })
  }
  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
   
  }

  render(){
    return(
      <div className ="App">
        <form id= "to-do-form" onSubmit = {this.addItem}>
          <input type ="text" placeholder ="Enter The Task" 
          value= {this.state.currentIteam.text}
          onChange={this.handleInput} />
          <button type = "submit"> Add </button>
       </form>
       <ListItems items={this.state.items} deletIteam = {this.deletIteam} setUpdate={this.setUpdate}></ListItems>
      </div>
    )
  }
}

export default App;
