import React from 'react';

const Bond = (props) => {
    return <div className='bond'>
        <span className='shortname'>{props.shortname}</span>
        <span className='couponpercent'>{props.couponpercent}</span>
    </div>
}

export default Bond