import { Link as NavLink } from 'react-router-dom';
import { useState, useContext } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { LanguageContext } from '../context/LanguageContext';
import Logo from './Logo';
import { ModeContext } from '../context/ModeContext';
const NavItems = [
  {
    name: 'Home',
    href: '#',
    SPANISH: 'Home',
    ENGLISH: 'Home',
    ITALIAN: 'Home'
  },
  {
    name: 'Projects',
    href: '#projects',
    SPANISH: 'Proyectos',
    ENGLISH: 'Projects',
    ITALIAN: 'Progetti'
  },
  {
    name: 'Skills',
    href: '#skills',
    SPANISH: 'Habilidades',
    ENGLISH: 'Skills',
    ITALIAN: 'Competenze'
  },
  {
    name: 'Services',
    href: '#services',
    SPANISH: 'Servicios',
    ENGLISH: 'Services',
    ITALIAN: 'Servizi'
  },
  {
    name: 'Contact',
    href: '#contact',
    SPANISH: 'Contacto',
    ENGLISH: 'Contact',
    ITALIAN: 'Contatto'
  }
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { mode } = useContext(ModeContext);
  return (
    <header className={`${mode === 'DARK' && 'bg-black'}`}>
      <nav
        aria-label='Global'
        className='relative mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
        <NavBarDesktop setMobileMenuOpen={setMobileMenuOpen} />
        <NavBarMobile
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </nav>
    </header>
  );
};

export default NavBar;

const NavBarDesktop = ({ setMobileMenuOpen }) => {
  const { language, dispatch } = useContext(LanguageContext);
  const { mode } = useContext(ModeContext);
  const switchLanguage = (language) => {
    dispatch({ type: language });
    localStorage.setItem('language', language);
  };
  return (
    <>
      <div className='flex lg:flex-1'>
        <Logo size='h-28' />
      </div>
      {/* Mobile Menu */}
      <div className='flex lg:hidden'>
        <button
          type='button'
          className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
            mode === 'DARK' ? 'text-white' : 'text-black'
          } `}
          onClick={() => setMobileMenuOpen(true)}>
          <span className='sr-only'>Open main menu</span>
          <Bars3Icon aria-hidden='true' className='h-6 w-6' />
        </button>
      </div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex gap-4 mr-10'>
        <button
          className={`${language === 'ENGLISH' && 'underline'}`}
          onClick={() => switchLanguage('ENGLISH')}>
          EN
        </button>
        <span>|</span>
        <button
          className={`${language === 'SPANISH' && 'underline'}`}
          onClick={() => switchLanguage('SPANISH')}>
          ES
        </button>
        <span>|</span>
        <button
          className={`${language === 'ITALIAN' && 'underline'}`}
          onClick={() => switchLanguage('ITALIAN')}>
          IT
        </button>
      </div>
      {/* Links */}
      <Links
        listStyles='hidden lg:flex lg:gap-x-12'
        linkStyle={`text-sm font-semibold leading-6 ${
          mode === 'DARK' ? 'text-white' : 'text-black'
        } hover:underline decoration-darkRed decoration-2`}
      />
    </>
  );
};
const NavBarMobile = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const { language, dispatch } = useContext(LanguageContext);
  const { mode } = useContext(ModeContext);

  const switchLanguage = (language) => {
    dispatch({ type: language });
    localStorage.setItem('language', language);
  };
  return (
    <Dialog
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
      className='lg:hidden'>
      <div className='fixed inset-0 z-10' />
      <DialogPanel
        className={`fixed  inset-y-0 right-0 z-10 w-full overflow-y-auto ${
          mode === 'DARK' ? 'bg-midGray' : 'bg-white'
        } px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}>
        <div className='flex items-center justify-between'>
          <Logo size='h-24' />
          <button
            type='button'
            onClick={() => setMobileMenuOpen(false)}
            className={`-m-2.5 rounded-md p-2.5 ${
              mode === 'DARK' ? 'text-gray-200' : 'text-gray-900'
            }`}>
            <span className='sr-only'>Close menu</span>
            <XMarkIcon aria-hidden='true' className={`h-6 w-6`} />
          </button>
        </div>
        <div className='flex lg:hidden gap-2 mr-10 mt-5'>
          <button
            className={`${mode === 'DARK' ? 'text-white' : 'text-black'} ${
              language === 'ENGLISH' && 'underline'
            }`}
            onClick={() => switchLanguage('ENGLISH')}>
            EN
          </button>
          <span className={`${mode === 'DARK' ? 'text-white' : 'text-black'}`}>
            |
          </span>
          <button
            className={`${mode === 'DARK' ? 'text-white' : 'text-black'} ${
              language === 'SPANISH' && 'underline'
            }`}
            onClick={() => switchLanguage('SPANISH')}>
            ES
          </button>
          <span className={`${mode === 'DARK' ? 'text-white' : 'text-black'}`}>
            |
          </span>
          <button
            className={`${mode === 'DARK' ? 'text-white' : 'text-black'} ${
              language === 'ITALIAN' && 'underline'
            }`}
            onClick={() => switchLanguage('ITALIAN')}>
            IT
          </button>
        </div>
        <div className='mt-6 flow-root'>
          <nav className='-my-6 divide-y divide-gray-500/10'>
            <Links
              listStyles='space-y-2 py-6'
              linkStyle={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:underline decoration-darkRed decoration-2 ${
                mode === 'DARK' ? 'text-white' : 'text-black'
              }`}
            />
          </nav>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export const NavItem = ({ href, text, children, className }) => {
  return (
    <li>
      <NavLink to={href} className={className}>
        {text}
        {children}
      </NavLink>
    </li>
  );
};

const Links = ({ listStyles, linkStyle }) => {
  const { language } = useContext(LanguageContext);
  return (
    <ul className={listStyles}>
      {NavItems.map((item) => (
        <NavItem key={item.name} href={item.href} className={linkStyle}>
          {item[language]}
        </NavItem>
      ))}
    </ul>
  );
};
