import React from 'react';
import { Link } from 'react-router-dom';
import { IconLogo } from './IconLogo';
import styles from './logo.module.css';

export function Logo() {
  return (
    <Link to={`/`} className={styles.postLink}>
      <IconLogo />
    </Link>
  );
}
