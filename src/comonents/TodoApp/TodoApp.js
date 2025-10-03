import React, { Component } from 'react'
import "./TodoApp.css";
export default class TodoApp extends Component {
  state = {
    input: "",
    items:[]
  };
handleChange= event=>{
  this.setState({
    input: event.target.value
  });
  

};
storeItems = event => {
  event.preventDefault(); 
const{input}=this.state;


this.setState({
  items:[...this.state.items, input],
  input:""

})
};
deleteItem=index=>{
console.log(index);
this.setState({
  items: this.state.items.filter((data,key)=>key!==index)
})
};

  render() {
    const {input,items,allItems}= this.state;
    console.log(items);
      return (
      <div className='todo-container'>
      
      <form className='input-section' onSubmit={this.storeItems}>
                <h1>TodoApp</h1>

        <input type='text' value={input} onChange={this.handleChange} placeholder='Enter the Items'></input> 
        <button>Add</button>
        </form>
        <ul>
         {
          items.map((value,index)=> (<li key={index}>{value} <i className="fa-solid fa-trash-can" onClick={()=>this.deleteItem(index)}></i></li>))
         }

          {/* <li>one <i className="fa-solid fa-trash-can"></i></li> */}
        </ul>
      </div>          
    )
  }
}
