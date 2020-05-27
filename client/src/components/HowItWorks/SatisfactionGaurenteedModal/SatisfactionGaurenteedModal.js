import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import styles from './SatisfactionGaurenteedModal.module.sass';

class SatisfactionGaurenteedModal extends Component {
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
            title="Satisfaction Gaurenteed Modal"
            isOpen={this.state.isOpen}
            onCancel={this.handleCancel}
            onSubmit={this.handleSubmit}
          >
            <div id="satisfactionGaurenteedModal">
              <div className="card">
                <div className={styles.cardBody}>
                  <h4 className={styles.title}>We Stand By Our Process.</h4>
                  <p>If you are not satisfied receive</p>
                      <div className={styles.media}>
                        <span className={styles.btnIconSoftDanger} style={{ background: 'rgba(222,68,55,.1)' }}>
                          <i className="fas fa-heart" style={{ color: 'red' }} />
                        </span>
                        <div className={styles.mediaBody}>
                          Complimentary extension of your contest timeline.
                        </div>
                      </div>
                      <div className={styles.media}>
                        <span className={styles.btnIconSoftDanger} style={{ background: 'rgba(55,125,255,.1)' }}>
                          <i className="fas fa-smile" style={{ color: 'rgb(55, 125, 255)' }} />
                        </span>
                        <div className={styles.mediaBody}>
                          Complimentary consultation with a Squadhelp branding consultant.
                        </div>
                      </div>
                      <div className={styles.media}>
                        <span className={styles.btnIconSoftDanger} style={{ background: 'rgba(0,201,167,.1)' }}>
                          <i className="fab fa-studiovinari" style={{ color: '#00c9a7' }} />
                        </span>
                        <div className={styles.mediaBody}>
                          Apply your contest award toward the purchase of any premium name from our
                          Marketplace.
                        </div>
                      </div>
                      <div className={styles.media}>
                        <span className={styles.btnIconSoftDanger} style={{ background: 'rgba(222,68,55,.1)' }}>
                          <i className="fab fa-steam-symbol" style={{ color: 'red' }}/>
                        </span>
                        <div className={styles.mediaBody}>
                          Partial refund for Gold and Platinum packages.
                          {' '}
                          <a
                            href="https://helpdesk.squadhelp.com/important-sh-policies/contest-holder/refund-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read more.
                          </a>
                        </div>
                      </div>
                      <div className={styles.media}>
                         <span className={styles.btnIconSoftDanger} style={{ background: 'rgba(55,125,255,.1)' }}>
                          <i className="fas fa-table-tennis" style={{ color: 'rgb(55, 125, 255)' }} />
                        </span>
                        <div className={styles.mediaBody}>
                          No-questions-asked refund within 10 days for any marketplace domains
                          purchased.
                          {' '}
                          <a
                            href="https://helpdesk.squadhelp.com/domain-marketplace/domain-marketplace-terms-conditions-for-buyers"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {' '}
                            Read more.
                          </a>
                        </div>
                      </div>

                </div>
              </div>
            </div>
          </Modal>

        </>
      );
    }
}

export default SatisfactionGaurenteedModal;
