import {getImageUrls} from "./image-search.js"
import { downloadImg } from "./image-downloader.js";

import {getWallpaper, setWallpaper} from 'wallpaper';


export async function changePaper(q, chips){
    
    const urls = await getImageUrls(q, chips);
    // console.log(urls);
    const randInt = Math.floor(Math.random() * urls.length);
    const randImgUrl = urls[randInt]["link"];
    const img = await downloadImg(randImgUrl);

    console.log(img);
    await setWallpaper(img);
    const wallpaper = await getWallpaper();
    console.log(wallpaper);

} 

