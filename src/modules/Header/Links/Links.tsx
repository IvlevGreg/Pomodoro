import React from 'react';
import { Link } from 'react-router-dom';
import { IconStatistic } from './IconStatistic';
import styles from './links.module.css';

export function Links() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to={`/statistic`} className={styles.postLink}>
            <IconStatistic /> Статистика
          </Link>
        </li>
      </ul>
    </nav>
  );
}
