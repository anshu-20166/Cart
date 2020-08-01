import React from 'react';
import CartItem  from './CartItem';
import Navbar  from './Navbar';
import Cart from './Cart';
class  App extends React.Component {
  constructor()
  {
      super();
      this.state={
          products:[
              {
                  price:99,
                  title:'watch',
                  qty:1,
                  img:'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
                  id:1
              },
              {
                  price:999,
                  title:'mobile',
                  qty:1,
                  img:'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
                  id:2
              },
              {
                  price:99000,
                  title:'Laptop',
                  qty:1,
                  img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
                  id:3
              }
          ]
      }
      //this.testing();
   //   this.increaseQuantity=this.increaseQuantity.bind(this);
     
  }
  handleIncreaseQuantity=(product)=>{
           console.log("heyy increase product",product);
           const{products}=this.state;
           const index=products.indexOf(product);
           products[index].qty+=1;
           this.setState({
               products:products
           }) 
  }
  handleDecreaseQuantity=(product)=>{
      console.log("heyy increase product",product);
      const{products}=this.state;
      const index=products.indexOf(product);
      if(products[index].qty==0)
      {
          return;
      }
      products[index].qty-=1;
      
      this.setState({
          products:products
      }) 
}
handleDeleteProduct=(id)=>{
  const{products}=this.state;
  const items=products.filter((item)=>item.id!==id);
  this.setState({
      products:items
  })
}
getCartCount=()=>{
  const {products}=this.state;
  let count=0;
  products.forEach((product)=>{
    count+=product.qty;
  })
  return count;
}
getCartTotal=()=>{
  const{products}=this.state;
  let cartTotal=0;
  products.map((product)=>{
    cartTotal=cartTotal+product.qty*product.price
  })
  return cartTotal;
}
  render(){
    const {products}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
        products={products }
        onIncreaseQuantity={this. handleIncreaseQuantity}
        onDecreaseQuantity={this. handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{padding:10,fontSize:20}}>TOTAL:{this.getCartTotal()}</div>
      </div>   
  );
}
}

export default App;
