import { React, useEffect, useState } from 'react';
import './index.css';

const Navbar = () => {
const [state, setState] = useState(0);

useEffect(() => {
  setState(10);
},[]);

  return (
    <div className="Nav">  
      <p>home page</p>
      <span>{state}</span>
    </div>
  );
};

export default Navbar;
