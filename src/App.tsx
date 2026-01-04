import './App.css'
import Greeting from './components/Greeting'
import Header from './components/Header'
import Letter from './components/Letter'
import Main from './components/Main'

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Letter/>
      <Greeting/>
    </div>
  )
}

export default App
