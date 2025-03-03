import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Profile from './components/Profile'
import Counter from './components/Counter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Profile name = "Isaac Limlim" age = "23" country = "Germany" email = "isaacerukudi@gmail.com"  />
    <Counter />
  </StrictMode>
)
