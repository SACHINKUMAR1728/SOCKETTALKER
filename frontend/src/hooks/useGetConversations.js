import { useState,useEffect } from 'react';
import toast from 'react-hot-toast';

const useGetConversations = () => {
    const [loading,setloading] = useState(false);
    const [conversations,setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setloading(true);
            try {
                const res = await fetch('http://localhost:5000/api/user',
                  {  method: 'GET',
                    credentials: 'include',
                }
                    );
                const data = await res.json();
                if(data.error)
                {
                    throw new Error(data.error);
                }
                setConversations(data);
            } catch (error) {
                toast.error(error.message);
            } finally{
                setloading(false);
            }
        };
        getConversations();
    }, []);

  return {loading, conversations }
}

export default useGetConversations;