import React from "react";
import NavBar from "./Navbar"
import Header from "./Header";
import Cards from "./Cards";
import Footer from "./Footer";
import data from "../data.json";

const style = {
    main: {
        height: '100vh',
        overflow: 'hidden'
    },
    body: {
        overflow: "scroll"
    }
}

class Game extends React.Component{
    state= {
        data, 
        score: 0,
        topScore: 0,
        message: ""
    };

    componentDidMount() {
        this.setState({ data })
    }

    // function to handle correct guess
    handleCorrectGuess(state) {
        const {score, topScore} = this.state;
        const newScore = score + 1;
        const newTopScore = Math.max(newScore, topScore)
        const message = "Correct"

        this.setState({ 
            data: this.shuffleData(state),
            score: newScore,
            topScore: newTopScore,
            message
         });
    }
    // Handle the incorrect guess, shuffle data
    handleIncorrectGuess = () => {
        const message = "Incorrect"

        this.setState({
            data: this.resetData([...this.state.data]),
            score: 0,
            message
    
        })
    }
    //reset data
    resetData = (data) => {
        const resetData = data.map(item => ({ ...item, clicked: false }));
        return this.shuffleData(resetData)
        
    }
    //shuffle data 
    shuffleData = (data) => {
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
    handleClick = (id) => {
        console.log('data', this.state.data)
        const state = [...this.state.data]
        const item = state.find((item) => {
            return item.id === id
        })
        //check correct or incorrect
        const correct = !item.clicked
        if (correct){
            item.clicked = true
            this.handleCorrectGuess(state)

        }else{
            this.handleIncorrectGuess()
        }
    }

    
    //render return
    render() {
        return (
            <div className="d-flex flex-column" style={style.main}>
                <NavBar score={this.state.score} topscore={this.state.topScore} message={this.state.message}/>
                <div style={style.body} >
                    <Header/>
                    <Cards data={this.state.data} handleClick={this.handleClick}/>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default Game


//create ghdeploy
//hub create
//git push origin master
// yarn add gh-pages -D

