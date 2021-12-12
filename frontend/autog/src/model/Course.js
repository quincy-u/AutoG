import Section from "./Section";

export default class Course{
//TODO implement the prerequisite, exclusion, ... attributes
    
    /**
     * 
     * @param {string} id, something like MIE367H1S20201
     * @param {string} courseCode, something like MIE367H1S
     * @param {string} courseName, something like Cases in Operations Research
     * @param {Array<Section>} sections, array of Section object
     */
    constructor(id, courseCode, courseName, sections){
        this.id = id;
        this.courseCode = courseCode;
        this.courseName = courseName;
        this.sections = sections;
    }

    /**
     * 
     * @param {Object} json, the response json object
     */
    static fromJson(json) {
        let sections = json.meeting_sections.map(
            (s)=>{
                return Section.fromJson(s);
            }
        )
        return new Course(json.id, json.code, json.name, sections);
    } 

}