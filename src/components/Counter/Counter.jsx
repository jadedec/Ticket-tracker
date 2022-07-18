import "./Counter.scss";
import minus from "../../assets/images/minus.svg";
import plus from "../../assets/images/plus.svg";

const Counter = () => {
    return(
    <section className="counterCard">
        <h2>TICKET</h2>
            <h3>0</h3>
            <div className="button">
                <img src={minus} alt={minus}  />
                <img src={plus} alt={plus}  />
            </div>
    </section >
)}





export default Counter;