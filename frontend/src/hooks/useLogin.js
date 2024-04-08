import React from 'react';
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import toast from "react-hot-toast";


const useLogin = () => {
    const [loading, setloading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (username, password) => {
        const success = handleInputError(username, password);
        if (!success) {
            return;
        }
        setloading(true);
        try {
            const res = await fetch("http://10.1.75.44:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username ,password }),
                credentials: "include",
            })
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            if (!res.ok) {
                throw new Error(data.message);
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setloading(false);

        }
    }
    return { loading, login }
}

export default useLogin;

function handleInputError(username, password) {
    if (!username || !password) {
        toast.error('Please fill all the fields');
        return false;
    }
    
    return true;

}