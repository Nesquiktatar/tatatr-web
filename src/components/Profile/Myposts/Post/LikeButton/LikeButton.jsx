import React from 'react';

class LikeButton extends React.Component {
    constructor() {
        super();
        this.state = {
            liked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            liked: !this.state.liked
        });
    }
g
    render() {
        // const text = this.state.liked ? 'liked' : 'haven\'t liked';
        const label = this.state.liked ? 'Unlike' : 'Like'
        return (
            <div className="customContainer">
                <button className="btn btn-primary" onClick={this.handleClick}>
                    {label}</button>
                {/*<div>*/}
                {/*    you {text} this. Click to toggle.*/}
                {/*</div>*/}

            </div>
        );
    }
}

export default LikeButton;