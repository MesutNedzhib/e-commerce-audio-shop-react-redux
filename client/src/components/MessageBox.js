import React from 'react'
import {Link} from 'react-router-dom';

export default function MessageBox(props) {
    return (
        <div className={`alert alert-${props.variant} || info`}>
            {/* {props.children} */}
            Product Not Found! Click-><a href="/shop">Back to shop</a>
        </div>
    )
}
