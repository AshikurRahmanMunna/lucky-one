import React from 'react';

const Questions = () => {
    return (
        <div className='mt-5 container'>
            <div>
                <h1>Difference between Props and State</h1>
                <p>Props is a object that is passed from parent component to child component. We can send anything or function by props. We can't send props from child to parent component. We can send dynamic data by props. 
                State is the websites current state. if we interact anything we will see changes on website. This is the websites state. We can change anything on website by state. Without state we can't change websites anything. We can't interact as well as. Props are external and controlled by rendering the component. And props is internal and controlled by the component. Props are read only. And State is asynchronous. And state stores the state data. State gives us two elements. One is state and another is a function to set the state.
                </p>
            </div>
            <div>
                <h1>How does useState Works</h1>
                <p>useState is a ReactJs hook. useState have a function to update state value. We have to give a initial value in useState. This will be the default value. In the case of string value we have to give an empty string. In other case like object or array we have to give empty object or array. after setting the state it returns us a variable with the current state. And it gives us another function. This function is used to update state value. Without useSate we can't update the state of the website. We can change anything on website by state. Without state we can't change websites anything. We can't interact as well as. UseSate works like a hook. And it helps ReactJs to Update state. because ReactJs is a library for building user interface. So it is not made to interact the website.</p>
            </div>
        </div>
    );
};

export default Questions;