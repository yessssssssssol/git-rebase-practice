import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [userInfo, setUserInfo] = useState({ id: '', password: '' });
  const navigate = useNavigate();

  const getUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const isValid = userInfo.id.includes('@') && userInfo.password.length >= 5;

  const goToMain = (e) => {
    e.preventDefault();
    navigate('/main');
  };

  return (
    <div className='login'>
      <main className='loginContainer'>
        <h1 className='title'>Git Rebase Test</h1>
        <form className='loginForm' onSubmit={goToMain}>
          <input
            className='userId'
            name='id'
            type='text'
            value={userInfo.id}
            placeholder='이메일을 입력해 주세요.'
            onChange={getUserInfo}
          />
          <input
            className='userPassword'
            name='password'
            type='password'
            value={userInfo.password}
            placeholder='비밀번호를 입력해 주세요.'
            onChange={getUserInfo}
          />
          <button className='loginButton' type='button' disabled={!isValid}>
            로그인
          </button>
        </form>
      </main>
    </div>
  );
}
