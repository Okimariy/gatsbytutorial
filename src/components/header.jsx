import React from "react"
import { useStaticQuery, Link } from "gatsby"

// ページコンポーネント以外のコンポーネントでは
// useStaticQueryを利用してGrasphQLでデータを取得する

const Header = () => {
  const data = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
    `
  )
  return(
    <header>
      <h2>{data.site.siteMetadata.title}</h2>
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