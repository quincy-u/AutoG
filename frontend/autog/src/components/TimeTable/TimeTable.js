import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./TimeTable.css";
import uniqid from 'uniqid';

const TimeTable = () => {
    let timeRange = Array.from(Array(21).keys()).slice(8);
    console.log(timeRange);
    return (
        <div>
            <p>this is the time table </p>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col" className="col-lg-1">
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
                <tbody>
                    {timeRange.map((t) => (
                        <React.Fragment key={uniqid()}>
                            <tr className={`t${(t - 8) * 4}`}>
                                <td rowSpan="4" className="line">
                                    {t}:00
                                </td>
                                <td className="line"></td>
                                <td className="line"></td>
                                <td className="line"></td>
                                <td className="line"></td>
                                <td className="line"></td>
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
        </div>
    );
};

export default TimeTable;
