// src/Home.jsx

import React from 'react';

const styles = {
  Card: {
    top: '280px',
    left: '48px',
    width: '318px',
    height: '477px',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    boxShadow: '0px 2px 10px rgba(3,3,3,0.1)',
  },
  Card1: {
    top: '300px',
    left: '98px',
    width: '318px',
    height: '477px',
    marginLeft: '50px',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    boxShadow: '0px 2px 10px rgba(3,3,3,0.1)',
  },
  Card2: {
    top: '300px',
    left: '98px',
    width: '318px',
    height: '477px',
    marginLeft: '50px',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    boxShadow: '0px 2px 10px rgba(3,3,3,0.1)',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  Text: {
    color: '#080a0b',
    fontSize: '20px',
    fontFamily: 'Roboto',
    fontWeight: 700,
    lineHeight: '24px',
    textAlign: 'center',
    marginTop: '100px',
    
  },

  ImageContainer: {
    marginLeft: '16px',
   marginTop: '16px',
    width: '286px',
    height: '272px',
    borderRadius: '24px',
    backgroundImage: 'url(./image.jpeg)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  text: 'Study Materials',
  image: 'https://assets.api.uizard.io/api/cdn/stream/bfcf191b-591f-4915-8a4a-4c2652bda4b5.png',

};


const Card = (props) => {
  return (
    <div style={styles.container}>
    <div style={styles.Card}>
      {props.children}

      <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />

      <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>

     
      
    </div>
    <div style={styles.Card1}>
      {props.children}

      <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />

      <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
      
    </div>
    <div style={styles.Card2}>
      {props.children}

      <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />

      <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
      
    </div>

    </div>
    
  );
};

export default Card;


