import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "all"
        };
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
    }

    handleCategoryClick(e) {
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
                            <div className="nav-site-item site-projects"><NavLink activeClassName="active" to='/projects'>Projects</NavLink></div>
                            <div className="nav-site-item site-about"><NavLink activeClassName="active" to='/about'>About</NavLink></div>
                            <div className="nav-site-item site-publication"><NavLink activeClassName="active" to='/publication'>Publication</NavLink></div>
                        </div>
                        <div className="nav-projects">
                            <div className="nav-projects-item projects-all" onClick={this.handleCategoryClick}>
                                <NavLink activeClassName="active" to='/projects/all'>All</NavLink>
                            </div>
                            <div className="nav-projects-item projects-knowledge" onClick={this.handleCategoryClick}>
                                <NavLink activeClassName="active" to='/projects/sharing_knowledge'>Sharing Knowledge</NavLink>
                            </div>
                            <div className="nav-projects-item projects-technology" onClick={this.handleCategoryClick}>
                                <NavLink activeClassName="active" to='/projects/social_technology'>Social Technology</NavLink>
                            </div>
                            <div className="nav-projects-item projects-diy" onClick={this.handleCategoryClick}>
                                <NavLink activeClassName="active" to='/projects/diy'>DIY</NavLink>
                                </div>
                            <div className="nav-projects-item projects-storytelling" onClick={this.handleCategoryClick}>
                                <NavLink activeClassName="active" to='/projects/storytelling'>Storytelling</NavLink>
                            </div>
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
