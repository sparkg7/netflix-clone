import React from 'react'
import ReactDOM from 'react-dom'
import './loading.css'
import {BarLoader} from 'react-spinners'

function Loading() {
    return ReactDOM.createPortal(
        <div className="loading">
            <img src="img/logo.png" alt="netflix logo"/>
            <BarLoader loading size={50} color='red'/>
        </div>,
        document.getElementById('loading')
    )
}

export default Loading