import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TodoProviders } from './components/TodoProvider/Todo.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <TodoProviders>
   <App />
   </TodoProviders>
  </React.StrictMode>,
)
