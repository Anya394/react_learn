import React from 'react';
import Bond from './Bond';
import '../css/Bonds.css';

const Bonds = (props) => {
    if (props.bonds.length > 0)
        return <div className='bonds'>
            {
                props.bonds.map((el) => (
                    <Bond bond={el} />
                ))
            }
        </div>
    else
        return <div className='noBonds'>
            <p>Облигаций нет</p>
        </div>
}

export default Bonds