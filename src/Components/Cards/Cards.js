import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Cards = (props) => {
     const {title, description, urlToImage, author, url} = props.article;
    return (
        <div>
            <Card style={{ width: '32rem' }}>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Author: {author}</Card.Text>
                    <Button style={{align: 'center'}} variant="primary"><a href={url} target='blank' className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Details</a></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cards;