import './CardStyle.css'
function Card(props){
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <p>{props.address}</p>
        </div>
    );
}

export default Card;