import { useState } from 'react';
import './App.css';
import Input from './components/input/input';
import Button from './components/button/button';
import Form from './components/Form/form';

function App() {
  const [text, setText] = useState('Toprak');

  return (
    <div>
      <Form>
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
      </Form>
    </div>
  );
}

export default App;
