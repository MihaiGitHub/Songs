import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
    renderList(){
        // Produce array of songs and return it
        return this.props.songs.map((song) => {
            // Return some JSX for each song
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary">
                            Select
                        </button>
                    </div>

                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

// Take data inside Redux store, make calculation and return it as props inside this component
const mapStateToProps = (state) => {
    // Always return as object
    return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);