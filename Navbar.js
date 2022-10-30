import React from 'react'
import { Link } from 'react-router-dom';
import { routes } from '../routes/routes'
import styles from '../css/Navbar.module.css'

/*
export const routes = [
    {'link': '', 'title': 'Accueil', 'component': <Home />},
    {'link': 'about', 'title': 'A propos', 'component': <About />},
    {'link': 'portfolio', 'title': 'Portfolio', 'component': <Portfolio />},
    {'link': 'fees', 'title': 'Tarifs', 'component': <Fees />},
    {'link': 'contact', 'title': 'Contact', 'component': <Contact />},
];
*/

export const Navbar = () => {
  return (
    <ul className={styles.navbar}>
        {
          routes.map(route => {
            return <Link key={route.title} 
                         to={`/${route.link}`}
                         className={styles.navElement}
                    >{route.title}</Link>
          })
        }
    </ul>
  )
}
