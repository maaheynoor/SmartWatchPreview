import React,{Component} from 'react';
import classes from './App.module.css';
import ProductData from './ProductData.js'
import ProductPreview from './productpreview.js'
import ProductDetails from './ProductDetails.js'
class App extends Component {
  state={
    productData:ProductData,
    currentImagePos:0,
    currentFeature:0

  }
  colorClick=(pos)=>{
    this.setState({currentImagePos:pos});
  }
  featureClick=(pos)=>{
    this.setState({currentFeature:pos});
  }
  render(){
    return (
      <div className="App">
        <header className={classes.topbar}>
        Smart Watch
        </header>
        <div className={classes.main}>
          <div className={classes.productpreview}>
            <ProductPreview currentImage={this.state.productData.colorOptions[this.state.currentImagePos].imageUrl} currentFeature={this.state.currentFeature}/>
          </div>
          <div className={classes.productdata}>
            <ProductDetails data={this.state.productData} currentImagePos={this.state.currentImagePos} colorClick={this.colorClick} featureClick={this.featureClick} currentFeature={this.state.currentFeature}/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
