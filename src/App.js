import Body from './components/Body'
import Header from './components/Header';
import { useState } from 'react';


export default function App() {
  const [terminar, setTerminar] = useState("");
  console.log(terminar)
  return (
    <div className="App">
      <Header setTermino={setTerminar}/>
      <Body final={terminar}/>
    </div>
  );
} 

