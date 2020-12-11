import React from 'react';

import './Form.css';

function Form () {
    return (
        <ul>
            <h1>Contact Us</h1>
            <br/>

        <form action="action_page.php"/>

        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
    
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
    
        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Your email address.."/>

        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
    
        <input type="submit" value="Submit"/>
    
</ul>
    )
}

export default Form;