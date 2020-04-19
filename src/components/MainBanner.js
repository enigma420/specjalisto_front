import React, {Component} from 'react';
import block_banner from '../photos_5.jpg';
import Search from "./Search";
class MainBanner extends Component {
    render() {
        return (
            <div className="container-lg" style={{position:'relative'}}>
                <img src={block_banner} className="banner" style={{width:'100%',display:'block',position:'relative'}}/>
                <div className="text-block" style={{overflow: "hidden"}}>

                   <Search/>
                </div>
            </div>
        );
    }
}

export default MainBanner;