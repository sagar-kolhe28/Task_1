import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Api_call from '../apis/apicall';

const App = () => {
    return <div>
        <Header />
        <tr>

        <td>
        <Sidebar/>
        </td>
        
        </tr>
        
    </div>;
};

export default App;


