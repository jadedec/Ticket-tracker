import "./Counter.scss";
import minus from "../../assets/images/minus.svg";
import plus from "../../assets/images/plus.svg";
import { useState } from "react";

const Counter = () => {
    const [ticket, setTicket] = useState(0);
    const handleMinus = () => {
        if (ticket === 0) {
            setTicket(0);
        }else{
            setTicket(ticket - 1);
        }
    }

    const handlePlus = () => {
        setTicket(ticket + 1);
    }


    return(
    <section className="counterCard">
        <h2>TICKET</h2>
            <h3>{ticket}</h3>
            <div className="button">
                <img onClick={handleMinus} src={minus} alt={minus}  />
                <img onClick={handlePlus} src={plus} alt={plus}  />
            </div>
    </section >
)}





export default Counter;