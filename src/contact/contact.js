import React from "react";
import { useHistory } from "react-router-dom";

export default function Contact(props)
{

    const history = useHistory();
    const redirectToAbout = () => {
        // props.history.push('/about');
        history.push("/about")
    }

    return (
        <div>
            <h1>Contact us</h1>

            <button className="btn btn-primary" onClick={() => {redirectToAbout();}}>Go to about Us</button>
        </div>
    );
}