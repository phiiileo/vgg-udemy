import React from 'react';
import './header.scss'

export default function Header(props) {
    return (
      <header>
          <h3>{props.data}</h3>
         <button>
             Logout
         </button>
      </header>
    )
}
