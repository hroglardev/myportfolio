import Footer from '../sections/Footer';
import NavBar from '../components/NavBar';
import ThemeSwitcher from '../components/ThemeSwitcher';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>
        {children}
        <ThemeSwitcher />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
