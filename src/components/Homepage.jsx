import React from 'react';
import millify  from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import Loader from './Loader';

import { Cryptocurrencies, News } from '../components';

import { useGetCryptosQuery } from '../services/cryptoApi';

// to make it easier typing 'Title' instead of 'Typography'
const {Title} = Typography;


const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery(10);

  const CryptoStats = data?.data?.stats;

  // if the data is still fetching
  if(isFetching) return <Loader />

  return (
  <>
    <Title level={2} className='heading'>
      Global Crypto Stats
    </Title>
    <Row>
      <Col span={12}><Statistic title='Total Cryptocurrencies' value={CryptoStats.total}/> </Col>
      <Col span={12}><Statistic title='Total Excahnges' value={millify(CryptoStats.totalExchanges)}/></Col>
      <Col span={12}><Statistic title='Total Market Cap' value={millify(CryptoStats.totalMarketCap)}/></Col>
      <Col span={12}><Statistic title='Total 24hr Volume' value={millify(CryptoStats.total24hVolume)}/></Col>
      <Col span={12}><Statistic title='Total Markets' value={millify(CryptoStats.totalMarkets)}/></Col>
    </Row>
    <div className='home-heading-container'>
      <Title level={2} className='home-title'>Top 10 Cryptocurrencies</Title>
      <Title level={2} className='show-more'><Link to='/cryptocurrencies'> Show more </Link></Title>

    </div>
    <Cryptocurrencies simplified={true} />
    <div className='home-heading-container'>
      <Title level={2} className='home-title'>Latest Crypto News</Title>
      <Title level={3} className='show-more'><Link to='/news'>Show More</Link></Title>

    </div>
    <News simplified={true}/>
  </>
  );
};

export default Homepage;
