import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className="flex flex-col min-h-screen md:border-t-[20px] md:border-l-[20px] md:border-r-[20px] sm:border-white">
            <Header />

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer className="mt-auto" />
        </div>
    );
}

export default Layout