import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e868c8fe859e4f40b87f489353775e4d",
  },
});
