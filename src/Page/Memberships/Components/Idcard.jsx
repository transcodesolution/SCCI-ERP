import React from 'react'
import '../../../css/Idcard.css'
import logo from '../../../Assest/images/sccilogo.png'
import { AiOutlineDownload } from "react-icons/ai";
import { Button } from '@chakra-ui/react';

function Idcard({ details }) {
    console.log(details)
    return <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}> <div class="main_card">
        <div class="sub_card">
            <div class="card_img">
                <img class="logo_img" src={logo} alt="" />
                <img class="people_card" src={details?.profilePhoto} alt="" />
            </div>
            <div class="main_text">
                <div class="card_text">
                    <h6 class="card_in_1"><b>SAURASHTRA CHAMBER OF COMMERCE & INDUSTRY</b></h6>
                    <h6 class="card_in_2">STATUS:<span class="text_color">MEMBER</span></h6>
                    <h6 class="card_in_3"><b> FINANCIAL YEAR:2022-23</b></h6>
                </div>
                <div class="card_text_1">
                    <h6 class="card_in_4">SHRI SURESHBHAI LAKHANI</h6>
                    <div>
                        <h6 class="card_in_5">
                            MARUTIIMPEX<br />
                            PLOTNO.63/64,ADARSH CO-OP.SOCIETY<br />
                            VIJAYRAJNAGAR,BHAVNAGAR-364003
                        </h6>
                    </div>
                    {/* <div class="people_sign">
                        <h6 class="sign_text">PRESIDENT</h6>

                    </div> */}
                </div>
            </div>
        </div>
    </div>
    <div>
      
        <Button >Download  &nbsp;<AiOutlineDownload/></Button>

    </div>
    </div>
}

export default Idcard