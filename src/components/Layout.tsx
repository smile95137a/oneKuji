// components/Layout.tsx
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import GlobalRoutes from '@/routes/GlobalRoutes';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">
        <GlobalRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
