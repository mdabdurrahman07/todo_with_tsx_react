import Addtask from "./components/AddTask/Addtask";
import AllTodos from "./components/AllTodos/AllTodos";

const App = () => {
  return (
    <div className="max-w-screen-lg mx-auto space-y-5 p-5">
      <h1 className="text-5xl  font-medium text-center my-3">React Todo App with typescript</h1>
   <div className="my-5">
   <Addtask></Addtask>
   </div>
   <AllTodos></AllTodos>
    </div>
  );
};

export default App;
