import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
    render() {
        return <div>SongList</div>;
    }
}

// Take data inside Redux store, make calculation and return it as props inside this component
const mapStateToProps = (state) => {
    // Always return as object
    return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);