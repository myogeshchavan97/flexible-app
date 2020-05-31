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
    const nav = <header>{this.renderNav()}</header>;
    const content = <main>{this.renderContent()}</main>;

    const { showOnTop } = this.props;
    return (
      <React.Fragment>
        {showOnTop ? [nav, content] : [content, nav]}
      </React.Fragment>
    );
  }
}

export default Main;
