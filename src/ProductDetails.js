import React from 'react';
import classes from './productdetails.module.css';
const ProductDetails=(props)=>{
  const colorOptions=props.data.colorOptions.map((item,pos)=>{
    const classArray=[classes.chooseimg];
    if(pos===props.currentImagePos){
      classArray.push(classes.selectedcolor);
    }
    return(
      <img key={pos} className={classArray.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={()=>props.colorClick(pos)}/>
    );
  })

  const featureList=props.data.featureList.map((item,pos)=>{
    const classArray=[classes.feature];
    if(pos===props.currentFeature){
      classArray.push(classes.selectedfeature);
    }
    return(
      <button key={pos} onClick={()=>props.featureClick(pos)} className={classArray.join(' ')}>{item}</button>
    );
  })

  return (
    <div className={classes.productdata}>
      <h1>{props.data.title}</h1>
      <p>{props.data.description}</p>
      <h3>Select Color</h3>
      <div className={classes.selectcolor}>
        {colorOptions}
      </div>
      <h3>Features</h3>
      <div>
        {featureList}
      </div>
      <h3>Price</h3>
      <div>
      <span class={classes.price}>
      ₹ {props.data.price}
      </span>
      <span class={classes.oldprice}>
      ₹ {props.data.oldprice}
      </span>
      </div>
      <button className={classes.primary}>Buy Now</button>
    </div>
  );
}

export default ProductDetails;
