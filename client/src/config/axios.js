import axios from "axios";
const headers = {
  "Content-Type": "application/json",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

// export default axios.create({ baseURL: 'https://api.zunavish.com',headers });
export default axios.create({
  baseURL: "http://localhost:4192/api/v1",
  headers,
});
// export default axios.create({ baseURL: 'https://82d3d891-c06a-449b-b98d-74289d3de0b6.mock.pstmn.io/',headers });
