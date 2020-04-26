import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import photo from '../../photos_5.jpg'
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor:'#ffe6e6',
    },
    gridList: {
        width: "90%",
        height: 450,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        borderRadius:"20px 0 0 0",
        border:'1px solid #fa8484'
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
    title:{
        color:'#db4a39',
        fontSize:'28px',
        fontWeight:'bolder',
        textAlign:'center',
    }
}));


const tileData = [
    {
        img: photo,
        title: 'Image',
        author: 'McKenzie',
        featured: true,
    },
    {
        img: photo,
        title: 'Image',
        author: 'McKenzie',
        featured: true,
    },
    {
        img: photo,
        title: 'Image',
        author: 'McKenzie',
        featured: true,
    },
    {
        img: photo,
        title: 'Image',
        author: 'McKenzie',
        featured: true,
    },
    {
        img: photo,
        title: 'Image',
        author: 'McKenzie',
        featured: true,
    },
    {
        img: photo,
        title: 'Image',
        author: 'McKenzie',
        featured: true,
    },
    {
        img: photo,
        title: 'Image',
        author: 'McKenzie',
        featured: true,
    },
    {
        img: photo,
        title: 'Image',
        author: 'McKenzie',
        featured: true,
    }
];
export default function ProfileGallery() {
    const classes = useStyles();

    return (
        <Paper elevation={3} style={{marginTop:'20px',background: '#ffe6e6', border: '2px solid #fa8484'}}>
            <Typography className={classes.title}>
                Fotorelacja
            <hr/>
            </Typography>
            <div className={classes.root}>
                <GridList cellHeight={200} className={classes.gridList} cols={2}>
                    {tileData.map((tile) => (
                        <GridListTile style={{padding:'2px'}}  key={tile.img} cols={tile.cols || 1} >

                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                titlePosition="top"
                                actionIcon={
                                    <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                                        <StarBorderIcon />
                                    </IconButton>
                                }
                                actionPosition="left"
                                className={classes.titleBar}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
            <hr/>
        </Paper>

    );
}