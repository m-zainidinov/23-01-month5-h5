import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import '../style.css';

const Detail = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${params.id}`
              );
              const data = await response.json();
              setUser(data);
              setIsLoading(false);
            } catch (error) {
              console.error('Error fetching data:', error);
              setIsLoading(false);
            }
        };
      
        fetchData();
    }, [params.id]);

    useEffect(() => {
        const handleBeforeUnload = () => {
          setIsLoading(true);
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, []);

    if (isLoading) {
        return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    }

    return (
        <div>
            <ul>
                <li><h1>Name: {user.name}</h1></li>
                <li><h2>Username: {user.username}</h2></li>
                <li><h2>E-mail: {user.email}</h2></li>
                <li><h2>Phone: {user.phone}</h2></li>
                <li><h2>Website: {user.website}</h2></li>
            </ul>
            
            <Link to={'/'}>Go home</Link>

        </div>
    )
}

export default Detail