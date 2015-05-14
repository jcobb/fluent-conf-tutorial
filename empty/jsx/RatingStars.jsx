var React = require('react');

class RatingStars extends React.Component {

  render() {

      var filled = Math.floor(this.props.score);
      var hasHalf = this.props.score-filled >= 0.5;
      var empty = this.props.max - filled;
      var stars = [];

      // filled stars
      for(let i=0; i < filled; i++){
        stars.push(
          <i className="fa fa-star" />
        )
      }

      // half star
      if(hasHalf) {
        empty--;
        stars.push(
          <i className="fa fa-star-half-o" />
        )
      }

      // empty stars
      for(let i=0; i < empty; i++){
        stars.push(
          <i className="fa fa-star-o" />
        )
      }

      return(
        <div className="rating-stars">
          { stars.map( el => el ) }
        </div>
      )

  }
}

module.exports = RatingStars;
