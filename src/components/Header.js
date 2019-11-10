import React,{Component} from 'react';
import {connect} from 'react-redux';
const logo = require('../assets/images/logo.png'); 

const mapStateToProps = (state) => {
    return {
      ftitle: state.titleReducer.ftitle
    };
  };
class Header extends Component{
    constructor(props){
        super(props);
        this.state={} 
        
    }      
   
    render(){
        console.log(this.props)
        return(
            <div className="container">
            <div className="page-header-bg  row">
             <div className="col-sm-3"><img src={logo}  alt="logo" title="ExQ"/></div>   
             <div className="col-sm-9"></div>         
          </div>

          <div className="page-toppanel-bg">
					<h4 className="panel-title">
                        <i className="icon-title_PROFILE position-left text-white font-size-25 m-l-15"></i>
                        <span className="text-semibold">{this.props.ftitle}</span></h4>
				</div>
      
        </div>
        );
    }
}
export default connect(mapStateToProps, null)(Header);