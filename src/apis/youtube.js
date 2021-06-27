import axios from 'axios';

const KEY = 'AIzaSyBcbvtKICjp6H7P5pE-Y6pn4CeGGXTencw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: KEY
    }
});