import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './index.css'

const AutoComplete = () => {
    const [Products, setProducts] = useState([]);
    const [afterFilter, setAfterFilter] = useState([])

    const getAllProducts = async () => {
        const response = await axios(
            "https://fakestoreapi.com/products"
        );
        setProducts(response?.data);
    };

    const handleSearch = (e) => {
        let { value } = e.target
        if (value === '') {
            setAfterFilter([])
            return
        }
        // || item?.category.includes(value) 
        let afterFilterCopy = Products?.filter((item) => item?.category.toLowerCase().includes(value.toLowerCase()) || item?.title.toLowerCase().includes(value.toLowerCase()))
        setAfterFilter(afterFilterCopy)
        // setAfterFilter()
    }

    useEffect(() => {
        getAllProducts()
    }, []);

    return (
        <div style={{ width: '80%' }} className='auto-wrapper'>
            <input onChange={handleSearch} className="form-control" placeholder='Search for product' />
            {
                afterFilter?.map((item, i) => {
                    return (
                        <Link onClick={()=>{
                            setAfterFilter([])
                        }} to={'/product/' + item?.id} key={i}>
                            <div className='bg-white border d-flex justify-content-start align-items-center' style={{ paddingLeft: 10 }}>
                                <div style={{ width: 100 }}>
                                    <img className='image-avtar' src={item?.image} alt={item?.title} />
                                </div>
                                <div><span style={{ fontWeight: 'normal' }}>{item?.title}</span></div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default AutoComplete;