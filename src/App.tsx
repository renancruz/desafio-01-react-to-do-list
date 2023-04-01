
import { useState } from 'react'
import './global.css'

import Header from './components/Header';
import List from './components/List';


function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Header/>
      <List/>
    </div>
  )
}

export default App
