import express from 'express';
import request from 'request';
import cheerio from 'cheerio';
import cron from 'node-cron';
import supabase  from './config/supabaseClient';

const app = express();


interface JobListing {
  company: string;
  title: string;
  location: string;
  link?: string;
}

// The URLs of the career pages of the hiring companies
const urls = [
  'https://boards.greenhouse.io/quiknodeinc',
  'https://boards.greenhouse.io/aptoslabs',
  'https://boards.greenhouse.io/moonpay',
];

const fetchJobs = async (): Promise<void> => {
  console.log('running...');
  const jobListings: JobListing[] = [];

  // Scrap all URLs at once and store the result to  jobListings
  try {
    Promise.all(
      urls.map(
        (company: string) =>
          new Promise<string>((resolve) =>
            request(company, (_error: any, _response: any, html: string | PromiseLike<string>) => resolve(html)),
          ),
      ),
    ).then((htmls) => {
      htmls.forEach((html: string, _index: number) => {
        const $ = cheerio.load(html);
        const listings = $('.opening');
        listings.each((_i, el) => {
          const title = $(el).find('a[data-mapped="true"]').text();
          const location = $(el).find('.location').text();
          const link = $(el).find('a[data-mapped="true"]').attr('href');
          const name = $('h1').text();

          jobListings.push({ company: name, title, location, link });
        });
      });

      // Init the connection to supabase and store the data to supabase scraped from the hiring companies
      const initSupabase = async (): Promise<void> => {
        const { data, error } = await supabase
          .from('scraper')
          .upsert([{ jobs: jobListings }])
          .select();
        console.log(error);
        console.log(data);
      };
      initSupabase();
    });
  } catch (error) {
    console.error(error);
  }
};

// Schedule fetchJobs to run at midnight
cron.schedule('0 0 * * *', fetchJobs);

export default app;
