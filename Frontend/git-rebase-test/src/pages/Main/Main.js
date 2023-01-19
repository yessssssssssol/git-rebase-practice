import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

export default function Main() {
  return (
    <main className="main">
      <h1>Main</h1>
      <img className="image" src="images/code.avif" alt="메인 이미지" />
      <Link to="/">
        <button className="button">이전으로</button>
      </Link>
    </main>
  );
}