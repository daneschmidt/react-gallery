import React, { Component } from 'react';
import './GalleryList.css';

class GalleryList extends Component {

    render() {
        const picsArray = this.props.pics.map((item, index) => {
            return (
                <div key={index}>
                    <p><img src={item.path} /></p>
                </div>

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
