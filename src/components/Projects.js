import React,{Component, useState} from 'react';
import {Tabs, Tab,Grid,Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

const Projects=()=>{
    const [activeTab, SetactiveTab] = useState(0);

    const toggleCategories=(event)=>{
         if (activeTab===0){
            return(
               <div className='projects-grid'>
                   <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                       <CardTitle style={{color:'#fff', height:'176px', background:'url(https://planetjon.ca/wp-content/uploads/2019/09/react-logo.png) center/cover'}}>
                           The portfolio website
                        </CardTitle>
                        <CardText>
                               Welcome to my github. This is the source codes of this portfolio website. 
                        </CardText>
                        <CardActions border>
                        <a href="https://github.com/simianfeng/portfolio">
                           <Button colored>Github</Button>
                        </a>
                        </CardActions>
                        <CardMenu style={{color:"#fff"}}>
                            <IconButton name='share'/>
                        </CardMenu>
                   </Card>

                   <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                       <CardTitle style={{color:'#fff', height:'176px', background:'url(https://planetjon.ca/wp-content/uploads/2019/09/react-logo.png) center/cover'}}>
                           To-do list
                        </CardTitle>
                        <CardText>
                               This is a simple to-do list project. you can add or delete a thing that you are about to do.
                        </CardText>
                        <CardActions border>
                           <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{color:"#fff"}}>
                            <IconButton name='share'/>
                        </CardMenu>
                   </Card>

                   <Card shadow={5} style={{minWidth:'450', margin:"auto"}}>
                       <CardTitle style={{color:'#fff', height:'176px', background:'url(https://planetjon.ca/wp-content/uploads/2019/09/react-logo.png) center/cover'}}>
                           Project #3
                        </CardTitle>
                        <CardText>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                           <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{color:"#fff"}}>
                            <IconButton name='share'/>
                        </CardMenu>
                   </Card>
               </div>
            )
        }
         else if (activeTab===1){
            return(
            <div>
                <h1>This is Python</h1>
            </div>
            )
        } 
        else if (activeTab===2){
            return(
            <div>
                <h1>This is SAS/SQL</h1>
            </div>
            )
        } 
        else if (activeTab===3){
            return(
            <div>
                <h1>This is Tableau</h1>
            </div>
            )
        }
        
    };

  

      
    return(
        <div className='category-tabs'>
            <Tabs activeTab = {activeTab} onChange={(tabId)=>SetactiveTab(tabId)} ripple>
                <Tab>React</Tab>
                <Tab>Python</Tab>
                <Tab>SAS/SQL</Tab>
                <Tab>Tableau</Tab>
            </Tabs>

            <Grid>
                <Cell col={12}>
                    <div className='content'>
                    {toggleCategories()}
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default Projects;