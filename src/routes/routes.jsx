import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Welcome from '../pages/Welcome/Welcome';
import Budget from '../pages/Budget/Budget';

const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route index element={<Welcome/>} />
            <Route path="/budget" element={<Budget/>} />
             { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}    
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);

export default Router;