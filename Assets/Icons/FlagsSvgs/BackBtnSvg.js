import React from "react";
import {SvgXml} from 'react-native-svg';


const BackBtnSvg = (props) => {
    const size = props.size ? props.size : 12;
    const color = props.color ? props.color : 'white' 

    return (
        <SvgXml
        // width={size}
        // height={size}
        xml={'<svg width="11" height="16" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6196 0.990059C10.1296 0.500059 9.33957 0.500059 8.84957 0.990059L0.53957 9.30006C0.14957 9.69006 0.14957 10.3201 0.53957 10.7101L8.84957 19.0201C9.33957 19.5101 10.1296 19.5101 10.6196 19.0201C11.1096 18.5301 11.1096 17.7401 10.6196 17.2501L3.37957 10.0001L10.6296 2.75006C11.1096 2.27006 11.1096 1.47006 10.6196 0.990059Z" fill="white"/></svg>'}  />
    )
}

export default BackBtnSvg