import { useState } from 'react'

import './App.css'
import CarDetails from './components/CarDetails'

function App() {
  const cars = [
    {id: 1001, marca: "Toyota", km: 8.7, cor: "Branco", ano: "2015"},
    {id: 1002, marca: "Chevrolet", km: 15.2, cor: "Vermelho", ano: "2018"},
    {id: 1003, marca: "Honda", km: 25.6, cor: "Prata", ano: "2025"}
  ]
  return (
    <>
      <h1>Carros</h1>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 10
      }}>
        {cars.map(car =>{
          return(
            <CarDetails key={car.id} marca={car.marca} km={car.km} cor={car.cor} ano={car.ano}/>
          )
        })}
      </div>
      
    </>
  )
}

export default App
