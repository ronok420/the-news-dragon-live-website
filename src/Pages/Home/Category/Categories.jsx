import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleCategory from '../SingleCategory/SingleCategory';

const Categories = () => {
    const {id} =useParams();
    const categoryNews =useLoaderData();
    return (
        <div>
           {id > 0 &&
            <h2>this news  category {categoryNews.length} </h2>
            }
            {
                categoryNews.map(sNews => <SingleCategory news={sNews} key={sNews._id}
                ></SingleCategory>)
            }

        </div>
    );
};

export default Categories;