import { config } from "serpapi";
import * as dotenv from "dotenv";
import { changePaper } from "./wallpaper-changer.js";
import { scheduleJob } from "./scheduler.js";
import { getImageUrls } from "./image-search.js";
import { downloadImg } from "./image-downloader.js";

dotenv.config();
config.api_key = process.env.SERPAPI_KEY;

const time = {
  second: 0,
//   hour: 0,
//   minute: 0,
//   dayOfWeek: 0,
//   tz: "PST"
};

const callback = () =>
  changePaper(
    "4k desktop wallpaper",
    "chips=q:desktop+wallpaper+4k,g_1:nature:uPhOf0Whosk%3D"
  );

scheduleJob(callback, time);

// changePaper(
//   "4k desktop wallpaper",
//   "q:4k+desktop+wallpaper,g_1:nature:Vy6qxRTDEsA%3D"
// );

// const results = await getImageUrls("4k desktop wallpaper", "q:4k+desktop+wallpaper,g_1:nature:Vy6qxRTDEsA%3D");
// // console.log(results);
// const randInt = Math.floor(Math.random() * urls.length);
// const randImgUrl = urls[randInt]["link"];
// downloadImg(randImgUrl);
