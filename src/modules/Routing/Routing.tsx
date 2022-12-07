import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Tasks } from '../Layout/Content/Tasks';
import { NotFoundPage } from './NotFoundPage';
import styles from './routing.module.css';

export function Routing() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/404" replace />} />
      <Route path="/404" element={<NotFoundPage />} />

      <Route path={`/pomodoro`} element={<Navigate to="/" replace />} />
      <Route
        path={`/statistic`}
        element={<h2>Страница в разработке</h2>}
      ></Route>

      <Route path={`/`} element={<Tasks />}>
        <Route path={`:id/delete`} element={<h2>удалить элемент</h2>} />
      </Route>
    </Routes>
  );
}
