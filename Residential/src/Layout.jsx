import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer className="mt-auto" />
        </div>
    );
}

export default Layout