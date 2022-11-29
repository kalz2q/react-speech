import React from 'react';
import './App.css';

function App() {
  const text = document.getElementById("text").value;

  const readaloud = () => {
    const uttr = new SpeechSynthesisUtterance();
    uttr.text = text;
    // 発言を再生
    window.speechSynthesis.speak(uttr);
  }
  return (
    <div className="App">
      <input type="text" id="text" name="text" value="吾輩は猫である。" placeholder="読み上げたいテキストを入力してください" />
      {/* <button onclick="readAloud()">読み上げる</button> */}
      <p>上記テキストを読み上げます。「読み上げる」ボタンをクリックしてください。</p>
    </div >
  );
}

export default App;
