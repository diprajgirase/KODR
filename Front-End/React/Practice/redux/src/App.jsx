import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue } from './features/counterSlice';

const App = () => {
  const [Inc, setInc] = useState(0)

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()

  return (
    <div className='p-5 flex flex-col gap-2 w-[20%]'>
      Use of redux
      <h2>Count = {count}</h2>
      <input className='border' type="text" placeholder='Write here' onChange={(e) => setInc(e.target.value)} /> <br />
      <button className='border p-3' onClick={() => dispatch(increment())}>Increment</button><br />
      <button className='border p-3' onClick={() => dispatch(decrement())}>Decrement</button><br />
      <button className='border p-3' onClick={() => dispatch(incrementByValue(Inc))}>Inc</button>

      <div></div>

    </div>
  )
}

export default App