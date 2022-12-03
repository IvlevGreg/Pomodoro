import React from 'react';
import styles from './appcomponent.module.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from '../NotFoundPage';

export function AppComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/404" element={<NotFoundPage />} />

        <Route path={`/statistic`} element={<h1>статистика</h1>}></Route>

        <Route path={`/`} element={<h1>главная страница</h1>}>
          <Route path={`:id/delete`} element={<h2>удалить элемент</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
