import "./App.scss";
import { CreateButton } from "./components/CreateButton/CreateButton";
import { Note } from "./components/Note/Note";

function App() {
  return (
    <div>
      <Note></Note>
      <CreateButton></CreateButton>
    </div>
  );
}

export default App;
