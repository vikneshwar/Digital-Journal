/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from '../LoginPage/index';
import NotesPage from '../NotesPage/index';

import GlobalStyle from '../../global-styles';
import TopBar from '../../components/TopBar';
import './style.css';
import theme from '../../utils/theme';
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <section className="container">
        <CssBaseline />
        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/notes" component={NotesPage} />

            <Route component={NotFoundPage} />
          </Switch>
          <GlobalStyle />
        </Container>
      </section>
    </ThemeProvider>
  );
}
