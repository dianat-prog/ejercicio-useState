import './App.css'
import {useState} from 'react'

function App() {
    const [name, setName] = useState("Sofía");
    const [newName, setNewName] = useState("");
  
    const changeName = (event) => {
      event.preventDefault();
      if (newName.trim() !== "") {
        setName(newName);
        setNewName("");
      }
    };
  
    return (
      <div>
        <h2>Nombre de profesor: {name}</h2>
        <form onSubmit={changeName}>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Add a name"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
  /*
  function App1() {
   //Aquí tu código
   const [name, setName] = useState("Sofía");
   //npm run dev const [newName, setNewName] = useState("");
  
    return (
      <div>
        <h2>Teacher Name: {name}</h2>
        <ul>
          <li onClick={() => setName("Data")}>Data</li>
          <li onClick={() => setName("Reyes")}>Reyes</li>
          <li onClick={() => setName("Yolanda")}>Yolanda</li>
        </ul>
      </div>
    );
  }*/
  
export default App
