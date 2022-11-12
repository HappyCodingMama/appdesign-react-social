import { AiTwotoneHome } from 'react-icons/ai';
import { MdDarkMode, MdEmail } from 'react-icons/md';
import { BsGrid } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { BsPersonCheck } from 'react-icons/bs';
import { RiNotification3Fill } from 'react-icons/ri';
import './navbar.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';

const Navbar = () => {
  const { toggle } = useContext(DarkModeContext);
  const { user } = useContext(AuthContext);

  return (
    <div className='container-navbar'>
      <div className='navbar-left'>
        <Link to='/'>
          <span>HeyChat</span>
        </Link>
        <AiTwotoneHome className='navbar-home-icon' />

        <MdDarkMode onClick={toggle} />
        <BsGrid />

        <div className='search'>
          <BiSearch />
          <input type='text' placeholder='search' />
        </div>
      </div>
      <div className='navbar-right'>
        <BsPersonCheck />
        <MdEmail />
        <RiNotification3Fill />
        <div className='navbar-user'>
          <img src={user.profilePic} alt='' />
          <span>{user.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
