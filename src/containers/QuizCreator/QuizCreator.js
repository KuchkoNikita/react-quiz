import React, {Component} from 'react';
import classes from './QuizCreator.css';
import Button from './../../components/UI/Button/Button.js';

export default class QuizCreator extends Component {

    submitHandler = (event) => {
        event.preventDefault();
    }

    addQuestionHadler = () => {

    }
    
    createQuizHandler = () => {

    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>

                    <form onSubmit={this.submitHandler}>

                        <input type="text"/>
                        <hr/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        
                        <select name="" id=""></select>
                        
                        <Button
                            type="primery"
                            onClick={this.addQuestionHadler}
                        >Добавить вопрос</Button>

                        <Button
                            type="success"
                            onClick={this.createQuizHandler}
                        >Cоздать тест</Button>
                    </form>
                </div>
            </div>
        )
    }
}