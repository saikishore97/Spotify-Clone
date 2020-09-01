import React from 'react';
import './Footer.styles.css'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
import {useDataLayerValue} from './DataLayer';

function Footer() {

    const [{discover_weekly},dispatch] = useDataLayerValue();

    return (
        <div className="footer">

            <div className="footer__left">
                <img className="footer__albumimg" src={discover_weekly?.images[0].url} alt=""/>
                <div className="footer__songinfo">
                    <h4>Share That Love(feat. G-Eazy)</h4>
                    <p>Lukas Graham,G-Eazy</p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon"/>
                <PlayCircleOutlineIcon className="footer__icon" fontSize="large"/>
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green"/>
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>

            </div>

        </div>
    )
}

export default Footer;
