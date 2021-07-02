import BaseApi from "./BaseApi";
import axios from 'axios';

class BlogApi extends BaseApi{

  constructor(accessToken) {
    super(accessToken, '/blogs');
  }
  
}



export default BlogApi;