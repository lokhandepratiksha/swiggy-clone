import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';
import { useState , useEffect} from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState('Login');

  useEffect(()=>{
    console.log('useEffect called');
  }, [btnNameReact]);

  const onlineStatus = useOnlineStatus();
  return (
    <div className='bg-gray-500 flex flex-row justify-between'>
      <img className='w-20' src={LOGO_URL} />
      <div className='navigation'>
        <ul className='text-white'>
           <li>online Status {onlineStatus ? '🟢' :'🔴'}</li>
          <li><Link to="/" >Home</Link> </li>
          <li><Link to="/about"> About Us</Link></li>
          <li> <Link to="/contact"> Contact us</Link></li>
          <li> <Link to="/grocery">Grocery</Link></li>
          <li>Cart</li>
          <button
            className='loginBtn'
            onClick={() => {
              btnNameReact === 'Login'
                ? setBtnNameReact('LogOut')
                : setBtnNameReact('Login');
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
