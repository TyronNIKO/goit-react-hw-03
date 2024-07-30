// src/App.jsx

import {useEffect, useState} from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import "./App.css";
import Section from "./Section";
import Notification from "./Notification/Notification";

const App = () => {
    const [feedback, updateFeedback] = useState(() => {
        // Зчитуємо значення за ключем
        const savedFeedback = window.localStorage.getItem("feedback");
        // Якщо там щось є, повертаємо це
        // значення як початкове значення стану
        if (savedFeedback !== null) {
            return JSON.parse(savedFeedback);
        }

        // У протилежному випадку повертаємо
        // яке-небудь значення за замовчуванням
        return {
            good: 0,
            neutral: 0,
            bad: 0,
        };
    });
    useEffect(() => {
        window.localStorage.setItem("feedback", JSON.stringify(feedback));
    }, [feedback]);

    const setFeedback = feedName => {
        // Тут використовуй сеттер, щоб оновити стан
        console.log(feedName);
        updateFeedback(feedback => ({
            ...feedback,
            [feedName]: feedback[feedName] + 1,
        }));
    };
    const resetFeedback = () => {
        updateFeedback({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    };
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const average = Math.round((feedback.good / totalFeedback) * 100);

    return (
        <>
            <Section name="header">
                <Description title="Sip Happens Café" descr="Please leave your feedback about our service by selecting one of the options below." />
            </Section>
            <Section name="rating">
                <Options update={setFeedback} reset={resetFeedback} total={totalFeedback} />
                {totalFeedback ? <Feedback good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} total={totalFeedback} average={average} /> : <Notification />}
            </Section>
        </>
    );
};

export default App;
