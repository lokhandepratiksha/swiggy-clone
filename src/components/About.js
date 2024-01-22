import React, { Component } from 'react' ;
//import User from './User';
import UserClass from './UserClass';

class About extends Component {

    constructor(props){
    super(props);
   
    }

    componentDidMount(){
       
    }

    render(){
       
        return (
            <>
            <div>
                <h1>About Us page</h1>
                <h2>This in namaste react webs series</h2>
            </div>
            <div>
                <UserClass  name={'First'} location={"Nagpur"} contact={'pratikshalokhande@gmail.com'}/>
            </div>
            </>
        )
    }

}

export default About;