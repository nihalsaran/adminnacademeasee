import React from 'react';

const styles = {
  Card1: {
    top: '212px',
    left: '471px',
    width: '905px',
    height: '232px',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    boxShadow: '0px 2px 10px rgba(3,3,3,0.1)',
  },
  Card2: {
    top: '212px',
    left: '471px',
    width: '905px',
    height: '232px',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    boxShadow: '0px 2px 10px rgba(3,3,3,0.1)',
    marginTop: '50px',
  },
  Card3: {
    top: '212px',
    left: '471px',
    width: '905px',
    height: '232px',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    boxShadow: '0px 2px 10px rgba(3,3,3,0.1)',
    marginTop: '50px',
  },
  container: {
    
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
};

const Card = (props) => {
  return (
    <div style={styles.container}>
    <div style={styles.Card1}>
      {props.children}
    </div>
    <div style={styles.Card2}>
      {props.children}
    </div>
    <div style={styles.Card3}>
      {props.children}
    </div>
    </div>
  );
};

export default Card;