import React, {useState} from 'react';
import './App.css';


 function App() {
   const [total, setTotal] = useState("0");
   const handleClick = (e) => {
    setTotal(total.concat(e.target.name));
  }
  const backspace = () => {
  setTotal(total.slice(0,total.length -1));
  }
  const clear =() => {
    setTotal("");
  }
  const calculate = () => {
    try{
      setTotal(eval(total).toString());
    }catch{
setTotal("Error")
    }
   
  }

  return (
 
    <>
  
    <div>
    </div>
    <div className='num'>
   <div className='num1'><form>
    <input placeholder='0'  className='text' type="text" value={total} /></form> </div>
    <div className='mpl'>

    <button name='cl'  onClick={clear} id="clear">Clear</button>
    <button name='bj'  onClick={backspace} id="backspace">C</button>
    <button name='/' onClick={handleClick} className='war3'>/</button>
    </div>
    <div className='mul'>
      <button name='1' onClick={handleClick} className='nil'>1</button>
      <button name='2' onClick={handleClick} className='nil1'>2</button>
      <button name='3' onClick={handleClick} className='nil2'>3</button>
      <button name='+' onClick={handleClick}  className='nil3'>+</button>
    </div>
    <div className='lop'>
    <button name='4' onClick={handleClick} className='nol'>4</button>
    <button name='5' onClick={handleClick} className='nol1'>5</button>
    <button name='6' onClick={handleClick} className='nol2'>6</button>
    <button name='-' onClick={handleClick} className='nol3'>-</button>
    </div>
    <div className='nkl'>
    <button name='7' onClick={handleClick} className='wer'>7</button>
    <button name='8' onClick={handleClick} className='wer1'>8</button>
    <button name='9' onClick={handleClick} className='wer2'>9</button>
    <button name='*' onClick={handleClick} className='wer3'>*</button>
    </div>
    <div className='jik'>

    <button name='0' onClick={handleClick} className='war1'>0</button>
    <button onClick={calculate} className="result">=</button>

    </div>
    </div>

    </>
  );
}

export default App;
