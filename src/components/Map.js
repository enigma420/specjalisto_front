import React, {Component} from 'react';


export default class Map extends Component {


    render() {

        return (
            <div className="container" style={{background:'wheat'}}>
                <span id="demo-agents">
                    <ul>
                        <li id="mazowieckie">
                            <p>Województwo Mazowieckie</p>
                            <h6>Stan: 12853 Specjalistów</h6>
                        </li>
                        <li id="opolskie">
                           <p>Województwo Opolskie</p>
                            <h6>Stan: 3859 Specjalistów</h6>
                        </li>
                    </ul>
                </span>
            <div id="map-poland">
                <ul className="poland" >
                    <li className="pl1"><a href="#dolnoslaskie">Dolnośląskie</a></li>
                    <li className="pl2"><a href="#kujawsko-pomorskie">Kujawsko-pomorskie</a></li>
                    <li className="pl3"><a href="#lubelskie">Lubelskie</a></li>
                    <li className="pl4"><a href="#lubuskie">Lubuskie</a></li>
                    <li className="pl5"><a href="#lodzkie">Łódzkie</a></li>
                    <li className="pl6"><a href="#malopolskie">Małopolskie</a></li>
                    <li className="pl7"><a href="#mazowieckie">Mazowieckie</a></li>
                    <li className="pl8"><a href="#opolskie">Opolskie</a></li>
                    <li className="pl9"><a href="#podkarpackie">Podkarpackie</a></li>
                    <li className="pl10"><a href="#podlaskie">Podlaskie</a></li>
                    <li className="pl11"><a href="#pomorskie">Pomorskie</a></li>
                    <li className="pl12"><a href="#slaskie">Śląskie</a></li>
                    <li className="pl13"><a href="#swietokrzyskie">Świętokrzyskie</a></li>
                    <li className="pl14"><a href="#warminsko-mazurskie">Warmińsko-mazurskie</a></li>
                    <li className="pl15"><a href="#wielkopolskie">Wielkopolskie</a></li>
                    <li className="pl16"><a href="#zachodniopomorskie">Zachodniopomorskie</a></li>
                </ul>
            </div>

            </div>
        );
    }
}


