import React from 'react';
import '../css/FullBond.css';

const FullBond = (props) => {

    return <div className='fullBondBox'>
            <div className='fullBond'>
                <span className='property'>{props.fullBond.name}</span>

                <div>
                    <div>
                        <label> Дата погашения </label>
                        <span className='property'>{props.fullBond.matDate}</span>
                    </div>
                    
                    <div>
                        <label> Купон (%) </label>
                        <span className='property'>{props.fullBond.couponPercent}</span>
                    </div>
                    
                </div>
                
                <div>
                    <span className='property'>{props.fullBond.couponDate}</span>
                    <span className='property'>{props.fullBond.couponValue}</span>
                    <span className='property'>{props.fullBond.couponFrequency}</span>
                </div>

            </div>
        </div>
}

export default FullBond