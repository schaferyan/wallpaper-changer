import { changePaper } from "./wallpaper-changer.js";
import * as schedule from "node-schedule"


export async function scheduleJob(callback, time){

    console.log("scheduling wallpaper change");
    
    // create a RecurrenceRule Object to define when you want the job to repeat
    const rule = new schedule.RecurrenceRule(); 
    
    // copy the properties from the time object to the RecurrenceRule instance
    Object.assign(rule, time); 
    
    // schedule the job
    schedule.scheduleJob(rule, callback); 
}