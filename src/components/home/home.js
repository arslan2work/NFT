import React from 'react';
import { useHistory } from 'react-router-dom';
import home from '../home.jpg';
import nft1 from '../download.jpg';
import nft2 from '../1.jpg';
import nft3 from '../2.jpg';

const Home = () => {
    window.loaded_web3 = false;

    const history = useHistory();
    const handleClick1 = () => {
        history.push('/explore');
    }
    const handleClick2 = () => {
        history.push('/mint');
    }

    return (

        <div className="home-body">
        
        <div className="row home-adj">
            <div className="col-sm-6" >
            <div className="card shadow-sm rounded-circle" style={{ height: '500px'}}>
                <div className="max-300">
                    <img alt="home" className="homeimage rounded-top" src={home} />
                </div>
                <div className="text-title">Featured NFT</div>
            </div>
            </div>

            <div className="col-sm-6 wrapper">
                <div className="heading-container">
                    <h2 className="text-light pt-5">Welcome to NFT Marketplace</h2>
                    <p className="text-secondary text-light" style={{ fontSize: '18px',lineHeight:2,wordSpacing:2}}>
                        Here you can buy and sell NFTs. As word spreads about the rise of Non-Fungible Tokens (NFTs), we’re fielding more and more questions from artists and creators looking to sell their work on the blockchain. Here’s how to turn your art into NFTs and list them for sale.
                    </p>
                </div>
            <div className="d-flex justify-content-end align-items-center align-self-end">
                <button type="button" onClick={handleClick1} className="btn head-title rounded-0 m-3">Explore NFTs</button>
                <button type="button" onClick={handleClick2} className="btn head-title rounded-0 m-3">Create NFTs</button>
            </div>
            </div>
            
        </div>
        <div className="row home-popular mt-5">
                <div className="mt-5">
                    <h1 className="text-center feature-head">Most Popular in the market.</h1>
                    <p className="text-center">the most unique and popular mft art that can be found here is the best<br/> in the worl im just looking ofr words.</p>
                </div>
                <div className="row mt-5">
                    <div class="card col-md-4" style={{width: '18rem', marginLeft: '60px'}}>
                        <img class="card-img-top" style={{height: '300px'}} src={nft1} alt="Card cap"/>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card col-md-4" style={{width: '18rem', marginLeft: '60px'}}>
                        <img class="card-img-top" style={{height: '300px'}} src={nft2} alt="Card cap"/>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card col-md-4" style={{width: '18rem', marginLeft: '60px'}}>
                        <img class="card-img-top" style={{height: '300px'}} src={nft3} alt="Card cap"/>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

            
            
        </div>
        </div>
    )
};

export default Home;
