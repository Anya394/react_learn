import React from 'react';
import Bond from './Bond';

const Bonds = (props) => {
    if(props.bonds.length > 0)
        return <div>
            {
                this.props.bonds.map((el) => (
                    <Bond bond={el} />
                ))
            }
        </div>
    else
        return <div className='bonds'>
            <p>Облигаций нет</p>
        </div>
}

export default Bonds