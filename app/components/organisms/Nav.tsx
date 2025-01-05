'use client'

import { Link } from 'react-router'
import styles from './Nav.module.scss'

export function Navbar() {
  return (
    <>
      <nav className={styles.navBar}>
        <ul>
          <li>
            <Link to="/" className={styles.navItems}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/news" className={styles.navItems}>
              News
            </Link>
          </li>
          <li>
            <Link to="/movies" className={styles.navItems}>
              Movies
            </Link>
          </li>
          <li>
            <Link to="/todo" className={styles.navItems}>
              Todo
            </Link>
          </li>
          <li>
            <Link
              to="https://vercel.com/templates/next.js/portfolio-starter-kit"
              className={styles.navItems}
              target="_blank"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
