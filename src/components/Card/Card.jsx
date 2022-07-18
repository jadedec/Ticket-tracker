import "./Card.scss";
import Counter from "../Counter/Counter"

const Card = ({ name, role }) => {
    return (
        <section className="card">
            <div>
                <h2 className="card_content card_content-name">{name}</h2>
                <h3 className="card_content">{role}</h3>
            </div>
            <div>
                <Counter />
            </div>
        </section>
    )
}

export default Card;