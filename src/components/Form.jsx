import React from 'react';

function Form() {
return (<div>
        <h1>Create a New Account</h1>
        <input type="text" placeHolder="User Full Name" />
        <input type="text" placeHolder="Email" />
        <input type="text" placeHolder="Password" />
        <input type="text" placeHolder="Confirm Password" />
        <button>Create an Account</button>
    </div>);
}

export default Form;
