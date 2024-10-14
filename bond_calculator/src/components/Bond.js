import React, { useState } from 'react';
import '../css/Bond.css';
import FullBond from './FullBond';

import { BsChevronCompactDown } from "react-icons/bs"; //вниз
// import { BsChevronCompactUp } from "react-icons/bs"; вверх
// import { FiEdit3 } from "react-icons/fi"; карандаш
// import { CiEdit } from "react-icons/ci"; карандаш лучше
// import { RxCross2 } from "react-icons/rx"; крест
// import { RiEyeCloseFill } from "react-icons/ri"; глаз закрыт
// import { PiEyeClosed } from "react-icons/pi"; глаз закрыт проще
// import { IoEyeOutline } from "react-icons/io5"; глаз открыт
// import { IoEyeOffOutline } from "react-icons/io5"; глаз зачёркнут
// import { RxEyeOpen } from "react-icons/rx"; глаз открыт со зрачком

const Bond = (props) => {

    const [showBond, setShowBond] = useState(false) 

    return <div className='bondBox'>
        <div className='bond'>
            <span className='shortname'>{props.bond.shortname}</span>
            <BsChevronCompactDown className='icon' onClick={() => {
                    setShowBond(!showBond)
                }}/>
            
        </div>

        { showBond && <FullBond />}
        
    </div>
}

export default Bond