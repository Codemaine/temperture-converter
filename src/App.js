import { Transition } from '@headlessui/react';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [ number, setNumber ] = useState("");
  const [isCel, setisCel] = useState(true);
  const [isOn, setisOn] = useState(false);
  const [result, setresult] = useState("");
  const handleChange = (event) => {
     setNumber(event.target.value)
  }
  const submit = (event) => {
    if(isCel){
      setresult(ctof(number))
    }else {
      setresult(ftoc(number))
    }
  }
  const ctof = (number) => {
    return (number - 32) * (5 / 9);
  }
  const ftoc = (number) => {
    return (number * (9 / 5)) + 32;
  }
  return (
    <div className="h-full flex align-center justify-center">
      <div className="shadow rounded-2xl p-32" style={{position: "fixed", top: "50%", left: "50%" ,transform: "translate(-50%, -50%)"}}>
        <div className="flex flex-row">
        <div>
          <p>Degrees ({isCel ? <span>Fahrenheit</span> : <span>Celcius</span>}):</p>
        <input type="number" className="border rounded focus:ring-4 focus:outline-none h-10 pl-2" onChange={(event) => handleChange(event)} value={number} />
        </div>
        <div className="top-0 pl-5">
          <p>Type:</p>
          {/* This example requires Tailwind CSS v2.0+ */}
<div className="relative inline-block text-left">
  <div>
    <button onClick={() => setisOn(!isOn)} type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
      {isCel ? <span>Celsius</span> : <span>Farenheit</span>}
      {/* Heroicon name: chevron-down */}
      <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  </div>
   <Transition
        show={isOn}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {(ref) => (
  <div ref={ref} className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <a href="/" onClick={() => {setisCel(true); setisOn(!isOn)}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Celsius</a>
      <a href="/" onClick={() => {setisCel(false); setisOn(!isOn)}}className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Farenheit</a>
    </div>
  </div>)}
  </Transition>
</div>

        </div>
        <div className="pt-3 pl-2">
  <div onClick={submit} className="bg-blue-500 p-4 text-white rounded cursor-pointer">
    <span>Convert</span>
  </div>
</div>
        </div>
        {Boolean(result) ? 
        <div className="flex flex-row">
          <div>
            <h1 className="text-2xl">Results</h1>
            <p>{result}{isCel ? <span>ºC</span> : <span>ºF</span>}</p>
          </div>
        </div> : <div></div>}
        </div>
    </div>
  );
}

export default App;
