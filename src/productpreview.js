import React from 'react';
import classes from './productpreview.module.css'

const ProductPreview=(props)=>{
  const hour=new Date().getHours()>9? new Date().getHours() : '0'+new Date().getHours()
  const minutes=new Date().getMinutes()>9? new Date().getMinutes() : '0'+new Date().getMinutes()
  return(
    <div className={classes.productpreview}>
      <img src={props.currentImage}/>
      {
        props.currentFeature===0 ?
        <div className={classes.featuredTime}>
          <p>{`${hour}:${minutes}`}</p>
        </div>
        :
        props.currentFeature===1 ?
        <div className={classes.featuredHeartRate}>
          <i className="fa fa-heartbeat" aria-hidden="true"></i>
          <p>78</p>
        </div>
        :
        props.currentFeature===2 ?
        <div className={classes.featuredCamera}>
          <i class="fa fa-camera" aria-hidden="true"></i>
        </div>
        :
        props.currentFeature===3 ?
        <div className={classes.featuredCall}>
          <p>Caller Name</p>
          <i class={['fa fa-phone',classes.decline].join(' ')} aria-hidden="true"></i>
          <i class={['fa fa-phone',classes.accept].join(' ')} aria-hidden="true"></i>
        </div>
        :
        <div className={classes.featuredFindPhone}>
          <i className={['fa fa-mobile',classes.mobile].join(' ')}  aria-hidden="true"></i>
          <i class={['fa fa-search',classes.search].join(' ')}  aria-hidden="true"></i>
          <p>Find Phone</p>
        </div>



      }
    </div>
  )

}

export default ProductPreview;
