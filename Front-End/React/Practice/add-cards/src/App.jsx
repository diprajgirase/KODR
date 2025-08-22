import React, { useState } from 'react'
import Form from './components/form'
import Card from './components/card'
import Dummy from './components/Dummy'

const App = () => {
let [productData, setproductData] = useState([]);
  
  return (
    <div>
      <h1>Add Products</h1>
      <Form productData= {productData} setproductData ={setproductData}/>
      <Card productData= {productData}/>
    </div>
  )
}

export default App