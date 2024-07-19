import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DialogProvider } from './context/DialogContext';
import Layout from './components/Layout';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlidebarProvider } from './context/SlidebarContext';

const App: FC = () => (
  <SlidebarProvider>
    <DialogProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </DialogProvider>
  </SlidebarProvider>
);

export default App;
