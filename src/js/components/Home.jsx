import React, { Component } from 'react'
import { connect } from 'react-redux'

import ColumnsContainer from './ColumnsContainer.jsx'

class Home extends Component {

    render() {
        return (
            <div className="Home">
                <h2>This is the homepage</h2>
                <ColumnsContainer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(
    mapStateToProps,
    {

    }
)(Home)
