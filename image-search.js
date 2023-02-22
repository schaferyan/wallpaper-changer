import { getJson } from "serpapi";

export async function getImageResults(q, chips) {
  // The parameters we will include in the the GET request
  const params = {
    q: q,
    location: "Bellingham, Washington, United States",
    google_domain: "google.com",
    gl: "us",
    hl: "en",
    chips: chips,
    tbm: "isch",
  };

  // call the API and wait for it to return the data
  const data = await getJson("google", params);
  return data;
}

export async function getImageUrls(q, chips) {
  // perform the search and store the results in a variable
  const results = await getImageResults(q, chips);

  // extract the image urls and titles and store them in an array of Objects
  const urls = results.images_results.map((img) => {
    return { link: img.original, title: img.title };
  });
  return urls;
}
