import React from 'react';
import styles from './appcomponent.module.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from '../../Routing/NotFoundPage';
import { Header } from '../../Layout/Header';
import { Layout } from '../../Layout';
import { Content } from '../../Layout/Content';
import { Tasks } from '../../Layout/Content/Tasks';
import { Routing } from '../../Routing';

export function AppComponent() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Content>
          <Routing />
        </Content>
      </Layout>
    </BrowserRouter>
  );
}
