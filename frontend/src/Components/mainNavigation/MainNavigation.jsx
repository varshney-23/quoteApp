import React from 'react'
import {Link} from 'react-router-dom'
import styles from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <nav className={styles.nav}>
      <h2>Quote App</h2>
      <ul>
        <li><Link to = '/allQuotes'> All Quotes </Link> </li>
        <li><Link to = '/new'> New Quotes </Link> </li>
        <li><Link to = '/register'> Register</Link> </li>
      </ul>
    </nav>
  )
}

export default MainNavigation


