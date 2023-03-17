import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({title}) => {
  return (
    <div>
        <p >
            <Link to='/'>Home</Link> &gt; <span className='text-gray-400'>{title}</span>
        </p>
    </div>
  )
}

export default Breadcrumb