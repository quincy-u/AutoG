import logo from "./logo.svg";
import "./App.css";
import TimeTable from "./components/TimeTable";
import SearchBar from "./components/SearchBar/SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function App() {
    return (
        <div className="App">
            <div className="HomeBackground">
                <SearchBar/>
                <div className="TimeTable">
                    <TimeTable></TimeTable>
                </div>
            </div>
        </div>
    );
}

export default App;
