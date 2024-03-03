import React, { useState } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-500 relative">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <div className={`sm:hidden absolute  ${menuOpen ? 'right-20' : 'right-10'} top-6 `}>
            <button
              className="text-white focus:outline-none text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              &#9776; {/* Hamburger icon */}
            </button>
          </div>
          <ul
            className={`sm:flex ${menuOpen ? 'flex' : 'hidden'} flex-col mt-12 sm:mt-0 sm:flex-row sm:justify-end`}
          >
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name} className="mb-2 sm:mb-0">
                    <button
                      onClick={() => {
                        navigate(item.slug);
                        setMenuOpen(false);
                      }}
                      className="inline-block text-white px-6 py-2 duration-200 hover:bg-black rounded-full"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
