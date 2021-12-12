import SubSection from "./SubSection";

export default class Section{
    //TODO, add more attributes:
        //consider add instructor class and instructor attribute
    /**
     * 
     * @param {string} sectionCode , something like T0101
     * @param {Array<Subsection>} subsections, array of Subsection objects
     * @param {*} size, the capacity of this section
     * @param {int} enrolment, the number of students enrolled
     */
    constructor(sectionCode, subsections, size, enrolment){
        this.sectionCode = sectionCode;
        this.subsections = subsections;
        this.size = size;
        this.enrolment = enrolment;
    }

    static fromJson(json){
        let times = json.times;
        let subSections = times.map((t) =>{
            return SubSection.fromJson(t);
        }) 
        return new Section(json.code, subSections, json.size, json.enrolment);
    }
}