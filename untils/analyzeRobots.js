import axios from "axios";

export default async function checkIndexing(links) {
  const results = [];

  for (const link of links) {
    try {
      const response = await axios.get(link);
      const isIndexed = response.data.includes('<meta name="robots" content="noindex">') ? false : true;
      results.push({ url: link, indexed: isIndexed });
    } catch (error) {
      results.push({ url: link, indexed: false });
    }
  }

  return results;

}
