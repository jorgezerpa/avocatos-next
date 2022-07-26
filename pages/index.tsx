import React, { useEffect, useState } from 'react'
import classes from './index.module.css'
import Link, { LinkProps } from 'next/link'
import ProductCard from '../components/ProductCard/ProductCard'

const HomePage = (props: any) => {
  const [products, setProducts] = useState<TProduct[]>([])

  useEffect(() => {
    fetch('/api/avo')
      .then((data) => data.json())
      .then((products) => {
        setProducts(products.data)
      })
      .catch((e) => console.log(e))
  }, [])

  return (
    <div className={classes.container}>
      {products.map((product) => (
        <ProductCard
          key={product.name + 'store'}
          cart={props.cart}
          setCart={props.setCart}
          product={product}
        />
      ))}
    </div>
  )
}

export default HomePage
