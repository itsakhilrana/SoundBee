import React from 'react'
import './LoadingSpinner.scss'

import logo from '../Components/logo.svg'

const LoadingSpinner = ({caption, marTop}) => {
  return (
    <div className="LoadingSpinner" style={{marginTop:`${marTop}`}}>
      <div className="wrap-loader">
        {/* <div className="myloader">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          
          <div className="wrap-text">
            <div className="text">
              <span>L</span>
              <span>O</span>
              <span>A</span>
              <span>D</span>
              <span>I</span>
              <span>N</span>
              <span>G</span>
              <span>...</span>
            </div>
          </div>
        </div> */}
        <div className="loader-text">
          <div>
            <img src={logo} width="22px"></img> {caption}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner
