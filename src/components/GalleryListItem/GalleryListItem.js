import React, { Component } from 'react';


class GalleryListItem extends Component {

    render() {
       
        return (
            <div>
            <p><img src={this.props.pics.path} /></p>
            </div>
        )
    }
}

export default GalleryListItem;
