var React = require('react');
var preload = require('./netflix');
var _ = require('lodash');
var MovieContainer = require('./MovieContainer');
var MovieTileLayout = require('./MovieTileLayout');
var MovieListLayout = require('./MovieListLayout');
var Header = require('./Header');
var omdb = require('./fake-omdb-client');

class App extends React.Component {

  // in es6 react classes, the constructor replaces getInitalState
  constructor(props) {

    // super is required for react to be able to do it's thang
    super(props);

    this.state = {
      layout: 'tile',
      results: _.clone(preload.Search),
      term: ''
    };

  }

  changeLayout(name) {
    this.setState({layout:name});
  }

  search(term) {

    console.log('search');

    this.setState({term});

    omdb.search({query: term}, (err, data) => {
      this.setState({results: data.Search});
    });


  }

  render() {

    var layout;

    layout = this.state.layout === 'tile' ? MovieTileLayout : MovieListLayout;


    return (
      <div className="app-container">
        <Header
          layout={this.state.layout}
          changeLayout={this.changeLayout.bind(this)}
          search={this.search.bind(this)}
        />
        <div className="movies-list">
        {this.state.results.map( (el,i) =>  {
          return (
            <MovieContainer
              id={el.id}
              key={i}
              layout={layout}
            />
          );
        })}
        </div>
      </div>
    );

  }

}

module.exports = App;
