import React from 'react';

import CustomLink from './CustomLink';

function Header() {
  return (
    <header className='main-header'>
      {/* <div className="expand-nav"
			
      >
          <label>
        <input type="checkbox" name="" />
  <span className="check"></span>
  <span className="btn"></span>
</label>
       </div>  */}
      <nav className=''>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/work'>Work</CustomLink>

        {/* <CustomLink to="/work"> <OnOff /></CustomLink> */}

        {/* <button className="btn-them">ON\OFF</button> */}
        {/* <CustomLink to="/about">About</CustomLink> */}
      </nav>
    </header>
  );
}

export default Header;
