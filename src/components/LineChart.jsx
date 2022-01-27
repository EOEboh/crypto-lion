import React from 'react';

import { Line } from 'react-chartjs-2';
import { Col, Row , Typography } from 'antd';

const { Title } = Typography;

function LineChart({ coinHistory, currentPrice, coinName }) {
    const coinPrice = [];
    const coinTimeStamp = [];

    for(let i; i < coinHistory?.data?.history?.length; i+= 1){
        coinPrice.push(coinHistory.data.history[i].price)
        coinTimeStamp.push( new Date(coinHistory.data.history[i].timestamp).toLocaleDateString())
    }

    //creating data and options object in chartjs
    const data = {
        labels: coinTimeStamp,
        datasets: [
            {
                label: 'Price in US Dollars',
                data: coinPrice,
                fill: false,
                backgroundColor: '#808080',
                borderColor: '#0071bd'
            }
        ]
    } 

    const options = {
        scales:{
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }



  return (
  <>
    <Row className='chart-header'>
        <Title level={2} className='chart-title'>
            {coinName} Price Chart 
        </Title>
        <Col className='price-container'>
            <Title level={5} className='price-change'>{coinHistory?.data?.change}%</Title>
            <Title level={5} className='current-price'>Current {coinName}Price: ${currentPrice}</Title>
        </Col>
    </Row>
    <Line data={data} options={options} />
  </>
  );
}

export default LineChart;
