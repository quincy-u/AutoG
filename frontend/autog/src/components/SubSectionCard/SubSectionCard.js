import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import uniqid from "uniqid";

//TODO: finish the function
/**
 * generate
 * @param {Section} section, represent a section, see model/README.md for explanation
 */
export const getAllSubSectionsGivenSection = (section) => {
    return (
        <React.Fragment key={uniqid()}>
            {section.subsections.map((subsection) => (
                <SubSectionCard
                    startTime={subsection.startTime}
                    endTime={subsection.endTime}
                    weekDay={subsection.day}
                    key={uniqid()}
                ></SubSectionCard>
            ))}
        </React.Fragment>
    );
};

const SubSectionCard = ({ startTime, endTime, weekDay }) => {
    const [TOP_PERCENT, LEFT_PERCENT, WIDTH_PERCENT, HIGHT_PERCENT] = [
        100 / 52,
        100 / 6,
        100 / 6,
        100 / 52,
    ];
    const START_TIME = "8:00";
    /**
     *
     * @param {string} time1
     * @param {string} time2
     * @returns time difference, in #quarter from time1 to time2
     */
    const timeDifference = (time1, time2) => {
        let [h1, m1] = time1.split(":");
        let [h2, m2] = time2.split(":");
        [h1, h2, m1, m2] = [
            parseInt(h1),
            parseInt(h2),
            parseInt(m1),
            parseInt(m2),
        ];
        return (h2 - h1) * 4 + (m2 - m1) / 15;
    };

    /**
     * startTime is String, like "10:00", and is quarter based
     * endTime is String, like "12:00", and is quarter based
     * weekDay is an int, one of [1,2,3,4,5]
     * input param: {Object{String, String, int}}
     * return a css string, representing the location of this object
     */
    const getStyle = (startTime, endTime, weekDay) => {
        let top = timeDifference(START_TIME, startTime) * TOP_PERCENT;
        let left = weekDay * LEFT_PERCENT;
        let height = timeDifference(startTime, endTime) * HIGHT_PERCENT;
        let width = WIDTH_PERCENT;
        return {
            width: `${width}%`,
            height: `${height}%`,
            top: `${top}%`,
            left: `${left}%`,
            position: "absolute",
            zIndex: 0,
        };
    };

    return (
        <div
            className="card"
            style={getStyle(startTime, endTime, weekDay)}
            key={uniqid()}
        >
            SubSectionCard card, from {startTime} to {endTime} on weekday{" "}
            {weekDay}
        </div>
    );
};

export default SubSectionCard;
