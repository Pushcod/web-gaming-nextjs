import Link from 'next/link';
import React from 'react';

const menuLinks = [
  { label: 'Главная', url: '/' },
  { label: 'О нас', url: '/about' },
  { label: 'Акции', url: '/sales' },
  { label: 'Каталог', url: '/catalog' },
  { label: 'Контакты', url: '/contacts' }
];

const Navbar = ( { containerStyle } : { containerStyle: string } ) => {
  return (
    <nav className={`${containerStyle}`}>
      <menu className="w-full flex items-center justify-center gap-4">
        {menuLinks.map(( item, index ) => {
          return (
            <>
              <li key={index}>
                <Link href={item.url} className='text-white uppercase hover:text-accent transition-all'>{item.label}</Link>
              </li>
            </>
          )
        })}
      </menu>
    </nav>
  )
}

export default Navbar;