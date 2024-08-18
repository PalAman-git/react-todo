import { useEffect } from "react";
import { useState } from "react";
import TodoItem from "./components/todo-item";
import TodoDetails from "./components/todo-details";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const fetchDetailsOfCurrentTodo = async (id) => {
    const todoDetail = await fetch("https://dummyjson.com/todos/" + id);
    const details = await todoDetail.json();

    if (details) {
      console.log(details)
      setTodoDetails(details.todo);
      setOpenDialog(true);
    }else{
      setTodoDetails(null);
      setOpenDialog(false);
    }
  };

  const fetchTodos = async () => {
    console.log("fetching todos...");
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();
      if (data.todos && data.todos.length > 0) {
        setTodoList(data.todos);
        setLoading(false);
      } else {
        setTodoList([]);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("useEffect");
    fetchTodos();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="p-10">
      <h1 className="mb-10 flex justify-center">Simple Todo App</h1>
      <ul className="grid gap-4 grid-cols-4">
        {todoList && todoList.length > 0
          ? todoList.map((todoItem) => {
              return (
                <TodoItem
                  key={todoItem.id}
                  fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}
                  todo={todoItem.todo}
                  id={todoItem.id}
                />
              );
            })
          : null}
      </ul>
      <TodoDetails todoDetails={todoDetails} openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </div>
  );
}

export default App;
