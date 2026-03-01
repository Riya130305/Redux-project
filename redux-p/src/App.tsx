import { searchVidos } from './api/pexels'
import { searchImages } from './api/unsplash'
import './App.css'

function App() {


  return (
    <div className='bg-blue-400 h-screen w-screen flex items-center justify-center'>
      <button 
      onClick={()=>{
        searchVidos("nature", 1, 20)
        .then((Response)=>{
          console.log(Response.videos);
        })
      }}
      className="bg-white text-blue-500 px-4 py-2 rounded-md cursor pointer"
      >Video Button</button>

      <button
       onClick={()=>{
        searchImages("dog",1,20)
        .then((response)=>{
          console.log(response.results);
        })
       }}
       className="bg-white text-blue-500 px-4 py-2 rounded-md cursor pointer ml-4"
      >
        Photos

      </button>
    </div>
  )
}

export default App
