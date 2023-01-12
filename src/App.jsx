import { useState } from 'react'
import { render } from 'react-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

import Download from './pages/Download'
import Main from './pages/Main'
import Community from './pages/Community'

function App() {
  const [count, setCount] = useState(0)

  let PageComponent
    switch (window.location.pathname) {
      case '/':
        PageComponent = <Main />
        break
        case '/download':
          PageComponent = <Download />
          break
          case '/community':
            PageComponent = <Community />
            break
    }

  return (
    <>
      <main>
        <Navbar />
        {PageComponent}
        <Footer />
      </main>
    </>
  )
}

export default App
