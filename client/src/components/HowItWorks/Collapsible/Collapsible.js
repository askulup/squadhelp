import React, { Component } from 'react';
import styles from './Collapsible.module.sass';

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidUpdate() {
  }

    togglePanel = () => {
      this.setState({ open: !this.state.open });
    }

    render() {
      return (
        <div className={styles.cardCollapsibleWrapper}>
          <div onClick={(e) => this.togglePanel(e)} className={styles.header}>
            {this.props.title}
            {this.state.open ? (
                <span className="fas fa-arrow-down small" />
            ) : <span className="fas fa-arrow-right small" />}
          </div>
          {this.state.open ? (
            <div className={styles.content}>
              {this.props.children}
            </div>
          ) : null}
        </div>
      );
    }
}

export default Collapsible;
