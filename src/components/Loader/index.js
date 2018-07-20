import React from 'react';
import loaderSrc from '../../assets/load.gif';

const Loader = props => (
    <div>
        <img 
        alt="Loading Icon"
        src={loaderSrc} />
    </div>
);

export default Loader;