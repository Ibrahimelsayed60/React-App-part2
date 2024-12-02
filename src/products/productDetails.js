import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
export default function ProductDetails(props)
{
    const location = useLocation();
    const params = useParams();

    return (
        <div>
            <h1>Product Details {params.id}</h1>
        </div>
    );
}