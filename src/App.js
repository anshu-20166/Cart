import React from 'react';
import CartItem  from './CartItem';
import Navbar  from './Navbar';
import Cart from './Cart';
import * as firebase from 'firebase';
class  App extends React.Component {
  constructor()
  {
      super();
      this.state={
          products:[],
          loading:true
      } 
      this.db=firebase.firestore();
  }
  componentDidMount  ()
      {
     this.db
           .collection('products')
          .orderBy('price')
           .onSnapshot((snapshot)=>{
             console.log(snapshot);
             snapshot.docs.map((doc)=>{
             console.log(doc.data())
           });
           const products=snapshot.docs.map((doc)=>{
             const data=doc.data();
             data['id']=doc.id;
             return data;
           })
           this.setState({
             products,
             loading:false
           })
           })
      }
      handleIncreaseQuantity=(product)=>{
        
        const{products}=this.state;
        const index=products.indexOf(product);
        const docRef=this.db.collection('products').doc(products[index].id);
        docRef
        .update({
          qty:products[index].qty+1
        })
        .then(()=>{
          console.log("updated successfully");
        })
        .catch((error)=>{
          console.log('Error:',error);
        })
  }
  handleDecreaseQuantity=(product)=>{
   
    const{products}=this.state;
    const index=products.indexOf(product);
    const docRef=this.db.collection('products').doc(products[index].id);
    if(products[index].qty===0)
    {
        return;
    }
    docRef
    .update({
      qty:products[index].qty-1
    })
    .then(()=>{
      console.log("updated successfully");
    })
    .catch((error)=>{
      console.log('Error:',error);
    })
}
handleDeleteProduct=(id)=>{
  const{products}=this.state;
  const docRef=this.db.collection('products').doc(id);
  docRef
       .delete()
       .then(()=>{
         console.log('delete successfully')
       })
       .catch((error)=>{
         console.log('error:',error);
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
    if(product.qty>0){
    cartTotal=cartTotal+product.qty*product.price
    }
    return '';
  })
  return cartTotal;
}
addProduct=()=>
{
  this.db
  .collection('products')
  .add({
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9geqa_tNaFa9bZmnnkqPo0b2NqnVoql0mhg&usqp=CAU',
    price:900,
    qty:3,
    title:'washing machine'
  })
  .then((docRef)=>{
    console.log('product has been added',docRef)
  })
  .catch((error)=>{
    console.log('Error:',error);
  })
}
  render(){
    const {products,loading}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        
        <Cart
        products={products }
        onIncreaseQuantity={this. handleIncreaseQuantity}
        onDecreaseQuantity={this. handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
        />
        {
          loading && <h2>Loading Products...</h2>
        }
        <div style={{padding:10,fontSize:20}}>TOTAL:{this.getCartTotal()}</div>
      </div>   
  );
}
}

export default App;
