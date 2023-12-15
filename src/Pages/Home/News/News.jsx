import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const singleNews = useLoaderData();
    const { _id, category_id,title, details, image_url, author, rating, total_view } = singleNews;

    return (
        <Card className='mt-4'>
            <Card.Img variant="top" src={image_url} className='mb-4'/>
            <Card.Body className='mb-3'>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>    
                    <Button variant="danger "><FaArrowLeft/>All News in this category</Button>

                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;