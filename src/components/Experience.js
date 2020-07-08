import React, {Component,useState} from "react";
import {Grid, Cell} from 'react-mdl';

const Experience=(props)=>{
    const [StartYear, SetStartYear]=useState(0)
    const [EndYear, SetEndYear]=useState(0)
    const [CompanyName, SetCompanyName]=useState('')
    const [Position, SetPosition]=useState('')
    const [JobDescription, SetJobDescription]=useState('')
    return(
        <Grid>
            <Cell col={4}><h4 style={{marginTop:'0'}}>{props.StartYear}-{props.EndYear}</h4></Cell>
            <Cell col={8}>
                <h4 style={{marginTop:'0'}}><span>{props.Position}</span> at {props.CompanyName}</h4>
                <p style={{margin:'auto'}}>{props.JobDescription_line1}</p>
                <p style={{margin:'auto'}}>{props.JobDescription_line2}</p>
                <p style={{margin:'auto'}}>{props.JobDescription_line3}</p>
                <p style={{margin:'auto'}}>{props.JobDescription_line4}</p>
                <p style={{margin:'auto'}}>{props.JobDescription_line5}</p>
                <p style={{margin:'auto'}}>{props.JobDescription_line6}</p>
                </Cell>
        </Grid>
    )
}

export default Experience;