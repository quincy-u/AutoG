export default class Course{
//TODO implement the prerequisite, exclusion, ... attributes
    
    /**
     * 
     * @param {string} id, something like MIE367H1S20201
     * @param {*} courseCode, something like MIE367H1S
     * @param {*} courseName, something like Cases in Operations Research
     */
    constructor(id, courseCode, courseName){
        this.id = id;
        this.courseCode = courseCode;
        this.courseName = courseName;
    }

    /**
     * 
     * @param {Object} json, the response json object
     */
    static fromJson(json) {
        return new Course(json.id, json.code, json.name);
    } 

}