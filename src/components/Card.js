const Card = ({number, text}) => {
    return ( 
        <div className="card">
            <p className="card-senario">Scenario {number}</p>
            <p className="card-text">{text}</p>
        </div>
     );
}
 
export default Card;