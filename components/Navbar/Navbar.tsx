import React from 'react'
import Link from 'next/link'
import classes from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={classes.container}>
      <menu className={classes.menu}>
        <Link href="/">
          <a className={classes.navItem}>Home</a>
        </Link>
        <Link href="/cart">
          <a className={classes.navItem}>Cart</a>
        </Link>
      </menu>
    </nav>
  )
}
