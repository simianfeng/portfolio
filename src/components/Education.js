import React, {Component,useState} from "react";
import {Grid, Cell} from 'react-mdl';

const Education=(props)=>{
    const [StartYear, SetStartYear]=useState(0)
    const [EndYear, SetEndYear]=useState(0)
    const [SchoolName, SetSchoolName]=useState('')
    return(
        <Grid>
            <Cell col={4}><h4 style={{marginTop:'0'}}>{props.StartYear}-{props.EndYear}</h4></Cell>
            <Cell col={8}>
                <h4 style={{marginTop:'0'}}>{props.SchoolName}</h4>
                <p style={{margin:'auto'}}>{props.SchoolDescription_line1}</p>
                <p style={{margin:'auto'}}>{props.SchoolDescription_line2}</p>
                </Cell>
        </Grid>
    )
}

export default Education;
