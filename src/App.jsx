import react from 'react'
import Header from './components/header/Header';
import StringPop from './components/header/stringPop';
import NumberState from './components/NumberState';
import StringState from './components/StringState';
import BooleanState from './components/BooleanState';
import InputState from './components/inputState';
import ArrayState from './components/ArrayState';
import UseState from './components/useState';

function App() {
  const firstName = "Anisa";
  const lastName = "Bekteshi"
  
  return (
    <>
      <Header/>
      <StringPop text={firstName}/>
      <StringPop lastName={lastName}/>
      <NumberState/>
      <StringState/>
      <BooleanState/>
      <InputState/>
      <ArrayState/>
      <UseState/>
    </>
  )
}

export default App
