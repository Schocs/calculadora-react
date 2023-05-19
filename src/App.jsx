import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BotaoNumerico from './components/BotaoNumerico/BotaoNumerico'

function App() {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {numeros.map(num => (
          <BotaoNumerico numero={num} valor={num} />
        ))}
      </div>
      <p className="read-the-docs">
        learn nothing
      </p>
    </>
  )
}

export default App
