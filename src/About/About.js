import Card from './Card'
import './CardStyle.css'
function About(){
    const users = [
        { name: "Sakxyam", address: "Tarkeshwor"},
        { name: "Sanjeev", address: "Banasthali"},
        { name: "Akash", address: "Budanilkantha"},
        { name: "Suraj", address: "Tokha"},
        { name: "Ronish", address: "Kausaltar"},
    ];

    return (
        <div className='cardBg'>
            {users.map((user,key) => {
                return <Card name={user.name} address={user.address} />;
            })}
        </div>
    );
}

export default About;