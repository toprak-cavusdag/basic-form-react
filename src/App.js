import { useState } from 'react';
import './App.css';
import Input from './components/input/input';
import Button from './components/button/button';
import Form from './components/Form/form';

function App() {
  const [text, setText] = useState('');
  const [userForm, setUserForm] = useState({
    userName: '',
    password: '',
  });

  const onValidation = () => {
    if (userForm.userName === '' || userForm.password === '') {
      alert('Invalid information or left blank');
    } else {
      alert('Shipment was successful');
    }
  };

  return (
    <div className='custom-page'>
      <Form>
        <h1>Login Page</h1>
        <Input
          value={userForm.userName}
          placeholder={'Please Enter Your Name..'}
          onChange={(e) => {
            setUserForm({
              userName: e.target.value,
              password: userForm.password,
            });
          }}
        />

        <Input
          type='password'
          value={userForm.password}
          placeholder={'Enter Your Password...'}
          onChange={(e) => {
            setUserForm({
              password: e.target.value,
              userName: userForm.userName,
            });
          }}
        />

        <Button text='Login' onClick={onValidation} />
      </Form>
    </div>
  );
}

export default App;
