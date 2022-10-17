import React, { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { BsArrowUpRight } from 'react-icons/bs';
import './navbar.scss';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='crypto__navbar'>
      <div className='crypto__navbar-links'>
        <div className='crypto__navbar-links_logo'>C</div>
        <div className='crypto__navbar-links_container'>
          <p>
            <a href='#activities'>Activities</a>
          </p>
          <p>
            <a href='#technology'>Technology</a>
          </p>
          <p>
            <a href='#rAndD'>R&D</a>
          </p>
          <p>
            <a href='#community'>Community</a>
          </p>
        </div>
      </div>
      <div className='crypto__navbar-career'>
        <button type='button'>
          <span>Career</span>
          <BsArrowUpRight className='arrow' />
        </button>
      </div>

      <div className='crypto__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={32}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <div
            className='crypto__navbar-menu_sandwich'
            onClick={() => setToggleMenu(true)}
          ></div>
        )}
        {toggleMenu && (
          <div className='crypto__navbar-menu_container scale-up-center'>
            <div className='crypto__navbar-menu_container-links'>
              <p>
                <a href='#activities'>Activities</a>
              </p>
              <p>
                <a href='#technology'>Technology</a>
              </p>
              <p>
                <a href='#rAndD'>R&D</a>
              </p>
              <p>
                <a href='#community'>Community</a>
              </p>
            </div>
            <div className='crypto__navbar-menu_container-career'>
              <button type='button'>
                <span>Career</span>
                <BsArrowUpRight className='arrow' />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;