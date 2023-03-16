import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({title}) => {
  return (
    <div>
        <p>
            <Link to='/'>Home</Link> &gt; {title} 
        </p>
    </div>
  )
}

export default Breadcrumb