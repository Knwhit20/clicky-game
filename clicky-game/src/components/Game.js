import React from "react";
import Navbar from "./Navbar";
import Score from "./Score";
import Header from "./Header";
import Card from "./Cards";
import Footer from "./Footer";
import data from "../../data.json";

class Game extends React.Component{
    state= {
        data, 
        score: 0,
        topScore: 0
    };

    componentDidMount(){
        this.setState({ data: })

    }
    // function to handle correct guess
    handleCorrectGuess= newData => {
        const {score, topScore} = this.state;
        const newScore = score + 1;
        const newTopScore = Math.max(newScore, topScore)

        this.setState({ 
            data: this.shuffleData(newData),
            score: newScore,
            topScore: newTopScore
         });
    }
    // Handle the incorrect guess, shuffle data
    handleIncorrectGuess= data => {
        this.setState({
            data: this.resetData(data),
            score: 0,
    
        })
    }
    //reset data
    resetData = data => {
        const resetData = data.map(item => ({ ...item, clicked: false }));
        return this.shuffleData(resetData)
        
    }
    //shuffle data 
    shuffleData= data => {
        let i = data.length - 1;
        while(i > 0){
            const j = Math.floor(Math.random()*(i+1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i--;
        }

        return data;
    }
    // handle item click
    
    //render return

}





export default Game

//while  loops