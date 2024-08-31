import { useState } from 'react'
import ProductCardList from './ProductCardList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductCardList />
    </>
  )
}

export default App
