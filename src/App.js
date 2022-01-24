import "./App.css";
import PetsList from "./Components/PetsList";
import PetsStore from "./petStore";

function App() {
  return (
    <div className="App">
      <PetsList PetsStore={pets} />
    </div>
  );
}

export default App;
