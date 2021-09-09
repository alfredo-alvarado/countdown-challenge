import React from 'react';
import classes from './Loader.module.css';

const Loader = () => {

    const { Parent, Loader } = classes; 

    return (
        <div className={Parent}>
            <div className={Loader} />
        </div>
    );
};

export default Loader;