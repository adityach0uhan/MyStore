import React from 'react'
import './styles/Cards.css'


const Cards = ({ productData }) => {
    // {
    //     productData.map((currentElement) => {
    //         return currentElement.index;
    //     })
    // }
    return (
        
        <>
          
            <div className='Main-Card-Container' >
                <div className='Card-image'> <img src="" alt="IMG" /></div>
                <h5>hbhjbj</h5>
                <h5>Title</h5>
                <p>discription</p>
                <p>price</p>
                <p>rating</p>
            </div >
        </>
    )
}

export default Cards