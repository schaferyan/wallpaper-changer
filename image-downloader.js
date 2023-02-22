import * as download from "image-downloader"

export async function downloadImg(url){

  //specify a url and the path to where you want to store the image
const options = { 
  url,
  dest: process.env.PATH_TO_IMG   
};

let img;

// download the image
await download.image(options) 
  .then(({ filename }) => {
    console.log('Saved to', filename);
    img = filename.toString();
  })
  .catch((err) => console.error(err))

// return the filename so we can find the image later   
return img; 
  
}

