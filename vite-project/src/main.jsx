import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
//the entry point for a React application. It sets up the rendering of the root component (App) into the HTML document. 
//main file which does the rendering of app.js components
/*ReactDOM.createRoot(document.getElementById("root")): This creates a root DOM node where the React application will be mounted. 
The document.getElementById("root") selects the HTML element with the id root.
.render(<App />): This renders the App component into the root DOM node. 
The App component is wrapped in JSX syntax (<App />), which ReactDOM converts into HTML and inserts into the selected DOM node.*/
