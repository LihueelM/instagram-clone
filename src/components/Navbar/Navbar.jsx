import React from 'react'
import {Link} from 'react-router-dom'

import {HiOutlineSearch} from 'react-icons/hi'
import {IoHomeSharp} from 'react-icons/io5'
import {RiMessengerLine} from 'react-icons/ri'
import {FiPlusSquare} from 'react-icons/fi'
import {MdOutlineExplore} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'


const Navbar = () => {
  return (
    <div className='h-16 flex flex-row items-center justify-evenly border-b-2 pl-80 pr-80'>
        <div>
            <Link to='/'><img src={require('../../assets/images/Instagram_logo.svg.png')} alt="instagram_logo" className='w-28' /></Link>
        </div>
        <div className='w-72 h-8 bg-stone-100 border-none pl-4 flex flex-row items-center rounded-lg'>
            <HiOutlineSearch className='h-8 w-8 text-stone-300	pr-2'/>
            <input type="search" placeholder='Buscar' className='outline-0 bg-stone-100 h-6'  />
        </div>
        <div className='flex flex-row justify-between items-center w-60'>
            <Link to='/'><IoHomeSharp className='w-6 h-6 ' /></Link>
            <Link to='messenger'><RiMessengerLine className='w-6 h-6' /></Link>
            <Link to='upload'><FiPlusSquare className='w-6 h-6' /></Link>
            <Link to='discover'><MdOutlineExplore className='w-6 h-6' /></Link>
            <Link to='my-profile'><AiOutlineHeart className='w-6 h-6' /></Link>
            <Link><img src={require('../../assets/images/profile-img-01.jpg')} alt="profile" className='rounded-full w-6 h-6	'/></Link>
        </div>
    </div>
  )
}

export default Navbar