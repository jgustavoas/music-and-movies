/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Modal } from '../styles/Modal.style';
import Content from '../modals/default.modal';

export default function Component() {
  return (
    <Modal id='modal'>
      <div>
        <div>
          HEADER <a href='#'>X</a>
        </div>
        <Content />
      </div>
    </Modal>
  );
}
