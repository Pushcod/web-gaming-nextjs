import Link from 'next/link';
import React from 'react';

const menuLinks = [
  { label: 'Главная', url: '/' },
  { label: 'О нас', url: '/about' },
  { label: 'Акции', url: '/sales' },
  { label: 'Каталог', url: '/catalog' },
  { label: 'Контакты', url: '/contacts' }
];

const NavbarMobile = ({ containerStyle } : { containerStyle: string }) => {
  return (
    <nav className={`${containerStyle}`}>
      <menu className="w-full flex flex-col gap-4">
        {menuLinks.map((item, index) => {
          return (
            <>
              <li key={index}>
                <Link href={item.url}  className='text-white uppercase hover:text-orange-500 transition-all'>{item.label}</Link>
              </li>
            </>
          );
        })}
      </menu>
    </nav>
  )
}

export default NavbarMobile
