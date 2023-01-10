import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { IconLogoDekstop } from './IconLogoDekstop';
import { IconLogoMobile } from './IconLogoMobile';

import styles from './logo.module.css';

export function Logo() {
  return (
    <Link to={`/`} className={styles.link}>
      <IconLogoDekstop />
      <IconLogoMobile />
    </Link>
  );
}
