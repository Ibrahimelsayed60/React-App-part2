import React from "react";
import axios from "axios";
import { useEffect } from "react";
export default function Products()
{
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            console.log(res);
        }).catch((error)=>{
            console.log(error);
        })
    },[]);

    return (
        <div>
            <h1>Products</h1>
        </div>
    );
}