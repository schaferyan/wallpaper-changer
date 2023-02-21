import { changePaper } from "./wallpaper-changer.js";
import * as schedule from "node-schedule"

export async function scheduleChange(q, chips){
    console.log("scheduling wallpaper change");
    const rule = new schedule.RecurrenceRule();
    rule.minute = 0;
    
    const job = schedule.scheduleJob(rule, function(){
        changePaper(q, chips);
    });
    
}