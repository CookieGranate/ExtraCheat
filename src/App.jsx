import { useState } from 'react'
import { render } from 'react-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let PageComponent
    switch (window.location.pathname) {
      case '/':
        PageComponent = <App />
        break
        case '/download':
          PageComponent = <Download />
          break
    }

  return (
    PageComponent
  )
}

export default App
