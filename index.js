import {getImageUrls} from "./image-search.js"
import { downloadImg } from "./image-downloader.js";
import { config, getJson, getJsonBySearchId } from "serpapi";
import * as dotenv from "dotenv";
import {getWallpaper, setWallpaper} from 'wallpaper';


dotenv.config();
config.api_key = process.env.SERPAPI_KEY;

/*get urls for images usng serpapi google images api and store them in a file
select a random image url from the file and download it with image-downloader
use cron to schedule this as a reocurring task 
*/

const urls = await getImageUrls("pizza");
// console.log(urls);
const randInt = Math.floor(Math.random() * urls.length);
const randImgUrl = urls[randInt]["link"];
const img = await downloadImg(randImgUrl);

console.log(img);
await setWallpaper(img);
const wallpaper = await getWallpaper();
console.log(wallpaper)