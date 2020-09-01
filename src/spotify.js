export const authEndpoint= "https://accounts.spotify.com/authorize";

const redirectUri = "https://spotify-clone-338bc.web.app/";

const clientId= "e30a40e163864e4cbbbca8d717fd871f";


const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  export const getTokenFromUrl=()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((acc,cur)=>{
      let parts=cur.split('=');
      acc[parts[0]] = decodeURIComponent(parts[1]);
      return acc;
    },{})
  }


export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;