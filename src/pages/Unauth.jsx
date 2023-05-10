import { Typography } from '@mui/material'
import React from 'react'

const Unauth = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <Typography className='text-gray-500 '>
            You are not authorised to access the page
        </Typography>
    </div>
  )
}

export default Unauth