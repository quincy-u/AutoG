import TimeTable from "./components/TimeTable/TimeTable";
import LeftSider from "./components/LeftSider/LeftSider";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from 'react';

const App = () => {
    const [savedCourses, setSavedCourses] = useState([
        {
            title: 'CSC108',
            description: 'a CS course'
        },
        {
            title: 'MAT137',
            description: 'a math course'
        },
    ])
    return (
        <div className="App">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <LeftSider
                            savedCourses={savedCourses}
                            setSavedCourses={setSavedCourses} />
                    </div>
                    <div className="col-lg-7">
                        <TimeTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
