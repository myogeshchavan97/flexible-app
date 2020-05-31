import React from 'react';

class Main extends React.Component {
  state = {
    selectedIndex: 0
  };

  setSelectedIndex = (index) => {
    this.setState({
      selectedIndex: index
    });
  };

  renderNav = () => {
    return (
      <div className="links">
        {this.props.data.map((item, index) => (
          <a
            key={index}
            href="/#"
            className="link"
            onClick={() => this.setSelectedIndex(index)}
          >
            {item.label}
          </a>
        ))}
      </div>
    );
  };

  renderContent = () => {
    const { selectedIndex } = this.state;
    return <div>{this.props.data[selectedIndex].content}</div>;
  };

  render() {
    return (
      <React.Fragment>
        <header>{this.renderNav()}</header>
        <main>{this.renderContent()}</main>
      </React.Fragment>
    );
  }
}

export default Main;
