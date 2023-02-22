import {getImageUrls} from "./image-search.js"
import { downloadImg } from "./image-downloader.js";
import {getWallpaper, setWallpaper} from 'wallpaper';
import {writeJsonFile} from 'write-json-file';
// import savedUrls from './image-urls.json' assert { type: 'json' };
import { readFile } from 'fs/promises';
import { existsSync } from "fs";

export async function changePaper(q, chips){
    
    let urls;

    const fileExists = existsSync('./image-urls.json')
    
    if(fileExists){
        const json = JSON.parse(
            await readFile(
              new URL('./image-urls.json', import.meta.url)
            )
          );
        urls = json.urls;
    }

    if(!fileExists | !urls){
        urls = await getImageUrls(q, chips);  // search google images and extract the image urls
        await writeJsonFile('image-urls.json', {urls});
    }

    const randInt = Math.floor(Math.random() * urls.length); // select a random url from the array 
    const randImgUrl = urls[randInt]["link"];
    
    const img = await downloadImg(randImgUrl); // download the image
    
    await setWallpaper(img); // set desktop wallpaper

    const wallpaper = await getWallpaper();
    console.log(wallpaper);
} 

