import React from 'react'
import './styles/Cards.css'



const Cards = ({ productData }) => {
    return (
        <div className='Main-Container'>
            {
                productData.map((product) => {
                    return (
                        <>
                            <div key={product.id} className='Card-Container' >
                                <div className='Card-Image-Container'><img src={product.images[0]} alt="img" /> </div>
                                <div className='Product-Details'>
                                    <p>Name of Product :{product.title}</p>
                                    <p>Brand :{product.brand}</p>
                                    <p>Discount% :{product.discountPercentage}</p>
                                    <p>Price : {product.price} $</p>
                                    <p>About Product:{product.description}</p>
                                </div>
                            </div >
                        </>
                    )


                })
            }
        </div>
    )
}

export default Cards