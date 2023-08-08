import React from 'react'
import navbar from "./navbar.scss"
import logo from "../assets/logo.png"
import name from "../assets/logo_name.png"
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

const Navbar = () => {
  return (
    <div className='container'>
      <div className='logo'>
        <img src={logo} alt=''/>
        <img src={name} alt='' />
      </div>
      <div className='icons'>
        <SearchTwoToneIcon />
        <FavoriteBorderTwoToneIcon />
        <PermIdentityOutlinedIcon />
      </div>
    </div>
  )
}

export default Navbar
