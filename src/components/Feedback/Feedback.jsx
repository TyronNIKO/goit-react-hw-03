import {BsEmojiAngry, BsEmojiHeartEyes, BsEmojiNeutral} from "react-icons/bs";
import css from "./Feedback.module.css";
const Feedback = ({good, bad, neutral, total, average}) => {
    return (
        <div className={css.feedback}>
            <ul>
                <li>
                    <BsEmojiHeartEyes />
                    Good: {good}
                </li>
                <li>
                    <BsEmojiNeutral />
                    Neutral:{neutral}
                </li>
                <li>
                    <BsEmojiAngry />
                    Bad: {bad}
                </li>
                <li>Total: {total}</li>
                <li>Positive: {!isNaN(average) && average}%</li>
            </ul>
        </div>
    );
};

export default Feedback;
