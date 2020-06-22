import React from 'react';
import { Layout, Header, Navigation, Content, Drawer,Textfield } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

const App =()=>{
    return (
        <div className="demo-big-content">
    <Layout>
        <Header className='header-color' title="Simian Feng" scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    )
}

export default App;