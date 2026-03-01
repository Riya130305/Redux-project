import { searchVidos } from './api/pexels'
import './App.css'

function App() {


  return (
    <div className='bg-blue-400 h-screen w-screen flex items-center justify-center'>
      <button onClick={()=>{
        searchVidos("nature", 1, 20)
        .then((Response)=>{
          console.log(Response);
        })
      }}>Button</button>
    </div>
  )
}

export default App
