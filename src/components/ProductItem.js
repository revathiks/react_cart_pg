import React ,{Component} from 'react';
import AddButton from './Addbtn';
import RemoveButton from './Removebtn'
//var apiProductList="http://172.16.5.51/react_services/api/products.php";
const imgPath="http://172.16.5.51/react_services/uploads/products";
class ProductItem extends Component{
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
        
    }   
  
    render(){ 
        
        //const thisItemCart=this.props.cart.filter(item => item.id===this.props.product.id)[0]
         //console.log(this.props) 
         //console.log(this.props.cartItem)      
        return(            
               <div className="col-md-3">
                   <h5>{this.props.product.name}</h5>
                   <div><img alt={this.props.product.name} width={150} height={150} src={imgPath+`/${this.props.product.thumb}`}/></div>
                   <div>Rs {this.props.product.price}</div>
                   <div>
                    <AddButton 
                    cartItem={this.props.cartItem} 
                   addtoCart={this.props.addtoCart}
                     product={this.props.product}
                 />
                 {
                    this.props.cartItem
                    ?
                    <RemoveButton 
                    cartItem={this.props.cartItem} 
                    removeFromCart={this.props.removeFromCart}
                     product={this.props.product}
                 />
                 :''
                 }
                       </div>
               </div>
        );
    }
}
export default ProductItem;