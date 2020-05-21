import fetch from 'node-fetch';

const PROXY_SEO_URL = 'https://nodejs-nmd-crawler.herokuapp.com/proxy/seo?url=';

class Proxy { 
  static async getSEOFromUrl(url) {
    const response = await fetch(`${PROXY_SEO_URL}${url}`);
    const jsonData = await response.json();
    return jsonData;
  }; 
};

export default Proxy;
