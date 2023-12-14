import React from 'react';
import Layout from 'layouts/Main';

const ContactPage = () => {
  const styles = {
    background: 'linear-gradient(90deg, rgba(165,233,234,1) 29%, rgba(96,189,158,1) 53%, rgba(69,130,255,1) 88%)',
    padding: '20px',
    color: '#fff',
  };

  const roundPictureStyles = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    overflow: 'hidden',
    marginBottom: '20px',
  };

  const container = {
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '4rem',
  };
  
  const imageContainer = {
    position: 'relative',
    width: '150px',
    height: '150px',
    margin: '0 auto',
    marginBottom: '1.5rem',
  };

  const imageOverlay = {
    content: '',
    width: '100%',
    height: '100%',
    background: 'yellow',
    position: 'absolute',
    top: '-0.35rem',
    left: '-0.9rem',
    borderRadius: '50%',
    zIndex: '-1', 
  };
  
  const textContainer = {
    flex: 1,
  };
  
  const imageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'center',
  };
  

  const persons = [
    {
      name: 'Alix Marian Gonzaga',
      image: 'https://i.ibb.co/YQL1cWN/361596424-641508311249451-4198370859616950158-n.jpg',
      address: 'Tisa, Cebu City',
      email: 'alixmarian.gonzaga@gmail.com',
      phone: '(0912) 3456789',
    },
    {
      name: 'Mariane Rosario Historia',
      image: 'https://i.ibb.co/JRvH6Fs/322678286-548285876965755-6039599423561599522-n.jpg',
      address: 'Babag, Lapu-Lapu City',
      email: 'marianehistoria@gmail.com',
      phone: '(0912) 3456789',
    },
    {
      name: 'Ivan Uriel Sejismundo',
      image: 'https://i.ibb.co/hM652xz/358327734-306743628362976-1497408064101807574-n.jpg',
      address: 'Talisay City',
      email: 'ivansejismundo@gmail.com',
      phone: '(0912) 3456789',
    },
  ];

  return (
    <Layout>
      <div style={styles}>
        <h1>Contact Us</h1>
        <div style={container}>
        {persons.map((person, index) => (
          <div key={index} style={container}>
            <div style={imageContainer}>
              <div style={imageOverlay}></div>
              <img src={person.image} alt={`${person.name} Profile`} style={imageStyle} />
            </div>
            <div style={textContainer}>
                <h2>{person.name}</h2>
                <h3>🏡Address</h3>
                <p>{person.address}</p>
                <h3>📧Email</h3>
                <p>{person.email}</p>
                <h3>☎️Phone</h3>
                <p>{person.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
