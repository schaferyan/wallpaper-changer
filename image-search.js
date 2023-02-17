import { config, getJson, getJsonBySearchId } from "serpapi";




export async function getImageResults(q, chips){
    // The parameters we will include in the the GET request
    
  const params = {
    q: q,
    location: "Austin, Texas, United States",
    google_domain: "google.com",
    gl: "us",
    hl: "en",
    chips: chips,
    tbm: "isch",
  };


  // here we call the API and wait for it to return the data
  const data = await getJson("google", params);
  return data;
}

export async function getImageUrls(q, chips){
    const results = await getImageResults(q, chips);
    const urls = results.images_results.map(img => {
        return {link: img.original, title: img.title}
    });
    return urls;
}