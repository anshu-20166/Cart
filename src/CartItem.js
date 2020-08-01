import React from 'react';
class CartItem extends React.Component{
    increaseQuantity=()=>
    {
       // console.log("increase",this.state);
        //setstate form one
        // this.setState({
        //     qty:this.state.qty+1
        // });
        //setstate form 2
        this.setState((prevState)=>{
            return{
                qty:prevState.qty+1
            }
        })
        
    }
    decreaseQuantity=()=>
    {
       // console.log("decrease",this.state);
        //setstate form one
        // this.setState({
        //     qty:this.state.qty+1
        // });
        //setstate form 2
        this.setState((prevState)=>{
            return{
                qty:prevState.qty-1
            }
        })
    }
  
    render()
    {
        console.log('this.props',this.props);
        const {price,title,qty}=this.props.product;
        const{product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=this.props;
        return(
            <div className="cart-item">
                {/*{this.props.jsx}*/}
                <div className="left-block">
                 <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:20}}>{title}</div>
                    <div style={{color:'#777'}}>price:{price}</div>
                    <div style={{color:'#777'}}>qty:{qty}</div>
                    <div className="cart-item-actions">
                      <img 
                      alt=""
                      className="action-icons"
                      src="https://image.flaticon.com/icons/svg/748/748113.svg"
                      onClick={()=>onIncreaseQuantity(product)}
                      />
                      <img
                       alt="" 
                       className="action-icons" 
                       src="https://image.flaticon.com/icons/svg/864/864373.svg" 
                       onClick={()=>onDecreaseQuantity(product)}
                       />
                      <img
                       alt=""
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
                        onClick={()=>onDeleteProduct(product.id)}
                        />
                    </div>

                </div>
            </div>
        )
    }
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;