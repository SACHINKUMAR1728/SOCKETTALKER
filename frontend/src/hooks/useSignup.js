import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {

    const [loading, setLoading] = useState(false);
    const {authUser, setAuthUser} = useAuthContext();
    const signup = async ({ fullname, username, password, confirm, gender }) => {
        const success = handleInputError({ fullname, username, password, confirm, gender });
        if (!success) {
            return;
        }
        setLoading(true);
        try {
            const res = await fetch('http://localhost:8080/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fullname, username, password, confirm, gender }),
                credentials: 'include'

            });
           
            const data = await res.json();
            console.log(data);
            if (!res.ok) {
                throw new Error(data.message);
            }
            //local storage
            localStorage.setItem('chat-user', JSON.stringify(data));
            //context
            setAuthUser(data);
            toast.success(data.message);

        } catch (error) {

            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }

    }
    return { signup, loading };
}
export default useSignup;

function handleInputError({ fullname, username, password, confirm, gender }) {
    if (!fullname || !username || !password || !confirm || !gender) {
        toast.error('Please fill all the fields');
        return false;
    }
    if (password !== confirm) {
        toast.error('Password does not match');
        return false;
    }

    if (password.length < 6) {
        toast.error('Password must be at least 6 characters');
        return false;
    }
    return true;

}