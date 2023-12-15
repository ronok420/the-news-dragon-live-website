import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const singleNews =useLoaderData();
    const { _id, title, details, image_url, author, rating, total_view } = singleNews;

    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default News;