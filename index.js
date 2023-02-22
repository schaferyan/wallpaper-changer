import { config } from "serpapi";
import * as dotenv from "dotenv";
import { changePaper } from "./wallpaper-changer.js";
import { scheduleJob } from "./scheduler.js";

dotenv.config();
config.api_key = process.env.SERPAPI_KEY;

const time = {
  second: 5,
  // hour: 0,
  // minute: 0,
  // dayOfWeek: 0,
  // tz: "PST"
};

const callback = () =>
  changePaper(
    "4k desktop wallpaper",
    "q:4k+desktop+wallpaper,g_1:aesthetic:FOiE___qTOw%3D"
  );

scheduleJob(callback, time);

// changePaper(
//   "4k desktop wallpaper",
//   "q:4k+desktop+wallpaper,g_1:nature:Vy6qxRTDEsA%3D"
// );
