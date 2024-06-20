import React,{useState, useEffect} from 'react'
import Link from 'next/link';

export default function User() {

    const [Users, setUsers] = useState([])

    const getall = async () => {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        setUsers(data.users); // Access the 'users' array from the response
        console.log(data.users); // Log the correct data
    }

    useEffect(() => {
      getall()
    }, [])
    


  return (
    <div>
        Hello
        {Users && Users.length > 0 ? (
                <ul>
                    {Users.map((item) => (
                        <div key={item.id}>
                            <Link href={`/user/${item.id}`} key={item.id}>{item.firstName} {item.lastName}</Link>
                        </div>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
    </div>
  )
}
