import React, { useEffect, useState } from 'react';
import "./PriceCart.css";
import SinglePriceCart from './SinglePriceCart';

const PriceCaer = () => {
    const [cartsData, setCartData] = useState([]);

    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setCartData(data))
    }, [])


    return (
        <div className='w-11/12 my-24 mx-auto justify-center grid md:grid-cols-2 lg:grid-cols-3 gap-5'>

            {
                cartsData.map(data => <SinglePriceCart
                    key={data.id}
                    data={data}

                ></SinglePriceCart>)
            }

        </div>
    );
};

export default PriceCaer;