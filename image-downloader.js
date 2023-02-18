import * as download from "image-downloader"

export async function downloadImg(url){
    
const options = {
  url,
  dest: 'C:\\Users\\schaf\\git-repos\\wallpaper-changer\\img',   
};
let img;
await download.image(options)
  .then(({ filename }) => {
    console.log('Saved to', filename);
    img = filename.toString();
  })
  .catch((err) => console.error(err))
return img;  
  
}

