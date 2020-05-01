import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
  Authorization: 'Client-ID yd7FE0Da0UzYaiRS8CVJ4jC0UBQjWa1UAAh4oyqbuF0'
  }
});