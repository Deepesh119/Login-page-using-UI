import React from 'react';
import Card from '@material-ui/core/Card';
import { ButtonGroup,Button} from '@material-ui/core';
import {Link} from 'react-router-dom';



const Front = () => {
    return (
        <div className="ParentCard">
        <Card>
        
            <ButtonGroup variant="contained" aria-label="outlined primary button group" className="margin">
               <Button><Link to='/login'>Login</Link></Button>
               <Button><Link to='/register'>Register</Link></Button>
            </ButtonGroup>
             
            <h3 className="fonttype">India's First Money Saving App </h3> 
            <img id="image" src="https://tse1.mm.bing.net/th?id=OIP.RQp-qQ9bXoiMzg3NrnaA4gHaFP&pid=Api&P=0&w=300&h=300" alt="piggybhai"></img>             
        </Card>
        <h4 className="style"> About US</h4>   
          <h6 className="styleone">
              We are here to provide our customers facility regayrding sving there money and utilising it to accomplish what they have desired to buy for themself..Our motto is to encourage people to save money and also provide them perks and offers regarding various discount in Electonics-gadget,trip,Hotels,lodges and many more.    
          </h6>
            
        </div>
    )
}

export default Front;
