import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "all"
        };
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    handleCategoryChange(e) {
        e.stopPropagation();
        var categoryClickedName = e.target.className;
        var category = categoryClickedName.replace("nav-projects-item projects-", "");
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
                            <div className="nav-projects-item projects-all" onClick={this.handleCategoryChange}>All</div>
                            <div className="nav-projects-item projects-knowledge" onClick={this.handleCategoryChange}>Sharing Knowledge</div>
                            <div className="nav-projects-item projects-technology" onClick={this.handleCategoryChange}>Social Technology</div>
                            <div className="nav-projects-item projects-diy" onClick={this.handleCategoryChange}>DIY</div>
                            <div className="nav-projects-item projects-storytelling" onClick={this.handleCategoryChange}>Storytelling</div>
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
