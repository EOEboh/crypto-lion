import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

// to get API data
import { useGetCryptosQuery } from '../services/cryptoApi';



const Cryptocurrencies = ({simplified}) => {
  // to make it show 10 on homepage
  const count = simplified ? 10 : 100;

  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  
  const [ cryptos, setCryptos ] = useState( cryptoList?.data?.coins);
  console.log(cryptoList);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(()=> {

    const filteredData = cryptoList?.data?.coins.filter((coin)=> coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

    setCryptos(filteredData);
  }, [cryptoList, searchTerm])

  if(isFetching) return '..fetching data';
  

return(
  <>
  {/* to make search input disappear on homepage */}
  {!simplified && (<div className='search-crypto'>
    <Input placeholder='Find a Cryptocurrency' onChange={(e)=> setSearchTerm(e.target.value)}/>

  </div>)}
  

    <Row gutter={[32, 32]} className='crypto-card-container'>
      {cryptos?.map((currency)=>(
        <Col sx={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
          <Link to={`/crypto/${currency.id}`}>
            <Card title={`${currency.rank}. ${currency.name}`} extra={<img className='crypto-image' src={currency.iconUrl} />} hoverable>
                <p> Price: ${millify(currency.price)}</p>
                <p> Market Cap: {millify(currency.price)}</p>
                <p> Daily Change: {millify(currency.price)}%</p>
                
            </Card>
          </Link>
        </Col>
      ))}
    </Row> 
  </>
  );
};

export default Cryptocurrencies;
