import React,{Component} from 'react';
import {Link } from "react-router-dom";
import {connect} from 'react-redux';
import { settitle } from '../store/action.js';

const mapStateToProps = (state) => {
  return {
    ftitle: state.titleReducer.ftitle
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    settitle: (title) => {
      dispatch( settitle(title))  
    }
  };
};

class Footer extends Component{
  /*constructor(props){
    super(props);
    
  }*/
    render(){     
        return (
             <div className="container footer">             
           <div className="text-center "> &nbsp;&nbsp;
               ExQ, LLC © 2019. &nbsp; 
               <Link to="/users" className="footer_links" onClick={()=>this.props.settitle('Users')}>Users</Link>
                &nbsp;|&nbsp; 
                <Link to="/register" className="footer_links" onClick={()=>this.props.settitle('Register')}>Register</Link>&nbsp;|&nbsp; 
                <Link to="/products" className="footer_links" onClick={()=>this.props.settitle('Products Listing')}>Products</Link>
               </div>
          </div>
        );
        }   
}
//export default Footer;
export default connect(mapStateToProps, mapDispatchToProps)(Footer);