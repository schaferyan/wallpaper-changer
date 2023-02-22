import { getImageUrls } from "./image-search.js";
import { downloadImg } from "./image-downloader.js";
import { getWallpaper, setWallpaper } from "wallpaper";
import { writeJsonFile } from "write-json-file";
// import savedUrls from './image-urls.json' assert { type: 'json' };
import { readFile } from "fs/promises";
import { existsSync } from "fs";

export async function changePaper(q, chips) {
  let urls;

  // check whether the file where we save the urls exists
  const fileExists = existsSync("./image-urls.json");

  // if the file exists, parse the data from it into the "urls" variable
  if (fileExists) {
    const json = JSON.parse(
      await readFile(new URL("./image-urls.json", import.meta.url))
    );
    urls = json.urls;
  }

  // If the file doesn't exist or is empty, download the image urls and create/write the urls to the file
  if (!fileExists | !urls) {
    urls = await getImageUrls(q, chips); // search google images and extract the image urls
    await writeJsonFile("image-urls.json", { urls });
  }

  // select a random url from the array
  const randInt = Math.floor(Math.random() * urls.length);
  const randImgUrl = urls[randInt]["link"];

  // download the image
  const img = await downloadImg(randImgUrl);

  // set desktop wallpaper
  try{
    await setWallpaper(img);
  }catch(e){
    console.log("e");
  }

  // const wallpaper = await getWallpaper();
  // console.log(wallpaper);
}
