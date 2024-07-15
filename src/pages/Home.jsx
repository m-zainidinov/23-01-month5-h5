import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import '../style.css';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch('https://jsonplaceholder.typicode.com/users');
              const data = await response.json();
              setUsers(data);
              setIsLoading(false);
            } catch (error) {
              console.error('Error fetching data:', error);
              setIsLoading(false);
            }
          };
      
        fetchData();
    }, []);

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
            {
                users.map(item => {
                    return <h1 key={item.id}><Link to={`/user/${item.id}`}>{item.username}</Link></h1>
                })
            }
        </div>
    )
}

export default Home