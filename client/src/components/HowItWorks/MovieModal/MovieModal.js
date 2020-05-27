import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import styles from './MovieModal.module.sass';

class MovieModal extends Component {
    state = {
      isOpen: false,
    }

    openModal = () => {
      this.setState({ isOpen: true });
    }

    handleSubmit = () => {
      this.setState({ isOpen: false });
    }

    handleCancel = () => {
      this.setState({ isOpen: false });
    }

    render() {
      return (
        <>
          <button onClick={this.openModal} className={styles.likeA}>Learn more</button>
          <Modal
            title="How It Works!"
            isOpen={this.state.isOpen}
            onCancel={this.handleCancel}
            onSubmit={this.handleSubmit}
          />
            {
                window.open('https://fast.wistia.com/embed/medias/l2bhtku7e6')
            }
        </>
      );
    }
}

export default MovieModal;
