import "./Card.scss";

const Card = ({ name, role }) => {
    return (
        <section className="card">
            <h2>{name}</h2>
            <h3>{role}</h3>

        </section>
    )
}


export default Card;