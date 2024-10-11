import React from 'react';
import '../css/Bond.css';

const Bond = (props) => {
    return <div className='bond'>
        <span className='shortname'>{props.bond.shortname}</span>
        <span className='couponpercent'>{props.bond.couponpercent}</span>
    </div>
}

export default Bond