import React, { Component } from 'react';


class GalleryListItem extends Component {

    render() {
       
        return (
            <div>
            <p><img src={this.props.pics.path} /></p>
            <p>{this.props.pics.description}</p>
            </div>
        )
    }
}

export default GalleryListItem;
