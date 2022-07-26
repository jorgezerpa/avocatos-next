import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import classes from './[id].module.css'
import Link from 'next/link'

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState<any>()

  useEffect(() => {
    if (query.id) {
      fetch(`/api/avo/${query.id}`)
        .then((data) => {
          return data.json()
        })
        .then((product) => {
          setProduct(product)
        })
        .catch((e) => console.log('error: ', e))
    }
  }, [])

  return (
    <section className={classes.container}>
      {product && (
        <>
          <div
            style={{
              paddingLeft: '1rem',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            <Link href="/">
              <img
                src="/images/arrow.png"
                alt=""
                style={{ width: '30px', textAlign: 'left', marginTop: '1rem' }}
              />
            </Link>
          </div>
          <h3 className={classes.title}>
            {product.name} <span>{product.price}</span>{' '}
          </h3>

          <div className={classes.media}>
            <img src={product.image} alt="" />
          </div>

          <div className={classes.content}>
            <div>
              <p className={classes.description}>
                {product.attributes.description}
              </p>
            </div>

            <div className={classes.spacer}></div>

            <div>
              <p className={classes.infoItem}>
                <span>Hardinness: </span>
                {product.attributes.hardiness}
              </p>
              <p className={classes.infoItem}>
                <span>Shape: </span>
                {product.attributes.shape}
              </p>
              <p className={classes.infoItem}>
                <span>taste: </span>
                {product.attributes.taste}
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default ProductPage
