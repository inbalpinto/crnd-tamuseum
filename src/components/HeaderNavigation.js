import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "all"
        };
        this.handleCategoryChangeAll = this.handleCategoryChangeAll.bind(this);
        this.handleCategoryChangeKnowledge = this.handleCategoryChangeKnowledge.bind(this);
        this.handleCategoryChangeTech = this.handleCategoryChangeTech.bind(this);
        this.handleCategoryChangeDIY = this.handleCategoryChangeDIY.bind(this);
        this.handleCategoryChangeStorytelling = this.handleCategoryChangeStorytelling.bind(this);
    }

    handleCategoryChangeAll(e) {
        var category = "all";
        this.props.onChangeCategory(category);
    }
    handleCategoryChangeKnowledge(e) {
        var category = "knowledge";
        this.props.onChangeCategory(category);
    }
    handleCategoryChangeTech(e) {
        var category = "technology";
        this.props.onChangeCategory(category);
    }
    handleCategoryChangeDIY(e) {
        var category = "diy";
        this.props.onChangeCategory(category);
    }
    handleCategoryChangeStorytelling(e) {
        var category = "storytelling";
        this.props.onChangeCategory(category);
    }


    render() {
        return (
            <div className="header-navigation">
                <div className="nav-container">
                    <div className="nav-wrapper">
                        <div className="nav-site">
                            <div className="nav-site-item site-projects active">Projects</div>
                            <div className="nav-site-item site-about">About</div>
                            <div className="nav-site-item site-publication">Publication</div>
                        </div>
                        <div className="nav-projects">
                            <div className="nav-projects-item projects-all" onClick={this.handleCategoryChangeAll}>All</div>
                            <div className="nav-projects-item projects-knowledge" onClick={this.handleCategoryChangeKnowledge}>Sharing Knowledge</div>
                            <div className="nav-projects-item projects-tech" onClick={this.handleCategoryChangeTech}>Social Technology</div>
                            <div className="nav-projects-item projects-diy" onClick={this.handleCategoryChangeDIY}>DIY</div>
                            <div className="nav-projects-item projects-storytelling" onClick={this.handleCategoryChangeStorytelling}>Storytelling</div>
                        </div>
                    </div>
                </div>
                <div className="now-container">
                    <div className="now-wrapper">
                        <div className="now-letter">N</div>
                        <div className="now-letter">O</div>
                        <div className="now-letter">W</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
