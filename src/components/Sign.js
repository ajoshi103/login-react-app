import React, { useState } from "react";

export const Sign = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
        
        // Validate name
        if (!name) {
            validationErrors.name = "Full name is required";
        }

        // Validate email
        if (!email) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = "Email address is invalid";
        }

        // Validate password
        if (!pass) {
            validationErrors.password = "Password is required";
        } else if (pass.length < 6) {
            validationErrors.password = "Password must be at least 6 characters long";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            
            console.log(email);
            console.log(user is registered);
          
            setErrors({}); // Clear errors
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input 
                    value={name} 
                    name="name" 
                    onChange={(e) => setName(e.target.value)} 
                    id="name" 
                    placeholder="Full Name" 
                />
                {errors.name && <p className="error">{errors.name}</p>}
                
                <label htmlFor="email">Email</label>
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="youremail@gmail.com" 
                    id="email" 
                    name="email" 
                />
                {errors.email && <p className="error">{errors.email}</p>}
                
                <label htmlFor="password">Password</label>
                <input 
                    value={pass} 
                    onChange={(e) => setPass(e.target.value)} 
                    type="password" 
                    placeholder="********" 
                    id="password" 
                    name="password" 
                />
                {errors.password && <p className="error">{errors.password}</p>}
                
                <button type="submit " >Register</button>
            </form>
            {/* Button to switch to Login */}
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}
