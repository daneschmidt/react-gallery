import React, { Component } from 'react';


class GalleryListItem extends Component {

    render() {
        return (
            <div>
            <p><img src={this.props.pic.path} /></p>
            <p>{this.props.pic.description}</p>
            <button onClick={() => this.props.likePic(this.props.pic.id)}>LIKE</button>
            <p>{this.props.pic.likes}</p>
            </div>
        )
    }
}

export default GalleryListItem;
