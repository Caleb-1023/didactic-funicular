import axios from "axios";

export const API = axios.create({
    baseURL: "https://api.yinka.tech/api/v1/",
    headers: {
        "Content-type": "application/json",
        // Authorization: `Bearer ${data}`,
        "Access-Control-Allow-Origin": "*",
      },
})