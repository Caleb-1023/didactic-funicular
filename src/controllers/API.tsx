import axios from "axios";

export const API = axios.create({
    baseURL: "http://165.232.123.217:8079/api/v1/",
    headers: {
        "Content-type": "application/json",
        // Authorization: `Bearer ${data}`,
        "Access-Control-Allow-Origin": "*",
      },
})