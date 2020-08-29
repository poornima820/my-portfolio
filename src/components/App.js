import React,{Component} from'react';
import Projects from './Projects'
import SocialProfiles from './socialProfiles';
import profile from '../assets/profile.jpg';
import Title from '../Title';


class App extends Component {
    constructor(){
        super();
        this.state={displayBio:false};
        console.log("component this",this);
        this.toggleDisplayBio=this.toggleDisplayBio.bind(this);
        
    }
    
    toggleDisplayBio(){
        this.setState({displayBio:!this.state.displayBio});
    }
    render(){
        console.log('hi');
        return(
            <div>
                
                <img src={profile} alt='profile' className='profile' />
                <h1>Hello!!</h1>
                <p>My name is Poornima</p>
                 <Title />
                <p>I am always looking forward to working on meaningful projects</p>
                {
                    this.state.displayBio?(
                        <div>
                            <p>I live in Bellevue, and code everyday</p>
                            <p>My favorite languages are Java and Javascript, and I think React.js is awesome</p>
                            <p>Besides coding, I love cooking!</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) :(
                    <div>
                        <button onClick={this.toggleDisplayBio}>Read more</button>
                    </div>)
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
                
            </div>
        )
    }
}

const AppWithHeader=()=>{
    return(
        <Header Component={App}/>
    )
}

export default App;