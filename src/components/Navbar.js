import React from 'react'
import { Stack } from '@mui/material' 
import { Link } from 'react-router-dom'
import {logo} from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" p={2}
    borderBottom='1px solid #000'
     sx={{ position:'sticky',background:'#262626', top:0, justifyContent:'space-between'}}>
        <Link to="/" style={{display:'flex',alignItems:'center'}}>
            <img src={logo} alt="logo" height={45} />
        </Link>
        <SearchBar />
    </Stack>
  )
}

export default Navbar