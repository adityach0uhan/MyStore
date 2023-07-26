import React from 'react'
import './styles/Cards.css'



const Cards = ({ productData }) => {
    return (
        <div className='Main-Container'>
            {
                productData.map((product) => {
                    return (
                        <>
                            {/* {console.log(product.id)} */}
                            <div key={product.id} className='Card-Container' >
                        <h5> { product.title }</h5 >
                        <h5>{product.brand}</h5>
                        <p>{product.discountPercentage}</p>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                         </div >
                    </>
                    )
                    
                  

                })
            }
        </div>
    )
}

export default Cards