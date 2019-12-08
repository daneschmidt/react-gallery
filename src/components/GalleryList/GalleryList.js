import React, { Component } from 'react';
import './GalleryList.css';
import GalleryListItem from '../GalleryListItem/GalleryListItem';

class GalleryList extends Component {

    render() {
        const picsArray = this.props.pics.map((item, index) => {
            return (
                <GalleryListItem key={index} pic={item} likePic={this.props.likePic} />
            )
        })

        return (
            <div className="gallery">
                {picsArray}
            </div>

        )
    }
}

export default GalleryList;
