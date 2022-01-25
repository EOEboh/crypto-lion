import React from "react";
import { Routes, Route, Link, useParams } from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import './App.css';

import { Navbar, Homepage, Exchanges, Cryptocurrencies, News } from './components';



const CryptoDetails = () => {

  let { coinId } = useParams();
    return (<div>
      <h1>CRYPTO DETAILS</h1>
    </div>);
  };

const App = () => {
  return (
  <div>
      <div className='app'>
          <div className='navbar'>
            <Navbar />
          </div>
          <div className='main'>
            <Layout>
                <div className='routes'>
                    <Routes>  
                        <Route path='/' element={<Homepage />} />
                        <Route path='/exchanges' element={<Exchanges />} />

                        <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />

                        <Route path='crypto'>  
                        <Route path=':coinId' element={<CryptoDetails />} />
                        </Route>

                        <Route path='/news' element={<News />} />
                    </Routes>
                </div>
            </Layout>
          <div className='footer' level={5} style={{ color:'white', textAlign: 'center'}}>
              <Typography.Title>
                Crypto Lion <br/>
                All rights reserved &copy;
                </Typography.Title>
                <Space>
                  <Link to='/'>
                    Home
                  </Link>
                  <Link to='/cryptocurrencies'>
                    Cryptocurrencies
                  </Link>
                  <Link to='/exchanges'>
                    Exchanges
                  </Link>
                  <Link to='/news'>
                    News
                  </Link>
                </Space>
          </div>
          </div>
      </div>
  </div>);
};

export default App;
