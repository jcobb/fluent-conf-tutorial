var React = require('react');

class Header extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      term: ''
    }

  }

  handleLayoutEvent(e) {
    this.props.changeLayout(e.target.value);
  }

  handleTermEvent(e) {
    this.setState({
      term: e.target.value
    });
  }

  handleTermSubmit(e) {
    e.preventDefault();
    this.props.search(this.state.term);
    this.setState({
      term: ''
    });
  }

  render(){

    return (
      <header className="app-header">
        <div className="app-header__inner">
          <h1 className="app-header__title">Fluentflix</h1>
          <select onChange={this.handleLayoutEvent.bind(this)} value={this.props.layout} className="app-header__display-select">
            <option value="tile">Tile</option>
            <option value="list">List</option>
          </select>
        </div>
        <form onSubmit={this.handleTermSubmit.bind(this)}>
          <input value={this.state.term} onChange={this.handleTermEvent.bind(this)} className="app-header__search" type="text" placeholder="search" />
        </form>
      </header>

    );

  }
}

module.exports = Header;
