import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import HeaderNavigation from './HeaderNavigation';
import tamuseumLogo from '../assets/images/tamuseum_logo.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smallHeader: false,
            category: "all"
        };
        this.changeCategoryView = this.changeCategoryView.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
        var shrinkOn = 150;
        if (distanceY > shrinkOn) {
            this.setState({ smallHeader: true });
        } else {
            this.setState({ smallHeader: false });
        }
    }

    changeCategoryView(newCategory) {
        this.setState({ category: newCategory });
        this.props.onChangeCategory(newCategory);
    }

    render() {
        var logoStyle = {
            backgroundImage: 'url(' + tamuseumLogo + ')'
        };
        var smallHeaderClassName = this.state.smallHeader ? 'smaller' : '';

        return (
            <div className={"header-container " + smallHeaderClassName}>
                <div className="header-item-left">
                    <a className="tamuseum-container" href="http://tamuseum.org.il" target="_blank">
                        <div className="tamuseum-logo" style={logoStyle}></div>
                    </a>
                    <div className="exhibition-title">
                        <Link to='/'>
                            <h1 className="title-line line1">3.5 Square Meters:</h1>
                            <h1 className="title-line line2">constructive responses to</h1>
                            <h1 className="title-line line3">natural disasters</h1>
                        </Link>
                    </div>
                </div>
                <HeaderNavigation onChangeCategory={this.changeCategoryView}/>
            </div>
        );
    }
}

export default Header;
