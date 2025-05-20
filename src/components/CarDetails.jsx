import React from 'react'

const CarDetails = ({marca, km, cor, ano}) => {
  return (
    <div style={{
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: '#292929',
      borderRadius: 10,
      
    }}>
      <p>Marca: {marca}</p> 
      <p>Km: {km}</p> 
      <p>Cor: {cor}</p> 
      <p>Ano: {ano}</p> 

      {ano<=2023? <p>Carro antigo</p>: <p>Carro novo</p>}
    </div>
  )
}

export default CarDetails