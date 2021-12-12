export default class SubSection{

    static WEEKDAY_MAP = {"MONDAY": 1, "TUESDAY": 2, "WEDNESDAY": 3, "THURSDAY": 4, "FRIDAY": 5};
    /**
     * 
     * @param {string} day, string, like "WEDNESDAY"
     * @param {int} startTime, in second of a day
     * @param {int} endTime, in second of a day
     * @param {string} location, like "MB 123"
     */
    constructor(day, startTime, endTime, location) {
        this.day = day;
        this.startTime = startTime;
        this.endTime = endTime;
        this.location = location;
    }

    static calculateTime(time){
        //get the min as the unit 
        time /= 60;
        //get minute number
        let min = time % 60;
        //get hour number
        let hour = (time - min) / 60;
        return `${hour}:${min}`;
    }

    static fromJson(json){
        return new SubSection(SubSection.WEEKDAY_MAP[json.day], this.calculateTime(json.start), this.calculateTime(json.end), json.location);
    }
}