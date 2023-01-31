import { useState } from 'react';
import './App.css';
import Input from './components/input/input';
import Button from './components/button/button';

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

      <Button
        text='Giriş Yap'
        onClick={() => {
          alert('Tıklandı');
        }}
      />
    </div>
  );
}

export default App;
