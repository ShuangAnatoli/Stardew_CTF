// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="#login">Login</Link></li>
          <li><Link href="#main">Main Section</Link></li>
          <li><Link href="#info">Information Section</Link></li>
          <li><Link href="#gallery">Gallery</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
