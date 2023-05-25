import React from 'react'
import '../../../css/certificate.css'
import logo from '../../../Assest/images/sccilogo.png'
import ribbun from '../../../Assest/images/ribbon_img.png'

function Certificate() {
    return (
        <div class="main_bg">
            <div class="back_img">
                <div class="text_div">
                    <h3 id="demo4">SAURASHTRA CHAMBER OF COMMERCE & INDUSTRY</h3>
                    <img class="logo" src={logo} alt="" />
                        <p class="logo_text1">ESTO 1943</p> 
                        <h4 class="logo_text2">BHAVNAGAR</h4> 
                        <div class="ribbon_img">
                            <img src={ribbun} alt="" />
                                <span>MEMBERSHIP CERTIFICATE</span>
                        </div>
                        <p class="ribbon_text">This is to certify that</p>
                        <div class="form">
                            <label id="fname" for="fname">M/s. / Shri</label>
                            <input type="text" id="fname" name="fname" />
                        </div>
                        <p class="member_text">is Member of this Organisation for The Year<br />
                            1st April 2021 to 31st March 2022
                        </p>
                        <div class="sign">
                            <div class="sign_div1">
                                <span></span>
                                <p class="sign_text">Hon.Secretary</p>
                            </div>
                            <div>
                                <span></span>
                                <p class="sign_text">President</p>
                            </div>
                            <div>
                                <span></span>
                                <p class="sign_text">Hon.Secretary</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Certificate