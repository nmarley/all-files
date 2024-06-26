import './App.css';
import AllFilesView from './components/AllFilesView';

function App() {
    // Get stuff from core API here?
    const user = 'test';
    const supplierIds = ['1', '2', '3'];

    return (
        <>
            <AllFilesView user={user} supplierIds={supplierIds} />
        </>
    );
}

export default App;
