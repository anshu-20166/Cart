import React from 'react';
const  CartItem = (props) => {
    const {price,title,qty}=props.product;
    const{product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props;
    return(
            <div className="cart-item">
               
                <div className="left-block">
                 <img style={styles.image} src={product.img}/>
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
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;