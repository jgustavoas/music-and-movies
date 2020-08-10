import React from 'react';
import { Sidebar } from '../styles/Sidebar.style';

export default function Componente() {
  return (
    <Sidebar id='Sidebar'>
      <div>
        <p>A sidebar for some purpose</p>
        <p>
          <a href='#modal'>Open modal</a>
        </p>
      </div>
    </Sidebar>
  );
}
