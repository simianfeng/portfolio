import React,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

const Resume=()=>{
    return(
        <div>
            <Grid>
            <Cell col={4}>
                <div style={{textAlign:'center'}}>
                    <img 
                    src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                    alt='avatar' style={{height:"150px"}}/>
                </div>
                <h2 style={{paddingTop:"0", textAlign:'center', margin:'auto'}}>
                    Simian Feng
                </h2>
                <hr style={{borderTop:'1px solid #833fb2',width:'100%'}}/>
                <h4 style={{paddingTop:"0", margin:'auto'}}>
                    Highlight of qualification
                </h4>
                <p>- Excellent knowledge in Data Aanalytics, Statistical Modelling, Business Intelligence</p>
                <p>- Practical experience with Statistical Analytics(ANOVA, Multivariable Analysis, and Linear
                     Regression), Data Management (Extraction, Cleaning, Manipulation, and Visualization)</p>
                <p>- Proficient in SQL, SAS, Excel and Tableau, Python, React, HTML/CSS</p>     
                <p>- Strong Analytical and Problem Solving skills with solid background in Statistics and
                     Mathematics to support business strategy development and decision-making, ability to 
                     perform data analyses and recognize patterns</p>

                <hr style={{borderTop:'1px solid #833fb2',width:'100%'}}/>
                <h5 style={{margin:'auto'}}>Address: </h5>
                <p>30 Roehampton Avenue,Toronto,ON</p>
                <h5 style={{margin:'auto'}}>Phone Number:</h5>
                <p>647-289-6866</p>
                <h5 style={{margin:'auto'}}>Email: </h5>
                <p>simonfeng2011@gmail.com</p>
                <h5 style={{margin:'auto'}}>My Website </h5>
                <p>mywebsite.com</p>
                <hr style={{borderTop:'1px solid #833fb2',width:'100%'}}/>

            </Cell>
            <Cell className='resume-right-col' col={8}>
                <div>
                <h1>Education</h1>
                    <h2>
                    <Education 
                    StartYear={2015} 
                    EndYear={2019} 
                    SchoolName='University of Toronto (St.George Campus)'
                    SchoolDescription_line1='- Honors Bachelor of Science degree. Majored in Math and Statistics'
                    SchoolDescription_line2='- Core courses: Probability, Methods of Data analysis, Surveys, 
                    Samplings and Observational Data, Theory of Statistical Practice, Time Series Analysis, 
                    Multivariable Data, Stochastic Process, Applied Statistics'
                    /> 
                    
                    </h2>
                    <hr style={{borderTop: '3px solid #e22947'}}/>
                    <h1>Experience</h1>
                    <h2>
                        <Experience 
                        StartYear={'2020 March'} 
                        EndYear={'2020 July'} 
                        CompanyName='Sun life Financial'
                        Position='Financial Centre Administrator'
                        JobDescription_line1="- Adheres to service standards for processing administrative requests"
                        JobDescription_line2="- Sends out and receives letters requesting information and assists with mail sorting and distribution"
                        JobDescription_line3="- Manages policyholder information using Salesforce"
                        JobDescription_line4="- Assists with answering phones"
                        JobDescription_line5="- Creates business reports using Excel"
                        />
                    </h2>
                    <hr style={{borderTop: '3px solid #e22947'}}/>
                    <h1>Skills</h1>
                    <h4>
                    <Skills Skills="React" progress={80}/>
                    <Skills Skills="Python" progress={70}/>
                    <Skills Skills="HTML/CSS" progress={70}/>
                    <Skills Skills="SAS" progress={60}/>
                    <Skills Skills="SQL" progress={60}/>
                    </h4>
                </div>
            </Cell>
            </Grid>
        </div>


    )
}

export default Resume;