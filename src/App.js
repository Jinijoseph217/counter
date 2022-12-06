import { useState } from 'react';
//usestate -hook
import './App.css';

function App() {
  const[counter,setcounter]=useState(0)
  //counter-state-to store values
  function incrementCounter(){
    setcounter(counter+1)
  }
  function decrementCounter(){
    setcounter(counter-1)
  }
  function resetCounter(){
    setcounter(0)
  }

  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }} 
    className="App">
      <header className="App-header">
        <h1>Counter Application</h1>
        <center>
        
        <h1>{counter}</h1>
        <button
        style={{
          backgroundColor: 'pink',
          color: 'black',
          border: '2px solid black',
          padding: '10px',
        }} 
        onClick={incrementCounter}>Increment</button>

        <button 
         style={{
          backgroundColor: 'lightblue',
          color: 'black',
          border: '2px solid black',
          padding: '10px',
        }} 
        onClick={decrementCounter}>Decrement</button>
        <button
         style={{
          backgroundColor: '',
          color: 'black',
          border: '2px solid black',
          padding: '10px',
        }}  onClick={resetCounter}>reset</button>
       </center>
      </header>
    </div>
  );
}

export default App;
