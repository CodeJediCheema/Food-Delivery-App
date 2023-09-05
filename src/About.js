import UserClass from "./UserClass";
import { Component } from "react"; // Another method to use it






class About extends Component {
    constructor(props){
        super(props);
        
    }


    
    componentDidMount(){ 
       
    }

    render(){
        
        return(
            <div className="bg-gray-100 p-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">About page</h1>
            <p className="text-xl font-semibold mb-4">Passionate front-end developer skilled in HTML, CSS, and JavaScript.
             I specialize in creating captivating user experiences and pixel-perfect interfaces.
              Proficient in React, I thrive on building dynamic and responsive websites.
               Let's collaborate on delivering exceptional web solutions that combine functionality and aesthetics.</p>
            <UserClass name="Gagan Cheema" location="Surya enclave" />
          </div>
        )
        
    }
}


export default About;