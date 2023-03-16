import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import AppNavbar from './layout/AppNavbar';

const App = () => (
  <Container className="h-100">
    <AppNavbar />
  </Container>
);

export default App;

