import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Welcome from '../pages/Welcome/Welcome';
import Budgets from '../pages/Budgets/Budgets';
import PageNotFound from '../pages/404/PageNotFound';

const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route index element={<Welcome/>} />
            <Route path="/budget" element={<Budgets/>} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </BrowserRouter>
);

export default Router;