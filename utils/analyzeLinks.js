import axios from "axios";
export default async function analyzeLinks(links) {
    const results = await Promise.all(
      links.map(async (url) => {
        try {
          const { request } = await axios.head(url, {
            maxRedirects: 10,
            validateStatus: null,
          });
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
            error: "Failed to analyze",
          };
        }
      })
    );
  
    return results;
  }