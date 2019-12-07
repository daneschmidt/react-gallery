import React, { Component } from 'react';
import './GalleryList.css';
import GalleryListItem from '../GalleryListItem/GalleryListItem';

class GalleryList extends Component {

    render() {
        const picsArray = this.props.pics.map((item, index) => {
            return (
                 <GalleryListItem key={index} pics={item} />
            )
        })

        return (
            <div class="gallery">
                {picsArray}
            </div>

        )
    }
}

export default GalleryList;
