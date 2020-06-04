import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);
class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
  }



  handleInput(e){

this.setState({
  currentItem:{
    text:e.target.value,
    key:Date.now()
  }
})

}

addItem(e){
e.preventDefault();
const newItem = this.state.currentItem;
console.log(newItem);
if(newItem.text!=="")
{
  const newItems =[...this.state.items,newItem];
  this.setState({
    items:newItems,
    currentItem:{
      text:'',
      key:''

    }
  })
}
}

deleteItem(key){

  const filterItems= this.state.items.filter(item => item.key!== key);
    this.setState({
      items:filterItems
    })

}

render(){

  return(
      <div className="stt">
        <header>
        <form id="to-do" onSubmit={this.addItem}>
        <input type=" text " placeholder="Enter Text" 
          value={this.state.currentItem.text}
          onChange={this.handleInput}   />
        <button type="submit">Add</button>



        </form>

      </header>
      <ListItem items={this.state.items} deleteItem={this.deleteItem}>
      

      </ListItem>

      </div>

  );
}

}

export default App;
