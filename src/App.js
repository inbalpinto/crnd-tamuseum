import React, { Component } from 'react';
import Header from './components/Header';
import ProjectsContainer from './components/ProjectsContainer';
import Footer from './components/Footer';

import './stylesheets/main.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "all"
        };
        this.changeCategory = this.changeCategory.bind(this);
    }

    changeCategory(newCategory) {
        this.setState({ category: newCategory });
    }

    render() {
        return (
            <div className="App">
                <Header onChangeCategory={this.changeCategory}/>
                <ProjectsContainer categoryView={this.state.category}/>
                <Footer />
            </div>
        );
    }
}

export default App;
