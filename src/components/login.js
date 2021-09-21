import React from 'react';
import { Button, CardActions, CardActionArea,CardContent,Card} from '@material-ui/core';
import '../App.css'


const Login = () => {

    return (
        <div className="cardregister">
            <Card  sx={{ maxWidth:200}}>
                 
                <CardActionArea>
                <img className="photo" src="https://image.freepik.com/free-vector/piggy-bank-with-wallet-poster_98292-4184.jpg" alt="piggyda"></img>
                  <CardContent
                  margin-left="30%"
                  >
                   <h3 className="bachppan">
                    Bachppan Ka Gullak 
                   </h3> 
                   <div className="registerinput">
                   <label>Email</label>
                   <input id="forspace" type="Email" />
                   </div> 
                   <div className="registerinput">
                   <label>Password</label>   
                   <input id="forspaceone" type="Password" />
                   </div>         
                  </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="Medium" color="primary" Border="2px solid black">
                      Sign IN
                    </Button>   
                </CardActions>   
                
            </Card>   
               
        </div>
    )
}
export default Login ;
