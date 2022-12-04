import React from 'react';
import styles from './appcomponent.module.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from '../NotFoundPage';
import { Header } from '../Header';
import { Layout } from '../Layout';
import { Content } from '../Content';
import { Tasks } from '../Tasks';

export function AppComponent() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Content>
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
        </Content>
      </Layout>
    </BrowserRouter>
  );
}
