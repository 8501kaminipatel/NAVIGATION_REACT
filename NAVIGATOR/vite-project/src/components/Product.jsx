import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Product.css'
import { Link } from 'react-router-dom';

const Product = () => {
    const [data, setdata] = useState([]);

    const Fetchdata = () => {
        axios.get(' http://localhost:3000/product')
            .then((response) =>{
                console.log(response.data);
                setdata(response.data)
            }).catch((err)=>console.log(err))
    }

    useEffect(() => {
        Fetchdata();
    }, [])

    return (

        <>
          <div className="card-container" style={{display:"flex",width:"90%",flexWrap:"wrap",justifyContent:"space-between"}}>
            {data.map((post) => {
                return (
                   
                    <div className="post-card" key={post.id}>
                        <Link to={`/project/${post.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                        <img src={post.image}/>
                        </Link>
                        <h2 className="post-title">{post.title}</h2>
                        <h2 className="post-price">{post.price}</h2>
                        <h2 className="post-category">{post.category}</h2>
                        <p className="post-description">{post.description}</p>

                  
                </div>
                );
            })}
            </div>

        </>
    )

}

export default Product