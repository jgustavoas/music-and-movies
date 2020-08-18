import React from 'react';
import { Link } from 'react-router-dom';

export default function Component({ to, title }) {
  return (
    <Link to={to}>
      <span>{title}</span>
    </Link>
  );
}
