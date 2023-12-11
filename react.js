import React from 'react';

const PriceCard = ({ title, price, features }) => {
  return (
    <div style={styles.card}>
      <h2>{title}</h2>
      <p style={styles.price}>${price}/month</p>
      <ul style={styles.features}>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button style={styles.button}>Subscribe</button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '200px',
    margin: '16px',
  },
  blueCard: {
    background: 'blue',
    color: 'white',
  },
  price: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '8px 0',
  },
  features: {
    listStyleType: 'none',
    padding: '0',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

const App = () => {
  const priceCardsData = [
    {
      title: 'FREE',
      price: 19.99,
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      title: 'PLUS',
      price: 39.99,
      features: ['Feature A', 'Feature B', 'Feature C'],
    },
    {
      title: 'PRO',
      price: 59.99,
      features: ['Premium Feature 1', 'Premium Feature 2', 'Premium Feature 3'],
    },
  ];

  return (
    <div>
      <h1>HELLO! 
		WELCOME TO OUR PAGE
	  </h1>
      <div style={styles.blueCard}>
        {priceCardsData.map((data, index) => (
          <PriceCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default App;
