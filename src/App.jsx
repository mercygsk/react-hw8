import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AverageRating from './components/AverageRating'
import Reviews from './components/Reviews'
import SentimentAnalysis from './components/SentimentAnalysis'
import Sidebar from './components/Sidebar'
import WebsiteVisitors from './components/WebsiteVisitors'
import "./styles.css";

function App() {
  const [count, setCount] = useState(0)

  return (
 <div className="layout">
  
 
  <Reviews />
  <AverageRating />
  <SentimentAnalysis />
  <Sidebar />
  <WebsiteVisitors />

 </div>
  )
}

export default App
