import { useContext } from 'react';
import { ModeContext } from '../context/ModeContext';
import { LightBulbIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const ThemeSwitcher = () => {
  const { mode, dispatch } = useContext(ModeContext);
  const switchMode = () => {
    mode === 'DARK' ? dispatch({ type: 'LIGHT' }) : dispatch({ type: 'DARK' });
    localStorage.setItem('mode', mode === 'DARK' ? 'LIGHT' : 'DARK');
  };
  return (
    <motion.button
      aria-label='Theme switcher'
      initial={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.2, rotate: [0, 20, -20, 0] }}
      duration={{ duration: 0.5 }}
      onClick={switchMode}
      className={`fixed bottom-10 left-5 p-3 rounded-full ${
        mode === 'DARK' ? 'bg-midGray' : 'bg-lightRed'
      }`}>
      <LightBulbIcon className='text-white h-6 w-6' />
    </motion.button>
  );
};
export default ThemeSwitcher;
