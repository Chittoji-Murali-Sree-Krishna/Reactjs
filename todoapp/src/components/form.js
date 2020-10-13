import React from 'react';


function Form({setInputText, inputText, todos, setTodos}){
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    } ;
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text:inputText, completed: false, id:Math.random()*1000}
        ])
        setInputText("");
    };
    return (
       <form>
           <input value={inputText} onChange={inputTextHandler} type="text" className='todo-input'/>
           <button onClick={submitTodoHandler} className='todo-button' type='submit'>
            Add[+]
        </button>
       </form>
);
}
export default Form