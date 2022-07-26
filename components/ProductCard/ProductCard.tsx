import React, { useEffect, useState } from 'react'
import classes from './ProductCard.module.css'
import Link from 'next/link'

const ProductCard = (props: any) => {
  const [isOnCart, setIsOnCart] = useState(false)

  useEffect(() => {
    const isAdded = props.cart.filter(
      (product: { id: string }) => product.id === props.product.id
    )
    if (isAdded.length > 0) setIsOnCart(true)
  }, [])

  const addToCart = () => {
    setIsOnCart(true)
    props.setCart((prev: any) => [...prev, props.product])
  }

  const removeFromCart = (id: string) => {
    setIsOnCart(false)
    const newCart = props.cart.filter(
      (product: { id: string }) => product.id !== id
    )
    props.setCart([...newCart])
  }

  return (
    <div className={classes.card}>
      <div className={classes.cardMedia}>
        <img src={props.product.image} alt="" />
      </div>
      <div className={classes.cardContent}>
        <Link href={`/product/${props.product.id}`}>
          <h3 className={classes.cardTitle}>{props.product.name}</h3>
        </Link>
        <p className={classes.cardPrice}>{props.product.price}$</p>
        <p className={classes.cardDescription}>
          {props.product.attributes.description}
        </p>
      </div>
      <div className={classes.cardActions}>
        {!isOnCart && (
          <button
            className={classes.cardButton}
            onClick={() => {
              addToCart()
            }}
          >
            Add to Cart
          </button>
        )}
        {isOnCart && (
          <button
            className={classes.cardButton}
            onClick={() => {
              removeFromCart(props.product.id)
            }}
          >
            remove from Cart
          </button>
        )}
      </div>
    </div>
  )
}

export default ProductCard
