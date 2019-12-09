import React, { Component } from 'react';
import './Expand.css';

class GalleryListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
        }

    }
    clickExpand = (event) => {
        this.setState({
            show: !this.state.show,
        })
    }

    render() {
        let showClass;

        if (this.state.show) {
            showClass = "isExpanded"
        } else if (!this.state.show) {
            showClass = 'isHidden';
        }

        return (
            <div>
                <p className="clickable" onClick={this.clickExpand}><img src={this.props.pic.path} /></p>
                <div className={showClass}>
                    <p><h4>{this.props.pic.description}</h4></p>
                </div> 
                <div>
                    <button className="likeButton" onClick={() => this.props.likePic(this.props.pic.id)}>LIKE</button>
                    <h4>{this.props.pic.likes} people like this!</h4>
                </div>
            </div>
        )
    }
}

export default GalleryListItem;
