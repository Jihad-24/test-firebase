import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div  className="max-w-6xl mx-auto text-center items-center">
            <Header></Header>
            <div className="max-w-6xl mx-auto flex justify-center items-center">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;