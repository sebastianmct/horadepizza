
import { pizzas, users, orders } from "../data/mockData";

function matchUrl(url) {
  if (!url) return null;
  url = String(url);
  if (url.includes("/pizzas")) return { type: "pizzas" };
  if (url.includes("/users")) return { type: "users" };
  if (url.includes("/orders")) return { type: "orders" };
  if (url.includes("/auth") || url.includes("/login")) return { type: "auth" };
  return null;
}

export function installMocks() {

  if (typeof window !== "undefined" && window.fetch) {
    const realFetch = window.fetch.bind(window);
    window.fetch = (input, init) => {
      try {
        const url = typeof input === "string" ? input : input?.url;
        const m = matchUrl(url);
        if (m) {
          const res = { pizzas, users, orders };
          const body = JSON.stringify(res[m.type]);
          return Promise.resolve(new Response(body, { status: 200, headers: { "Content-Type": "application/json" } }));
        }
      } catch (e) {

      }
      return realFetch(input, init);
    };
  }

  try {

    const axios = require("axios");
    if (axios) {
      const wrap = (dataProvider) => (url, ...rest) => {
        const m = matchUrl(url);
        if (m) {
          const res = { pizzas, users, orders };
          return Promise.resolve({ data: res[m.type] });
        }
        
        return axios.request({ url, method: "get", ...rest }).catch(err => Promise.reject(err));
      };
      axios.get = wrap();
      axios.post = (url, payload, ...rest) => {
        const m = matchUrl(url);
        if (m && m.type === "orders") {
  
          const newOrder = { id: orders.length + 1, ...payload };
          orders.push(newOrder);
          return Promise.resolve({ data: newOrder });
        }
        return Promise.resolve({ data: {} });
      };
    }
  } catch (e) {
    
  }
}
export default installMocks;