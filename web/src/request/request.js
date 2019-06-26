import axios from 'axios'


export default axios.create({
  baseURL: window.link_keeper.url
})