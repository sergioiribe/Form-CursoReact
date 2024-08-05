import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Rating } from './components/Rating'
import { ClickRating } from './components/ClickRating'
import { Product } from './components/Product'
import { Products } from './components/Products'
import { JumbotronComponent } from './components/JumbotronComponent'
import { UserForm } from './components/UserForm'

function App() {

  return (
    <div className="w-[100vw] min-h-screen
     flex flex-col bg-gray-200">
      {/* <Products /> */}
      {/* <JumbotronComponent>
        <p>This is a long sentence, and I want to insert content into the jumbtron component from the outside</p>
      </JumbotronComponent> */}
      <UserForm/>
    </div>
  )
}

export default App
