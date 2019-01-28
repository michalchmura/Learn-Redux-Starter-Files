import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => (
          <Photo {...this.props} key={i} i={i} post={post} />
        ))}
        {/* <pre>{JSON.stringify(this.props.posts, null, ' ')}</pre> */}
      </div>
    );
  }
});

export default PhotoGrid;
