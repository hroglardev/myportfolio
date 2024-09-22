import { NavLink } from 'react-router-dom';
import LightLogo from '../assets/WhiteLogo.webp';
import DarkLogo from '../assets/meDark.webp';
import { useContext } from 'react';
import { ModeContext } from '../context/ModeContext';

const Logo = ({ size }) => {
  const { mode } = useContext(ModeContext);
  return (
    <NavLink to='#home' className='-m-1.5 p-1.5'>
      <span className='sr-only'>Lucas Cubile - Fullstack Developer</span>
      <img
        width={96}
        height={96}
        alt='Lucas Cubile - Logo'
        src={mode === 'DARK' ? DarkLogo : LightLogo}
        className={`${size} w-auto`}
      />
    </NavLink>
  );
};
export default Logo;
