const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());



app.post('/api/analyze-meta', async (req, res) => {
  try {
    const url = req.body.url;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const metaTags = [];
    $('meta').each((index, element) => {
      const name = $(element).attr('name');
      const content = $(element).attr('content');
      metaTags.push({ name, content });
    });

    const analysisResult = {
      metaTags,
      characterCount: data.length,
    };

    res.json(analysisResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

async function analyzeLinks(links) {
  const results = await Promise.all(links.map(async (url) => {
    try {
      const { request } = await axios.head(url, { maxRedirects: 10, validateStatus: null });
      const redirectUrl = request.res.responseUrl;
      const redirectType = request.res.statusCode;

      return {
        url,
        redirectUrl,
        redirectType,
      };
    } catch (error) {
      console.error(`Error analyzing ${url}: ${error.message}`);
      return {
        url,
        error: 'Failed to analyze',
      };
    }
  }));

  return results;
}

app.post('/api/analyze-links', async (req, res) => {
  try {
    const url = req.body.url;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const baseUrl = new URL(url);

    const links = [];
    $('a').each((index, element) => {
      const href = $(element).attr('href');
      const absoluteUrl = new URL(href, baseUrl).toString();
      links.push(absoluteUrl);
    });

    const analysisResult =  await analyzeLinks(links);

    
    // console.log(analysisResult)

    res.json(analysisResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





