import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import KnownWordsSelection from './pages/KnownWordsSelection'
import VocabularyList from './pages/VocabularyList'
import Login from './components/Login'
import VocabularyDetail from './pages/VocabularyDetail'
import './css/app.css'
function App() {
  return (
    <>
      <Login />
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/filter-known-word' element={<KnownWordsSelection />}/>
          <Route path='/vocabulary-list' element={<VocabularyList />}/>
          <Route path='/vocabulary-detail/:id' element={<VocabularyDetail />}/>
        </Routes>
      </Router>
    </>
    
  )
}

export default App
