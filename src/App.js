import { useState } from 'react';
import './App.css';
import Input from './components/input/input';
import Button from './components/button/button';
import Form from './components/Form/form';

function App() {
  const [text, setText] = useState('');

  return (
    <div className='custom-page'>
      <Form>
        <h1>Giriş Sayfası</h1>
        <Input
          value={text}
          placeholder={'Bir metin ifadesi giriniz...'}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

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
