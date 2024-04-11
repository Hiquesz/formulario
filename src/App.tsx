import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonFatec from './components/ButtonFatec'
import InputBox from './components/InputBox'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p>Olá Mundo</p>
    <ButtonFatec type='button' label='Botão 1' />
    <ButtonFatec type='button' label='Botão 2' />
    <p>Teste</p>
    <InputBox type='submit' placeholderText="Digite aqui" />
    <Form type='submit'/>

    </>
    )
}

export default App
