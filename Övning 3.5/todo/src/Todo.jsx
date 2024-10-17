import { useState } from 'react';
import './Todo.css';
import EditTodo from './components/EditTodo';
import ListTodoTable from './components/ListTodoTable';

const statuses = [ 'Att göra', 'Gjord' ];

function Todo() {

  // typen todo: 
  // { id, title, description, createDate, status, sortNumber }  
  const [ todos, setTodos ] = useState([]);
  // { id:'', title:'', description:'', createDate:'', status:'', sortNumber:'' }
  const [ editTodo, setEditTodo ] = useState({});

  /*
    Callbacks 
    Används av barn-komponenter
  */

  /*
    saveTodo - ansvarar för att skapa / uppdatera en todo
               i stat:en.§
  */
  const saveTodo = (t) => {
    // t är ett objekt av typen todo  
    if(!t.id) {
      // Om id är tomt är det en ny Todo 
      // (då lägger vi till den) och 
      // sätter default värden 
      t.id = crypto.randomUUID();
      t.createDate = new Date();
      t.status = statuses[0];
      createTodo(t);
    } else {
      // Om id inte är tomt då finns  Todo:n
      // redan och vi vill lägga till den. 
      updateTodo(t);
      setEditTodo({});
    }
  };

  /*
    setUpdate - ansvarar för att populera redigering
                formuläret med en todo för att uppdateras
  */
  const setUpdate = (todo) => {
    setEditTodo(todo);
  }


  /*
    Hjälpmetoder
  */

  // Denna metoden ansvarar för att lägga till en 
  // ny todo till vår lista
  const createTodo = (t) => {
    // Uppdaterar staten
    setTodos((todos) => {
      // Vi lägger den nya todon sist i listan
      t.sortNumber = todos.reduce((a, v) => { 
        return Math.max(a, v.sortNumber) + 1; 
      }, 1);
     return [ ...todos, t];
    });    
  }

  // Denna metoden är ansvarig för att uppdatera en 
  // befintlig todo
  const updateTodo = (t) => {
    // Uppdatera staten
    setTodos((todos) => {
      return todos.map((e) => {
        return e.id === t.id ? t : e;
      }); 
    });
  }

  return (
    <>
      <EditTodo onSave={ saveTodo } editTodo={ editTodo } />
      <ListTodoTable todos={ todos } onEdit={ setUpdate } />
    </>
  );
}

export default Todo;
