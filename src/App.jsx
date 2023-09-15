
import { useEffect, useState } from 'react'
import './App.css'


function App() {

  const [data,setdata] = useState([]);  

  useEffect(()=>{
    fetch('../public/api.json')
    .then(res=> res.json())
    .then(data => setdata(data))
  },[])
  

  return (
    <div className=''>
    <button className="btn btn-primary">Success</button>
      <h1 className='text-center font-extrabold'>Vite + React</h1>
      <p className='text-end'> hi this is my </p>
      <img src="https://i.ibb.co/VgksJ6s/Capture.png"/>
      <p>hi man</p>
      
      
      <div className='flex justify-center items-center' >
      
      {
         
        data.map(datas => <div key={datas.id} className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
        <figure><img src="" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            <button className='btn'>just click </button>
          </div>
        </div>
      </div>)
      }
      </div>
      <button className='btn'>just click </button>
      
      
    </div>
  )
}








export default App
