import { useState } from 'react';
import './App.css';
import Input from './components/input/input';

function App() {
  const [text, setText] = useState('Toprak');

  return (
    <div>
      {text}
      <Input
        value={text}
        placeholder={'Bir metin ifadesi giriniz...'}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
