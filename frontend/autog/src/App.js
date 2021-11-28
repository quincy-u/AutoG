import logo from "./logo.svg";
import "./App.css";
import TimeTable from "./components/TimeTable";
import SearchBar from "./components/SearchBar";

function App() {
    return (
        <div className="App">
            <p className="TimeTable">
                <TimeTable></TimeTable>
            </p>
            <p className="SearchBar">
                <SearchBar></SearchBar>
            </p>
        </div>
    );
}

export default App;
