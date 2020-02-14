import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = { showMenu: false }
        this.mobileMenu = this.mobileMenu.bind(this);
    }

    mobileMenu() {
        this.setState({showMe: ! this.state.showMe})
    }

    render() {
        //let headermenu = this.state.showMe ? "headershow" : "headerhide";

        return (
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-1 col-md-12 col-sm-12 col-12">
                            <h4 className="logo">Newton</h4>
                        </div>
                        <div className="col-11">
                            {/* <button id="mmenu" onClick={this.mobileMenu}><i class="fa fa-align-justify" ></i></button> */}
                                    <ul className="headermenu">
                                        <li>Home</li>
                                        <li>About Us</li>
                                        <li>Contact Us</li>
                                        <li>Profile</li>
                                    </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;