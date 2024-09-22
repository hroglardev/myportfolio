import { motion } from 'framer-motion';
import Section from '../components/Section';
import MyPic from '../assets/me.webp';
import { LanguageContext } from '../context/LanguageContext';
import { useContext } from 'react';
import { ModeContext } from '../context/ModeContext';
const Hero = () => {
  const { language } = useContext(LanguageContext);
  const { mode } = useContext(ModeContext);
  return (
    <div className={`flex justify-center px-6`}>
      <Section role={'banner'} ariaLabel={'Hero section'} id=''>
        <div className='w-full order-2 md:order-1 '>
          <h1
            className={`${
              mode === 'DARK' ? 'text-gray-200' : 'text-lightRed'
            } mt-10 text-4xl font-bold tracking-tight sm:text-6xl`}>
            {language === 'ENGLISH' && "Hi, I'm Lucas. A Fullstack Developer"}
            {language === 'SPANISH' &&
              'Hola, Soy Lucas. Desarrollador Fullstack'}
            {language === 'ITALIAN' &&
              'Ciao, Sono Lucas. Sviluppatore Fullstack'}
          </h1>
          <p className='mt-6 text-lg leading-8 '>
            {language === 'ENGLISH' &&
              'Enhancing user experience with React and optimizing backend systems to handle high traffic using Node.js.'}
            {language === 'SPANISH' &&
              'Mejorando la experiencia del usuario con React y optimizando los sistemas backend para manejar tráfico alto usando Node.js.'}
            {language === 'ITALIAN' &&
              "Miglioro l'esperienza utente con React e ottimizzo i sistemi backend per gestire un alto traffico utilizzando Node.js."}
          </p>
          <p className='mt-3'>
            {language === 'ENGLISH' &&
              'C2 English | +10 years of teaching experience'}
            {language === 'SPANISH' &&
              'Inglés C2 | +10 años de experiencia docente'}
            {language === 'ITALIAN' &&
              "Inglese C2 | +10 anni di esperienza nell'insegnamento"}
          </p>
          <div className='mt-10 flex items-center gap-x-6'>
            <a
              href='https://calendly.com/cubilelucas'
              target='_blank'
              className='rounded-3xl bg-lightRed px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-darkRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'>
              {language === 'ENGLISH' && 'Schedule a call'}
              {language === 'SPANISH' && 'Programa una llamada'}
              {language === 'ITALIAN' && 'Programma una chiamata'}
            </a>
          </div>
        </div>
        <motion.div
          className='hidden md:flex md:justify-center order-1 lg:order-2 w-full'
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          <div className='rounded-full w-full max-w-[348px]'>
            <img
              src={MyPic}
              alt='Lucas Cubile'
              className='w-full rounded-full object-cover drop-shadow-2xl'
              width={348}
              height={348}
            />
          </div>
        </motion.div>
        <motion.div
          className='md:hidden flex justify-center order-1 lg:order-2 w-full'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}>
          <div className='rounded-full w-full max-w-[348px]'>
            <img
              src={MyPic}
              alt='Lucas Cubile'
              className='w-full rounded-full object-cover'
              width={348}
              height={348}
            />
          </div>
        </motion.div>

        {/* <div className='mt-10 flex items-center gap-x-6'>
          <a
            href='#'
            className='rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'>
            Get started
          </a>
          <a href='#' className='text-sm font-semibold leading-6 text-white'>
            Learn more <span aria-hidden='true'>→</span>
          </a>
        </div> */}
      </Section>
    </div>
  );
};
export default Hero;
