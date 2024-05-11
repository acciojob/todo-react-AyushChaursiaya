
import React from "react";
import './../styles/App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [lestTask, setLestTask] = useState([]);


  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleInputAdd = () => {
    setLestTask([...lestTask, input]);
    setInput('');
  }

  const handleInputDelete = (index) => {
      const updatedTasks = [...lestTask];
      updatedTasks.splice(index, 1);
      setLestTask(updatedTasks);
  }


  return (
    <div>
      <input type="text" value={input} onChange={handleInput} />
      <button onClick={handleInputAdd}>Abb Todo</button>
      <ul>{lestTask.map((text, index) => {
        <li key={index}>
          {text}
          <button onClick={() => handleInputDelete(index)}>Delete</button>
          </li>
      })}</ul>
    </div>
  )
}

export default App
