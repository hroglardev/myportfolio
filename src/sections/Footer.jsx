import { NavItem } from '../components/NavBar';
import FooterLogo from '../assets/logo2.webp';
import LightFooterLogo from '../assets/logo22light.webp';
import Instagram from '../assets/instagram.svg';
import Twitter from '../assets/twitter.svg';
import Github from '../assets/github.svg';
import LinkedIn from '../assets/linkedin.svg';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ModeContext } from '../context/ModeContext';

const navigation = {
  navigate: [
    {
      name: 'Home',
      href: '#home',
      ENGLISH: 'Home',
      SPANISH: 'Inicio',
      ITALIAN: 'Home'
    },
    {
      name: 'Projects',
      href: '#projects',
      ENGLISH: 'Projects',
      SPANISH: 'Proyectos',
      ITALIAN: 'Progetti'
    },
    {
      name: 'Skills',
      href: '#skills',
      ENGLISH: 'Skills',
      SPANISH: 'Habilidades',
      ITALIAN: 'Competenze'
    },
    {
      name: 'Services',
      href: '#services',
      ENGLISH: 'Services',
      SPANISH: 'Servicios',
      ITALIAN: 'Servizi'
    }
  ],

  contact: [
    {
      name: 'Whatsapp',
      href: 'https://wa.me/+393881169579',
      ENGLISH: 'Whatsapp',
      SPANISH: 'Whatsapp',
      ITALIAN: 'Whatsapp'
    },
    {
      name: 'Email',
      href: 'mailto:cubilelucas@gmail.com',
      ENGLISH: 'Email',
      SPANISH: 'Email',
      ITALIAN: 'Email'
    },
    {
      name: 'Schedule a call',
      href: 'https://calendly.com/cubilelucas',
      ENGLISH: 'Schedule a call',
      SPANISH: 'Programa una llamada',
      ITALIAN: 'Programma una chiamata'
    }
  ],
  social: [
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/lucas-martin-cubile/',
      icon: LinkedIn
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/lucascubile/',
      icon: Instagram
    },
    {
      name: 'X',
      href: 'https://x.com/LucasQB93',
      icon: Twitter
    },
    {
      name: 'GitHub',
      href: 'https://github.com/hroglardev/',
      icon: Github
    }
  ]
};

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const { mode } = useContext(ModeContext);
  return (
    <footer
      aria-labelledby='footer-heading'
      id='contact'
      className={`${mode === 'DARK' && 'bg-black'}`}>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 '>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8 '>
          <div className='space-y-8'>
            <img
              alt='Lucas Cubile'
              src={mode === 'DARK' ? LightFooterLogo : FooterLogo}
              className='h-28'
              width={112}
              height={112}
            />
            <blockquote
              className={`text-md leading-6 ${
                mode === 'DARK' ? 'text-gray-300' : 'text-gray-900'
              }`}>
              {language === 'ENGLISH' &&
                "Everything turns out fine. If it didn't it's because it wasn't the end of it."}
              {language === 'SPANISH' &&
                "'Todo termina bien. Si no salió bien, es porque no era el final.'"}
              {language === 'ITALIAN' &&
                "'Tutto andrà bene. Se non è andato bene, è perché non era la fine.'"}

              <cite
                className={`block mt-2 text-right ${
                  mode === 'DARK' ? 'text-gray-300' : 'text-gray-900'
                }`}>
                — Sebastián Polliotto
              </cite>
            </blockquote>
            <div className='flex space-x-6'>
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target='_blank'
                  className='text-gray-400 hover:text-gray-500'>
                  <span className='sr-only'>{item.name}</span>
                  <img
                    src={item.icon}
                    alt={item.name}
                    aria-hidden='true'
                    className={`h-6 w-6 ${mode === 'DARK' && 'invert'}`}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className='mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0'>
            <div className='md:grid md:justify-items-center grid-cols-2 flex justify-evenly md:gap-8'>
              <div>
                <h3
                  className={`text-sm font-semibold leading-6 ${
                    mode === 'DARK' ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                  {language === 'ENGLISH' && 'Navigate'}
                  {language === 'SPANISH' && 'Navegar'}
                  {language === 'ITALIAN' && 'Navigare'}
                </h3>
                <nav>
                  <ul role='list' className='mt-6 space-y-4'>
                    {navigation.navigate.map((item) => (
                      <NavItem
                        key={item.name}
                        className={`text-sm leading-6 ${
                          mode === 'DARK' ? 'text-gray-300' : 'text-gray-900'
                        } `}
                        href={item.href}
                        text={item[language]}
                      />
                    ))}
                  </ul>
                </nav>
              </div>
              <div>
                <h3
                  className={`text-sm font-semibold leading-6 ${
                    mode === 'DARK' ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                  {language === 'ENGLISH' && 'Contact Me'}
                  {language === 'SPANISH' && 'Contáctame'}
                  {language === 'ITALIAN' && 'Contattami'}
                </h3>
                <div>
                  <ul role='list' className='mt-6 space-y-4'>
                    {navigation.contact.map((item) => (
                      <NavItem
                        key={item.name}
                        className={`text-sm leading-6 ${
                          mode === 'DARK' ? 'text-gray-300' : 'text-gray-900'
                        } `}
                        href={item.href}
                        text={item[language]}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24'>
          <p
            className={`text-xs leading-5 ${
              mode === 'DARK' ? 'text-gray-200' : 'text-gray-900'
            }`}>
            &copy; 2020 Lucas Cubile.{' '}
            {language === 'ENGLISH'
              ? 'All rights reserved.'
              : language === 'SPANISH'
              ? 'Todos los derechos reservados'
              : 'Tutti i diritti riservati'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
