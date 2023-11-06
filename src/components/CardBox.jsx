import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import api from './api';
import ButtonModals from './ButtonModals';

function CardBox() {
    
    
  
   

    // const deletePost = async (id) => {
    //   const response =  await fetch(api + `/${id}`, {
    //         method: 'DELETE',
    //         headers: {'Content-Type': 'application/json'},
    //     })  
    //         if (response.status === 200) {
    //           // alert('Post deleted successfully')      
    //           console.log('Post deleted successfully'); 
    //         }
    //         else {
    //           console.log('Error deleting post');
    //         }
    // }
    




  return (
    <Row xs={1} md={2} sm={2} lg={3} xxl={4} className="g-4">
      {Array.from({ length: 7 }).map((_, idx) => (
        <Col key={idx}>
          <Card style={{ width: '18rem' }} className='m-auto'>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <ButtonModals/>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardBox;