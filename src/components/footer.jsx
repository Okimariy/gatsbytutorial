import React from "react"

const Footer = () => {
  return(
    <footer>
      <p>© Gatsby Blog Site{(new Date().getFullYear())}</p>
    </footer>
  )
}

export default Footer