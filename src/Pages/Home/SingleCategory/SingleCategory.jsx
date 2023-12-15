import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookmark, FaShareAlt, FaEye } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const SingleCategory = ({ news }) => {
  const { _id, title, details, image_url, author, rating, total_view } = news;

  return (
    <Card className=" mt-4 mb-4">
      <Card.Header className='d-flex align-items-center'>
        <Image style={{ height: "50px" }} src={author.img} roundedCircle />
        <div className='ps-4 flex-grow-1'>
          <h4>{author.name}</h4>
          <p>{author.published_date}</p>
        </div>
        <div>
          <FaBookmark style={{ fontSize: '24px' }} />
          <FaShareAlt style={{ fontSize: '24px' }} />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? <>{details}.........<Link>read more</Link></> : <>{details.slice(0, 250)}........<Link>read more</Link></>}
        </Card.Text>

      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className='flex-grow-1'>

          {/* <Rating
            emptySymbol={<img src="assets/images/star-empty.png" className="icon" />}
            fullSymbol={<img src="assets/images/star-full.png" className="icon" />}
          /> */}
          <span>{rating.number}</span>
        </div>

        <div>
          <FaEye />
          <span className='ps-2'>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default SingleCategory;