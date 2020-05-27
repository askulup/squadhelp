import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.sass';

const Modal = ({
  title, isOpen, onCancel, onSubmit, children,
}) => (
  <>
    { isOpen
            && (
              <div className={styles.modalOverlay}>
                <div className={styles.modalWindow}>
                  <div className={styles.modalTitle}>{title}</div>
                  <div className={styles.modalBody}>
                    {children}
                  </div>
                  <div className={styles.modalFooter}>
                    <div onClick={onCancel} className={styles.buttonClose}>Close</div>
                    <div className={styles.modalButton} onClick={onSubmit}>Submit</div>
                  </div>
                </div>
              </div>
            )}
  </>
);
Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};
Modal.defaultProps = {
  title: 'Modal title',
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
  children: null,
};
export default Modal;
