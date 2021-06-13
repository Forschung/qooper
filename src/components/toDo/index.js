// React Components
import { useState, useEffect } from "react";

// Firebase
import { db } from "../../config/initFirebase";
import firebase from "firebase";

// Material UI Components
import { Box } from "@material-ui/core";
import InputIcon from '@material-ui/icons/Input';

// Components
import TodoListItem from "./todo";
import Input from 'components/input';
import Button from 'components/button';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []); // blank to run only on first launch

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  function addTodo(e) {
    e.preventDefault();

    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput("");
  }

  return (
    <Box className="Todo">
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <form>
          <Input
            adornment={
              <Button
				        type={'submit'}
                onClick={addTodo}
              >
                <InputIcon />
              </Button>
            }
            iconPosition="right"
            placeholder="My ToDo Task is: "
            variant="outlined"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />      
          
        </form>
        <Box>
          {todos.map((todo) => (
            <TodoListItem
              todo={todo.todo}
              inprogress={todo.inprogress}
              id={todo.id}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Todo;
