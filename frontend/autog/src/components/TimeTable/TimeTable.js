import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./TimeTable.css";
import uniqid from "uniqid";
import CourseCard from "../CourseCard/CourseCard";

const TimeTable = () => {
    let timeRange = Array.from(Array(21).keys()).slice(8);
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

                <CourseCard
                    startTime="10:00"
                    endTime="11:00"
                    weekDay={2}
                ></CourseCard>
            </div>
        </div>
    );
};

export default TimeTable;
