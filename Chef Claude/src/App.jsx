// import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
    <header className="App-navbar">
      <div className="App-header-content">
        <img src="/Chef Claude Icon.png" className="App-logo" alt="logo" />
        <h1 className="App-title">Chef Claude</h1>
      </div>
    </header>


    <body className="App-body">
      <div className="App-content">
        <form className="App-form">
          {/* <label htmlFor="recipe-input">Enter an ingredient:</label> */}
          <input 
          Text="Placeholder"
          // Icon=False
          // Leading add-on=False
          // Trailing add-on=False
          // Trailing button=False
          // Dropdown=False
          // Error=False
          Breakpoint="Desktop"
          State="Default"
          type="text" className="App-recipe-input" name="recipe-input" placeholder="e.g., Spaghetti Carbonara" />
          <button 
          Type="Primary"
          Size="base"
          // Icon=False
          State="Default"
          type="submit" className="App-button">
            + Add Ingredient
          </button>
        </form>

        
      </div> 
    </body>
    </>
  )
}

export default App
