import React,{useEffect} from 'react';
import './App.css'; 
import LoginPage from './Login.page';
import {getTokenFromUrl} from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player.page';
import {useDataLayerValue} from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {


  const [{token},dispatch] = useDataLayerValue();



  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash="";
    const _token = hash.access_token;


    if(_token){

      spotify.setAccessToken(_token);

      dispatch({
        type:'SET_TOKEN',
        payload:_token,
      })


      spotify.getMe().then((user)=>{
        
        dispatch({
          type:'SET_USER',
          payload:user,
        });


      });

      spotify.getUserPlaylists().then((playlists)=>{
        
        dispatch({
          type:'SET_PLAYLISTS',
          payload:playlists,
        });

      });

      spotify.getPlaylist("37i9dQZF1DX3rxVfibe1L0").then((response) =>{
        
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          payload: response,
        });

      });
        
        


      }

  },[token,dispatch]);


  return (
    <div className="App">
      {
        token ? <Player spotify={spotify}/> : <LoginPage/>
      }
    </div>
  );
}

export default App;
