import React,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';

const AboutMe=()=>{
    return(
        <Grid>
            <Cell col={4}>
                <h1 style={{textAlign:'center'}}>About Me</h1>
               <div style={{textAlign:'center'}}>
                   <img src="https://img0.pclady.com.cn/pclady/1304/18/966214_wuyanzu.jpg" alt='simon' className="aboutmepic"/>
                </div> 
            </Cell>
            <Cell col={8}>
                <div className="aboutme-contend">
                <h4 style={{marginTop:'120px'}}>Certificate</h4>
                <p style={{margin:'auto'}}>- Obtained SAS Base global certificate in April 2019</p> 
                <p style={{margin:'auto'}}>- Obtained SAS Advanced global certificate in July 2019</p>
                <hr style={{borderTop:'1px solid #833fb2',width:'100%'}}/>
                <h4 style={{marginTop:'auto'}}>Personal Information</h4>
                <p>Birthday: 1996/07/28</p>

                </div>


            </Cell>       
         </Grid>



    )
}

export default AboutMe;