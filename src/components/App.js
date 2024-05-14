import React, { useState } from "react";
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
    <div className="container">
      <h1>To Do List</h1>
      <div className="testInput">
        <input type="text" value={input} input={input} onChange={handleInput} />
        <button onClick={handleInputAdd}>Abb Todo</button>
      </div>
      <ul className="cards">
        {lestTask.map((text, index) => {
          <li key={index}>
            {text}
            <button onClick={() => handleInputDelete(index)} className="delete">Delete</button>
          </li>
        })}
      </ul>
    </div>
  )
}

export default App

// import React, { useState } from "react";
// import './../styles/App.css';

// const App = () => {
//   const [input, setInput] = useState('');
//   const [lestTask, setLestTask] = useState([]);

//   const handleInput = (e) => {
//     setInput(e.target.value);
//   }

//   const handleInputAdd = () => {
//     setLestTask([...lestTask, input]);
//     setInput('');
//   }

//   const handleInputDelete = (index) => {
//     const updatedTasks = [...lestTask];
//     updatedTasks.splice(index, 1);
//     setLestTask(updatedTasks);
//   }

//   return (
//     <div className="container">
//       <h1>To Do List</h1>
//       <div className="testInput">
//         <input type="text" value={input} onChange={handleInput} />
//         <button onClick={handleInputAdd}>Add Todo</button>
//       </div>
//       <ul className="cards">
//         {lestTask.map((text, index) => (
//           <li key={index}>
//             {text}
//             <button onClick={() => handleInputDelete(index)} className="delete">Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App;