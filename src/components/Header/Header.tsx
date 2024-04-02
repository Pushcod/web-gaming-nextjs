"use client";
import React, { useEffect, useState } from 'react';
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Navbar/Navbar';
import { FaBars } from 'react-icons/fa6';
import NavbarMobile from '../NavbarMobile/NavbarMobile';



const Header = () => {

  const [ openNav, setOpenNav ] = useState(false);
  const { user } = useKindeBrowserClient();
  useEffect(() => {
    console.log(user)
  }, [user]);

  return (
    <header className='w-full h-[70px] border-b border-zinc-800 bg-zinc-950'>
      <div className="container mx-auto h-full flex items-center">
        <div className="relative w-full h-full flex items-center justify-between">
          <Link href="/" className='w-[200px] h-[50px]'>
            <Image src='/assets/img/logo.svg' alt='Логотип сайта' width={200} height={50} className='w-full h-full' />
          </Link>
          <NavbarMobile containerStyle={`${openNav ? 'max-h-max border-b border-zinc-800 p-[15px]' : 'max-h-0 overflow-hidden py-0 px-[15px] border-zinc-800/0' } fixed w-full top-[71px] left-0 right-0 transition-all duration-300 bg-zinc-900 md:hidden`} />

          <Navbar containerStyle='hidden md:flex' />

          <div className=''>
            <ul className="flex items-center gap-4">
              {user ?
                <>
                
                  <div className='flex items-center gap-2'>
                    {user.picture && <Link href="/profile">
                    <Image src={user.picture} alt={'Изображение профиля'} width={50} height={50} className='w-[50px] h-[50px] rounded-full object-cover' /> </Link>}
                    <LogoutLink className='uppercase text-white/50 hover:text-white transition-all'>Выйти</LogoutLink>
                  </div>
                
                
                </>
                :
                <>
                    <li className="inline-flex">
                    <RegisterLink className='uppercase text-white/50 hover:text-white transition-all'>Регистрация</RegisterLink>
                    </li>
                    <li className="inline-flex">
                      <LoginLink className='uppercase text-white/50 hover:text-white transition-all'>Войти</LoginLink>
                    </li>
                </>
              }
            
            </ul>
            
            <button onClick={() => setOpenNav(!openNav)} className='text-xl text-white w-[45px] h-[45px] flex items-center justify-center border border-zinc-500 rounded-md md:hidden'>
              <FaBars />
            </button>
            
          </div>
        </div>
      </div> 
    </header>
  )
}

export default Header