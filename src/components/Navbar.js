import React from 'react';
import {useGlobalContext} from '../context/context';



const Navbar = () => {

const {test} = useGlobalContext()    
console.log(test);

  return (
    <div>Navbar</div>
  )
}

export default Navbar