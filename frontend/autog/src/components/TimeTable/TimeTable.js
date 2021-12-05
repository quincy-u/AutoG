import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./TimeTable.css";
const TimeTable = () => {
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
                    <tr className="t0">
                        <td rowspan="4" className="line">
                            8:00
                        </td>
                        <td className="line"></td>
                        <td className="line"></td>
                        <td className="line"></td>
                        <td className="line"></td>
                        <td className="line"></td>
                    </tr>
                    <tr className="t1">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="t2">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="t3">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>


                    <tr className="t4">
                        <td rowspan="4" className="line">
                            9:00
                        </td>
                        <td className="line"></td>
                        <td className="line"></td>
                        <td className="line"></td>
                        <td className="line"></td>
                        <td className="line"></td>
                    </tr>
                    <tr className="t5">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="t6">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="t7">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr className="t8">
                        <td rowspan="4" className="line">
                            10:00
                        </td>
                        <td className="line"></td>
                        <td className="line"></td>
                        <td className="line"></td>
                        <td className="line"></td>
                        <td className="line"></td>
                    </tr>
                    <tr className="t9">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="t10">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="t11">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TimeTable;
