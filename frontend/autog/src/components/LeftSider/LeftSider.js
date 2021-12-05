import React from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import './LeftSider.css'
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'


const courseDB = [
    {
        title: "CSC108",
        description: 'a CS course'
    },
    {
        title: "CSC148",
        description: 'another CS course'
    },
    {
        title: "CSC165",
        description: 'a latex course'
    },
    {
        title: "CSC420",
        description: 'cv course'
    },
    {
        title: "CSC311",
        description: 'machine learning course'
    },
    {
        title: "CSC413",
        description: 'deep learning course'
    },


    {
        title: "CSC108",
        description: 'a CS course'
    },
    {
        title: "CSC148",
        description: 'another CS course'
    },
    {
        title: "CSC165",
        description: 'a latex course'
    },
    {
        title: "CSC420",
        description: 'cv course'
    },
    {
        title: "CSC311",
        description: 'machine learning course'
    },
    {
        title: "CSC413",
        description: 'deep learning course'
    },
]


const LeftSider = (props) => {
    const [searchedCourses, setSearchedCourses] = useState([])

    function onSearch(e) {
        let input = e.target.value.toUpperCase();
        console.log(input)
        if (input.length < 3) {
            setSearchedCourses([]);
        } else {
            let coursesToDisplay = courseDB.filter(course => course.title.toUpperCase().indexOf(input) > -1);
            if (coursesToDisplay.length === 0) {
                setSearchedCourses([{ title: 'no courses found', description: '' }]);
            }
            else {
                setSearchedCourses(coursesToDisplay);
            }
        }
    }

    function addCourse() {
        setSearchedCourses([]);
        console.log('1');
    }

    return (
        <div className="LeftSider">
            <div className="SearchBar">
                <InputGroup className="SearchInput">
                    <FormControl
                        id='SearchInput'
                        placeholder="Search by course code"
                        size='lg'
                        onChange={(e) => onSearch(e)}
                    />
                </InputGroup>
                <div className="SearchResultContainer">
                    {searchedCourses.map((course) => (
                        <div className="SearchItem" key={course.title} action onClick={() => { addCourse() }}>
                            {course.title}
                        </div>
                    ))}
                </div>
            </div>
            <div className="SavedCoursesList">
                <div className="CourseListTitle">

                    <h2> courses </h2>
                </div>
                <ListGroup className="SavedCoursesContainer">
                    {props.savedCourses.map((course) => (
                        <ListGroup.Item
                            key={course.title}
                            className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="SavedCourseTitle">{course.title}</div>
                                {course.description}
                            </div>
                            <Button variant="secondary" size="sm">
                                remove
                            </Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        </div>
    )

}

function addHighlight(target) {
    target.classList.add('HighLighted');
}

function removeHighlight(target) {
    target.classList.remove('HighLighted');
}

window.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('SearchItem')) {
        addHighlight(e.target);
    }
});

window.addEventListener('mouseout', function (e) {
    if (e.target.classList.contains('SearchItem')) {
        removeHighlight(e.target);
    }
});



// function onLoadDisplaySearchResult(courses) {
//     const result = courses.map((course) =>
//         <ListGroup.Item className="SearchItem" onClick={() => { searchResultOnClick() }}>
//             {course}
//         </ListGroup.Item>
//     );
//     return result;
// }

// function searchForCourses() {
//     console.log(1);
// }

// function setDisplaySearchResult(courses) {
//     const htmlString = toDisplay
//         .map((course) => {
//             return `
//             <ListGroup.Item className="SearchItem" onClick={() => { searchResultOnClick() }}>
//                 ${course}
//             </ListGroup.Item>
//             `;
//         }).join('');
//     SearchCourseList.innerHTML = htmlString;
// }

// const SearchCourseList = document.getElementById("CourseList");
// const SearchInput = document.getElementById('SearchInput');

export default LeftSider;