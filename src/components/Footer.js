import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-primary-darker py-[24px] text-white text-sm text-center'>
 &copy; {currentYear} Adv Amjad Malik. All rights reserved.

    </footer>
  )
}

export default Footer