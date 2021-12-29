import React from "react";
import uniqid from "uniqid";

const getSectionCodes = (course)=>{
    return course.sections.map((section)=>{
        return section.sectionCode;
    })
}

let PopOutSectionSelector = ({course}) => {
    console.log("given course is ", course);

    if (course == null) return(
        <React.Fragment></React.Fragment>
    );

    let sectionCodes = getSectionCodes(course);
    let courseName = course.courseCode;
    return (
        <React.Fragment key={uniqid()}>
            <div>
                the overlay for course {courseName} it has {sectionCodes} sections
            </div>
        </React.Fragment>
    )
}

export default PopOutSectionSelector;