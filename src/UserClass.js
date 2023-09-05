import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {  
            userInfo :{
                name: "dummy",
                location: "default"

            },
        };

        console.log(" Constructor called");
    }

   async componentDidMount(){
       
       const data = await fetch("https://api.github.com/users/CodeJediCheema");
       const json = await data.json();
       console.log(json)
       
       this.setState({userInfo: json});
  
       
    }

    componentDidUpdate(){
        // console.log("Component did update called")
    }

    componentWillUnmount(){
        // clearInterval(this.timer);
        // console.log("Component did unmounted called")
    }
    render(){
        const {name, location,login,avatar_url,bio} = this.state.userInfo;
        console.log(" Render Called");
        return(
            <div className="user-class bg-white shadow-md p-4 rounded-lg">
            <img
              src={avatar_url}
              alt="User Avatar"
              className="w-32 h-32 rounded-full mx-auto"
            />
            <h2 className="text-xl font-semibold mt-4">Name: {name}</h2>
            <p className="text-gray-600 mt-2">Bio: {bio}</p>
            <p className="text-gray-600 mt-2">Username: {login}</p>
            <p className="text-gray-600 mt-2">Location: {location}</p>
          </div>

        )
    }

}

export default UserClass;
