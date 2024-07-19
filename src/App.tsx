import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DialogProvider } from './context/DialogContext';
import Layout from './components/Layout';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App: FC = () => (
  <DialogProvider>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </DialogProvider>
);

export default App;
