import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-blue-500 font-firstFont text-9xl mb-6  '>MEET THE TEAM</h1>
      <div className='flex justify-center'>
        <Card 
        name="Emily" 
        image = "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600"
        description = "Dances in the rain, speaks fluent sarcasm, coffee's best friend"
        />
        <Card 
        name="Jack" 
        image = "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600"
        description="Professional daydreamer, pizza connoisseur, expert in witty comebacks"
        />
        <Card 
        name="Ethan" 
        image = "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600"
        description="Part-time superhero, full-time adventure seeker, master of random trivia"
        />
      </div>
    </>
  )
}

export default App
