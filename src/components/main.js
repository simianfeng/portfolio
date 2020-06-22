import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Resume from './Resume';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';


const Main=()=>{
    return(
    <switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/aboutme' component={AboutMe}/>
        <Route exact path='/resume' component={Resume}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/contact' component={Contact}/>

    </switch>
    )
}


export default Main;