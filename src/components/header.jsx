import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return(
    <header>
      <nav>
        <ul>
          <li><Link to="/">トップ</Link></li>
          <li><Link to="/about">アバウト</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header