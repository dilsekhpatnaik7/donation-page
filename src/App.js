import React from "react";
import './index.css'

function App() {
  return (
    <div>
      <div className="bg-cover w-screen h-screen bg-[url('./hunger.jpg')]" >
        <div className="w-full h-18 bg-black opacity-90 p-5 text-2xl ">
          <div className="flex justify-between py-1">
            <div className="flex flex-row cursor-pointer">
              <h4 className="text-yellow-500">Food</h4>
              <h4 className="px-2 text-white">For  Everyone</h4>
            </div>
            <div className="text-white px-1 cursor-pointer">
              <h4>Help Us Feed The Unprivileged</h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-items-center mt-52">
          <div>
            <div className="text-center text-white text-4xl flex flex-col font-serif">
                <h1>“If you can't feed a hundred people,</h1>
                <h1>then feed just one.”</h1>
                <h1>- Mother Teresa</h1>
            </div>
          </div>
          <div className="text-center m-5">
            <div className="text-2xl text-white bg-black opacity-90 inline-block rounded-lg px-7 py-5 cursor-pointer hover:text-yellow-500 hover:ease-in duration-150">
              <button onClick={() => {
                window.open(window.open('https://rzp.io/l/YjbVSxX220'))
              }}>Donate</button>
            </div>
          </div>
          <div className="w-screen text-black text-xl font-bold text-center absolute bottom-0">
            <h2 className="cursor-pointer" onClick={() => {
              window.open('https://dilsekh.vercel.app')
            }}>&copy; Dilsekh</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;