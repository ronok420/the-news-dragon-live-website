import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:7000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error =>console.error(error))
    },[])
    return (
        <div className='mt-5'>
            <h4>All Category</h4>
            {
                categories.map(ct => <p key={ct.id} className='text-decoration-none'>
                    <Link to={`/category/${ct.id}`} className='p-4  text-secondary text-decoration-none'>{ct.name} </Link>
                </p>)

            }
        </div>
    );
};

export default LeftNav;