import http from "k6/http";

export const options = {
  vus: 5,
  iterations: 5,
};

export default function () {
  http.get("http://api.zippopotam.us/us/32114");
}
