import React,{Component} from 'react';
class Leftbar extends Component{
    constructor(props){
        super(props);
        this.state={
             pagename:"sidebar"
        }
    }
    sendDatatoParent=()=>{
        this.props.sendDatatoParent(this.state.pagename)
    }
    render(){
        return(
            <div>content from 
                {this.state.pagename}
            </div>
        )
    }
}
export default Leftbar;