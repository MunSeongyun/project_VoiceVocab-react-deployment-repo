import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import WordSelect from './pages/WordSelect'
import VocabularyList from './pages/VocabularyList'
import Login from './components/Login'

function App() {
  return (
    <>
      <Login />
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/select' element={<WordSelect />}/>
          <Route path='/vocabulary-list' element={<VocabularyList />}/>
        </Routes>
      </Router>
    </>
    
  )
}

export default App
