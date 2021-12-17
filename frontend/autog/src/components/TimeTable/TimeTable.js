import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./TimeTable.css";
import uniqid from "uniqid";
import SubSectionCard, {
    getAllSubSectionsGivenSection,
} from "../SubSectionCard/SubSectionCard";
import Course from "../../model/Course";
import Section from "../../model/Section";
import SubSection from "../../model/SubSection";
//TODO remove the test function when finish
//===========

function fetchData(path) {
    return fetch(path).then((res) => {
        return res.json();
    });
}

const getAllSubSectionsGivenSections = (sections) => {
    return (
        <React.Fragment key={uniqid()}>
            {sections.map((section) => {
                return getAllSubSectionsGivenSection(section);
            })}
        </React.Fragment>
    );
};

const test = () => {
    let promise1 = fetchData("./hardCodeData/Example.json");
    promise1
        .then((json) => {
            let c = Course.fromJson(json);
            console.log(c);
        })
        .catch((message) => {
            console.log(message);
            console.log("promise failed");
        });

    let promise2 = fetchData("./hardCodeData/SubSectionExample.json");
    promise2.then((json) => {
        let ss = SubSection.fromJson(json);
        console.log(ss);
    });

    let promise3 = fetchData("./hardcodeData/SectionExample.json");
    promise3.then((json) => {
        let s = Section.fromJson(json);
        console.log(s);
    });
};

//==========
const TimeTable = () => {
    let timeRange = Array.from(Array(21).keys()).slice(8);

    //TODO remove this useEffect hook after adding formal testcases
    useEffect(() => {
        test();
        let promise1 = fetchData("./hardCodeData/Example.json");
        promise1
            .then((json) => {
                let c = Course.fromJson(json);
                setSelectedSections(c.sections);
            })
            .catch((message) => {
                console.log(message);
                console.log("promise failed");
            });
    }, []);

    const [selectedSections, setSelectedSections] = useState([]);

    return (
        <div>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col" className="col-lg-2">
                            Winter
                        </th>
                        <th scope="col" className="col-lg-2">
                            Mon
                        </th>
                        <th scope="col" className="col-lg-2">
                            Tue
                        </th>
                        <th scope="col" className="col-lg-2">
                            Wed
                        </th>
                        <th scope="col" className="col-lg-2">
                            Thu
                        </th>
                        <th scope="col" className="col-lg-2">
                            Fri
                        </th>
                    </tr>
                </thead>
            </table>
            <div style={{ position: "relative" }}>
                <table className="table table-borderless">
                    <tbody>
                        {timeRange.map((t) => (
                            <React.Fragment key={uniqid()}>
                                <tr className={`t${(t - 8) * 4}`}>
                                    <td rowSpan="4" className="line col-lg-2">
                                        {t}:00
                                    </td>
                                    <td className="line col-lg-2"></td>
                                    <td className="line col-lg-2"></td>
                                    <td className="line col-lg-2"></td>
                                    <td className="line col-lg-2"></td>
                                    <td className="line col-lg-2"></td>
                                </tr>
                                <tr className={`t${(t - 8) * 4 + 1}`}>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className={`t${(t - 8) * 4 + 2}`}>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className={`t${(t - 8) * 4 + 3}`}>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
                {getAllSubSectionsGivenSections(selectedSections)}
            </div>
        </div>
    );
};

export default TimeTable;
