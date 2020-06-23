import React,{Component, useState} from 'react';
import {Tabs, Tab} from 'react-mdl';

const Projects=()=>{
    const [activeTab, SetactiveTab] = useState(0);

    const toggleCategories=()=>{
         if (activeTab===0){
            return(
               <div>
                   <h1>This is React</h1>
               </div>
            )
        } else if (activeTab===1){
            return(
            <div>
                <h1>This is Angular</h1>
            </div>
            )
        } else if (activeTab===2){
            return(
            <div>
                <h1>This is VueJS</h1>
            </div>
            )
        } else if (activeTab===3){
            return(
            <div>
                <h1>This is MongoDB</h1>
            </div>
            )
        }
        
    }
      
    return(
        <div className='category-tabs'>
            <Tabs activeTab = {activeTab} onChange={(tabId)=> SetactiveTab.tabId} ripple>
                <Tab>React</Tab>
                <Tab>Angular</Tab>
                <Tab>VueJS</Tab>
                <Tab>MongoDB</Tab>
            </Tabs>

            <section className='project-grid'>
                {toggleCategories()}
            </section>
        </div>
    )
}

export default Projects;