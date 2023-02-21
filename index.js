import { config} from "serpapi";
import * as dotenv from "dotenv";
import { changePaper } from "./wallpaper-changer.js";
import { scheduleChange} from "./scheduler.js";

dotenv.config();
config.api_key = process.env.SERPAPI_KEY;

// changePaper("4k desktop wallpaper", "q:4k+desktop+wallpaper,g_1:nature:Vy6qxRTDEsA%3D");

scheduleChange("4k desktop wallpaper", 
"q:4k+desktop+wallpaper,g_1:nature:Vy6qxRTDEsA%3D");

