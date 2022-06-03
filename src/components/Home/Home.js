import React from 'react';
import BannerHome from '../BannerHome/BannerHome';
import HomeExplore from '../HomeExplore/HomeExplore';
import HomeOutCome from '../HomeOutCome/HomeOutCome';
import HomeSevices from '../HomeServices/HomeSevices';
import TakeNextStep from '../TakeNextStep/TakeNextStep';

const Home = () => {
    return (
        <main>
            <BannerHome></BannerHome>
            <HomeOutCome></HomeOutCome>
            <HomeSevices></HomeSevices>
            <HomeExplore></HomeExplore>
            <TakeNextStep></TakeNextStep>
        </main>
    );
};

export default Home;