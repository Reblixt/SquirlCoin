import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
  <nav>
    <ul>
      <li><NavLink to={"/"}>Squirl Coin</NavLink></li>
      <li><NavLink to={"/transact"}>Nut trading</NavLink></li>
      <li><NavLink to={"/blockchain"}>Blockchain</NavLink></li>
      <li><NavLink to={"/block"}>Block</NavLink></li>
    </ul>
  </nav>
  )
}
