import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

const LandingPage=()=>{
    return(
        <div style={{width:'100%', margin:'auto'}}>
            <Grid className='landing-grid'>
                <Cell col={12}>
                    <img src="https://img0.pclady.com.cn/pclady/1304/18/966214_wuyanzu.jpg" alt='simon'
                    className='my-pic'/>

                    <div className='banner-text'>
                        <h1> Full Stack Web Developer</h1>
                        <hr/>
                        <p>
                            HTML/CSS | React | Python | SAS | SQL | Tableau
                        </p>

                        <div className="social-link">
                            {/* Linkedin*/}
                            <a rel="noopener noreferrer" href="https://linkedin.com/in/simonfeng-a8a3b6187" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>

                            {/* Github*/}
                            <a rel="noopener noreferrer" href="https://github.com/simianfeng" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>

                            {/*Youtube*/}
                            <a rel="noopener noreferrer" href="http://youtube.ca" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true"/>
                            </a>


                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default LandingPage;