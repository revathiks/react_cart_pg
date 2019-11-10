import React ,{Component} from 'react';
import ProductItem from './ProductItem';
//import cartItemwithQuantity from '../store/Cartitem';
import {connect} from 'react-redux';
var apiProductList="http://localhost:8080/products";

const mapStateToProps = (state) => {
    return {
      cart: state.cart
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      addtoCart: (item) => {
        dispatch( {
            type:'ADD',
            payload:item
        })  
      },
      removeFromCart: (item) => {
        dispatch( {
            type:'REMOVE',
            payload:item
        })  
      },
    };
  };
class Products extends Component{
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    getProducts(){               
        /*const requestionOption={
            method:"GET"
        }*/
        fetch(apiProductList)
        .then((response)=>response.json())
        .then((responsedata)=>
        this.setState({products:responsedata})
        );
      
    }
    componentDidMount(){       
         this.getProducts();        
     }
    render(){  
      //console.log(this.props.cart)      
        return(
            <div className="row">
                 {this.state.products.map((product,i) =>   
                 <ProductItem key={product.id} 
                 product={product} 
                 addtoCart={this.props.addtoCart}
                 removeFromCart={this.props.removeFromCart}
                 cartItem={this.props.cart.filter(cartItem=>cartItem.id ===product.id)[0]}
                 test="reva"
                 />  )}
                

            </div>
        );
    }
}   
export default connect(mapStateToProps, mapDispatchToProps)(Products);