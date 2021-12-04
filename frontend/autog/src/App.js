import logo from "./logo.svg";
import TimeTable from "./components/TimeTable/TimeTable";
import SearchBar from "./components/SearchBar/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.css";

function App() {
    return (
        <div className="App">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2">
                    <SearchBar/>
                        </div> 
                    <div className="col-lg-10">
                    <TimeTable ></TimeTable>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
