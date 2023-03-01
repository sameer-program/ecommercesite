import React from 'react'
import Arrival from '../Components/Arrival'
import Banner from '../Components/Banner'
import Categories from '../Components/Categories'
import Deal from '../Components/Deal'
import Product from '../Components/Product'


export default function Home() {

  sessionStorage.clear()
  return (
    <>
      <Banner />
      <Categories />
      <Deal />
      <Arrival />
      <Product />
    </>
  )
}
