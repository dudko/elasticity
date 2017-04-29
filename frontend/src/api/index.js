import { BASE_URL } from '../constants/URLs';

const elateAnalyse = (cb, elasticity) => {
  const http = new XMLHttpRequest();
  http.open("POST", `${BASE_URL}/api/elateAnalyse`, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.onerror = (e) => console.log(e);
  
  http.onload = function () {
    const tables = JSON.parse(this.response);
    cb(tables);
  }
  http.send(JSON.stringify({ matrix: elasticity }));
}

export {
  elateAnalyse
}