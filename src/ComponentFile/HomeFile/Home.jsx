import React from 'react';
import "./Home.css";
import NaveBar from '../NaveBarFile/NaveBar';
import RowNav from '../RowNavFile/RowNav';
import PriceCaer from '../PriceCartFile/PriceCaer';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <NaveBar></NaveBar>
            {/* <RowNav></RowNav> */}
            <Banner></Banner>



            <PriceCaer></PriceCaer>

        </div>
    );
};

export default Home;