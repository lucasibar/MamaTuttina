import React from 'react';
import Link from 'react-router-dom'



function Home() {

  return (
    <>
      <button>{data.dia}</button>
      <Link>{data.almuerzo}</Link>
      <Link>{data.cena}</Link>
      <Link>{data.extra}</Link>
      
    </>
  )
}

export default Home;