// serverMiddleware/scrape.js
import axios from "axios";
import  cheerio from "cheerio" ;
import puppeteer  from "puppeteer"

async function cc (){

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://www.dgi.gouv.ci/#/');  // Update the URL to the actual URL of your Nuxt.js 3 app

    // Wait for Angular to load and render content
    await page.waitForFunction('document.querySelector("app-root")');

    const actualities = await page.evaluate(() => {
      const items = Array.from(document.querySelectorAll('.actualites-item'));

      return items.map(item => {
        const title = item.querySelector('.actualites-title').textContent.trim();
        const description = item.querySelector('.actualites-description').textContent.trim();
        return { title, description };
      });
    });

    console.log('Actualities:', actualities);

    await browser.close();
  } catch (error) {
    console.error('Error:', error.message);
  }
}
 export default defineEventHandler(async (event) => {
  console.log('New request: ' + getRequestURL(event))
  
//  cc()
  return
  try {
    // Make an HTTP request to the website
    const response =  await axios.get('https://www.dgi.gouv.ci/#/');

    // Load the HTML content into Cheerio
     const $ = cheerio.load(response.data);

     const actualities = [];

     $('.actualites-item').each((index, element) => {
       const title = $(element).find('.actualites-title').text().trim();
       const description = $(element).find('.actualites-description').text().trim();
 
       actualities.push({ title, description });
     });
 
    //  console.log('Actualities:', response.data);

  } catch (error) {
    console.error('Error:', error.message);
    // res.status(500).end('Internal Server Error');
  }

})

