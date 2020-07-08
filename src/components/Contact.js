import React,{Component} from 'react';
import {Cell, Grid, List, ListItem, ListItemContent} from 'react-mdl';


const Contact=()=>{
    return(
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Simian Feng</h2>
                    <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                     alt="avatar" style={{height:'250px' }}/>
                     <p style={{width:"75%", margin:'auto', paddingTop:"1em"}}>
                         It is a long established fact that a reader
                          will be distracted by the readable content 
                          of a page when looking at its layout. The 
                          point of using Lorem Ipsum is that it has a 
                          more-or-less normal distribution of letters, 
                          as opposed to using 'Content here, content 
                          here', making it look like readable English.
                         </p>
                </Cell>
                <Cell col={6}>
                    <h2> Contact me</h2>
                    <hr/>
                    <div className="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent style={{fontFamily:'Anton', fontSize:'30px'}}>
                                <i className='fa fa-envelope' aria-hidden="true"/>
                                simonfeng2011@gmail.com
                            
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontFamily:'Anton', fontSize:'30px'}}>
                            <i className='fa fa-phone-square' aria-hidden="true"/>
                                (647)289-6866
            
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontFamily:'Anton', fontSize:'30px'}}>
                            <i className='fa fa-linkedin' aria-hidden="true"/>
                            <a href="https://linkedin.com/in/simonfeng-a8a3b6187">My linkedin</a> 
                        
                            </ListItemContent>
                        </ListItem>
                    </List>
                    </div>

                </Cell>
            </Grid>
        </div>
    )
}

export default Contact;