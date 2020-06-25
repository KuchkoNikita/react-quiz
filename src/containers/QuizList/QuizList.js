import React, {Component} from 'react';
import classes from './QuizList.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
export default class QuizList extends Component {

    state = {
        quizes: [],
    }

    renderQuizes() {
        return this.state.quizes.map((quiz, index) => {
            return (
                <li
                    key={quiz.id}
                >
                    <NavLink to={'/quiz/' + quiz.id}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        });
    }

    async componentDidMount() {
        try {
            const response = await axios.get('https://react-quiz-2330b.firebaseio.com/quizes.json');

            const quizes = []
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })
            })

            this.setState({
                quizes
            })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <h1>Список тестов</h1>

                <ul>
                    { this.renderQuizes() }
                </ul>
            </div>
        )
    }
}