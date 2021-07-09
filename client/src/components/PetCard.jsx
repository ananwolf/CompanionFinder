import React from 'react';
import Image from 'react-bootstrap/Image';
import { Button, Accordion, Card } from 'react-bootstrap';
import parse from 'html-react-parser';

const PetCard = ({ animals }) => {
  return (
    <>
      {animals.map((animal) => (
        <div key={animal.id} className='card card-body mb-3'>
          <div className='row'>
            <div className='col-sm-6'>
              <h2>{animal.name}</h2>
              <p className='text-secondary'>
                {animal.breeds.primary} | {animal.age} | ID: {animal.id}
              </p>
              <p>
                {animal.contact.address.address1}&nbsp;
                {animal.contact.address.city},
                {animal.contact.address.state},&nbsp;
                {animal.contact.address.postcode} -&nbsp;
                {Math.floor(animal.distance)} miles away
              </p>
              <ul className='list-group'>
                <li className='list-group-item'>
                  <h4>{animal.name}'s Contact Info</h4>
                  <p className='text-secondary'>
                    Email:&nbsp;
                    <a href={`mailto:${animal.contact.email}`}>
                      {animal.contact.email
                        ? animal.contact.email
                        : 'No email address listed'}
                    </a>
                  </p>
                  <p className='text-secondary'>
                    Phone:&nbsp;
                    {animal.contact.phone
                      ? animal.contact.phone
                      : 'No phone number listed'}
                  </p>
                </li>
              </ul>
            </div>
            <div className='col-sm-6 d-flex justify-content-center'>
              <Image
                className='mt-2'
                src={
                  animal.primary_photo_cropped
                    ? animal.primary_photo_cropped.small
                    : 'https://peoplewithpets.com/wp-content/uploads/2019/11/people-with-pets-no-image-available.jpg'
                }
                alt='picture'
                roundedCircle
                fluid
              />
            </div>
          </div>
          <div className='mt-3'>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                    More About {animal.name}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey='0'>
                  <Card.Body>
                    <h4>{animal.name}'s Health Information</h4>
                    <p className='text-secondary'>Gender: {animal.gender}</p>
                    <p className='text-secondary'>
                      House Trained:&nbsp;
                      {animal.attributes.house_trained ? 'Yes' : 'No'}
                    </p>
                    <p className='text-secondary'>
                      Vaccinations Up To Date:&nbsp;
                      {animal.attributes.shots_current ? 'Yes' : 'No'}
                    </p>
                    <p className='text-secondary'>
                      Spayed/Neutered:&nbsp;
                      {animal.attributes.spayed_neutered ? 'Yes' : 'No'}
                    </p>
                    <p className='text-secondary'>
                      Special Needs:&nbsp;
                      {animal.attributes.special_needs ? 'Yes' : 'No'}
                    </p>
                    <hr />
                    <h4>Meet {animal.name}</h4>
                    <p className='text-secondary'>
                      {animal.description
                        ? animal.description
                        : 'No Description Available Yet'}
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      ))}
    </>
  );
};

export default PetCard;