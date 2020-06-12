import React, {Component} from 'react';
import block_banner from '../../photos_5.jpg';
import Search from "./Search";
class MainBanner extends Component {
    render() {
        return (
            <div className="container-lg" style={{position:'relative',textAlign:'center'}}>
                <img src={block_banner} className="banner" style={{display:'inline-block'}} alt="Main_Banner"/>
                <div className="text-block" style={{overflow: "hidden"}}>
                   <Search/>
                </div>
            </div>
        );
    }
}

export default MainBanner;