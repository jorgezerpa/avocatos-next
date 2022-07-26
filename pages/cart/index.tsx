import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import classes from './cart.module.css'
import ProductCard from '@components/ProductCard/ProductCard'

const AboutPage = (props: any) => {
  const [products, setProducts] = useState<TProduct[]>([])

  useEffect(() => {
    setProducts(props.cart)
  }, [props.cart])

  return (
    <div>
      <div className={classes.container}>
        {products.length > 0 && (
          <>
            {products.map((product) => (
              <ProductCard
                key={product.name + 'store'}
                cart={props.cart}
                setCart={props.setCart}
                product={product}
              />
            ))}
          </>
        )}
        {products.length <= 0 && (
          <div className={classes.empty}>
            <h2>Nothing in Cart!</h2>
            <p>Avocatos are waiting for you!</p>
          </div>
        )}
      </div>
      {props.cart.length > 0 && (
        <div className={classes.buyButtonContainer}>
          <button className={classes.buyButton}>Buy!</button>
        </div>
      )}
    </div>
  )
}

export default AboutPage
