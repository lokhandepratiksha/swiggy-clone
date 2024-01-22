import React from 'react';
class UserClass extends React.Component {

    constructor(props) {
      super(props)
      
      this.state = {
       userInfo : {
          name:"dummy",
          login:"dummy location",
          contact: "dummy contact",
          avatar_url : "dummy/avatar.png",
       },
      }
    
    }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/plokhande-kc");
    const json = await data.json();
   
    this.setState({
        userInfo : json,
    })
    console.log(json);

   }

   componentDidUpdate(){
    console.log("componenetDidUpdate");
   }

   componentWillUnmount(){
    console.log("ComponentwillUnmount");
   }

    render() {

        const {name, login, contact, avatar_url} = this.state.userInfo;
        console.log(this.props.name +"child render");
        return (
            <div className='usercard'>
                <img src={avatar_url}/>
              <h3>Name : {name}</h3>
              <p>login : {login}</p>
              <p>Contcat Info : {contact}</p>
            </div>
        )
    }

}

export default UserClass;