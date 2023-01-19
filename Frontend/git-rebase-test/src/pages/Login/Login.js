import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  return (
    <div className='login'>
      <main className='loginContainer'>
        <h1 className='title'>Git Rebase Test</h1>
        <form className='loginForm'>
          <input
            className='userId'
            type='text'
            placeholder='이메일을 입력해 주세요.'
          />
          <input
            className='userPassword'
            type='password'
            placeholder='비밀번호를 입력해 주세요.'
          />
          <button className='loginButton' type='button'>
            로그인
          </button>
        </form>
      </main>
    </div>
  );
}
