import React from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
  return (
    <header>
        <nav>
            <img src="/logo.svg" alt="Logo" />

            <ul>
                {navLinks.map((item) => (
                    <li key={item.id}>
                        <a href={`/${item.path}`}>{item.title}</a>
                    </li>
                ))}
            </ul>
            
            <div className='flex-center gap-3'>
                <button>
                    <img src='/search.svg' alt='Search'></img>
                </button>
                <button>
                    <img src='/cart.svg' alt='Cart'></img>
                </button>
            </div>
        </nav>
    </header>
  )
}

export default NavBar