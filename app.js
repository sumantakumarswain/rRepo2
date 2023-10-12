
import React from 'react';

import { PureComponent } from 'react';

class App extends PureComponent{

state = {
  itemName : "",
  todoItems : []
}
 addItem = ()=>{
  if(this.state.itemName != ""){
  var todoItemsCopy = [...this.state.todoItems];
  todoItemsCopy.push(this.state.itemName);
  this.setState({ itemName: "",  todoItems : todoItemsCopy})
  }else{
    alert("please enter your item")
  }this.setState({todoItems : todoItemsCopy})
 }

 storeItemsName = (e)=>{
 
 this.setState({itemName : e.target.value})

 }

 deleteItem = (index)=>{
  var todoItemsCopy = [...this.state.todoItems];
  todoItemsCopy.splice(index,1);
  this.setState({  todoItems : todoItemsCopy})
 }
render(){
  return(
    <>
    <input placeholder = "Enter your items" onChange={this.storeItemsName} value = {this.state.itemName}/>
    <button onClick = {this.addItem}>Add Item</button>
    <ol>
      {this.state.todoItems.map((item,i) =>{
        return <> <li key ={i}>{item} <button onClick = {() => {this.deleteItem(i)}}>delete item</button></li>
        
        </>
      })}
    </ol>
    {JSON.stringify(this.state)}
    </>
  )
    }
  }

export default App
