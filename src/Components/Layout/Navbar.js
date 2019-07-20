import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
    return (
        <Fragment>
            <nav className="navbar bg-primary">
                <h1>
                    <i className={icon} />
                    {title}
                </h1>
            </nav>
        </Fragment>
    );
};

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;
