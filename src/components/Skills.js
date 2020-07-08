import React, {Component,useState} from "react";
import {Grid, Cell, ProgressBar} from 'react-mdl';

const Skills=(props)=>{
    const [Skills,SetSkills]=useState('')

    return (
        <Grid>
            <Cell col={12}>
                <div style={{display:'flex'}}>{props.Skills} 
                <ProgressBar style={{margin:'auto', width:"75%"}} progress={props.progress}/>
                </div>
            </Cell>
        </Grid>
    )
}

export default Skills;