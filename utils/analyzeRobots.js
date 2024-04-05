import axios from "axios";

export default async function checkIndexing(links) {
  const results = [];

  for (const link of links) {
    try {
      const response = await axios.get(link);
      const isIndexed = !response.data.includes(
        '<meta name="robots" content="noindex">'
      );
      results.push({
        url: link,
        indexed: isIndexed ? "Indexed" : "Not Indexed",
      });
    } catch (error) {
      results.push({ url: link, indexed: "Error" });
    }
  }

  return results;
}
