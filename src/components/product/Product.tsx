import React from 'react';
import './Product.css';
import { CarDetail } from '../../Models';

const Product:  React.FC<CarDetail> = (carDetail) => {
    return(
        <div className='prod-container'>
            <img className='prod-image' src={carDetail.photo}/>
            <h3 className='prod-title'></h3>
            <p className='prod-year'></p>
            <p className='prod-customs'></p>
            <p className='prod-location'></p>
        </div>
    )
}

export default Product;