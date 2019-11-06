import axios from 'axios';

export const loadApi = () => {
  return axios.get(`api-bilboard.json?callback=birthday.loadSongList`)
  .then(res => {
    const songsJson = res.data;
    return songsJson;
  })
  .catch((error) => {
    console.log(error.message);
  });

}
export default loadApi;
