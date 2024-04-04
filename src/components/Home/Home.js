import './Home.css';
import React, { useEffect, useState } from 'react';
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import bitcoinImage from '../../assets/bitcoin-logo.png';

function Home() {
  const [data, setData] = useState([])
  const [coinData, setCoinData] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then(response => response.json())
      .then(data => {
        setData(data.data)
      })
      .catch(error => {
        console.error('Error fetching in Population data:', error);
      });

    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => response.json())
      .then(data => {
        const dataArray = Object.keys(data.bpi).map(key => data.bpi[key]);
        setCoinData(dataArray)
        setTimeout(() => {
          setloading(false)
        }, 500)

      })
      .catch(error => {
        console.error('Error fetching in Coin data:', error);
      });
  }, [])

  const convertToEur = (usdPrice) => {
    const priceInUsd = parseFloat(usdPrice);
    return (priceInUsd * 0.92).toFixed(2);
  };

  if (loading) {
    return (<div className="loader"></div>)
  }

  return (
    <div className='homeContainer'>
      <div className='barChart'>
        <Line
          data={{
            labels: data.map((data) => data.Year),
            datasets: [
              {
                label: "United States Population",
                data: data.map((data) => data.Population),
                backgroundColor: [
                  '#289C28'
                ],
                borderRadius: 3,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Revenue Source",
              },
            },
            responsive: true,
            maintainAspectRatio: false,
          }}
        />

      </div>
      <div className='cardsContainer'>
        {coinData && coinData.map(item => (
          <div className="card" key={item.symbol}>
            <div className="card-header">
              {item.description} ({item.code})
            </div>
            <div className="card-body">
              <div className='card-body-inner-div'>
                <div className="price">USD Price: {item.rate}$</div>
                <div className="price">EUR Price: {convertToEur(item.rate)}€</div>
              </div>
              <img src={bitcoinImage} alt="Bitcoin" className='bitcoinImg' />
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Home;
