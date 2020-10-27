import React from "react";
import './profil.css';

function changeBack (props) {
    var randomColor = require('randomcolor');
    var color = randomColor();
    document.getElementById('backgroud-color').style.background = color;
    props.value.profilColor = color;
}

function ChangeStyle(props) {

        return (
            <button onClick={() => changeBack(props)}> Change Style </button>
        );
        
}

function renderBackgroud (props) {
    return (
        document.getElementById('backgroud-color').style.background = props.value.profilColor
    );
}

function PersonnalInformation (props) {
        return (
            <div >
                <div className="description">
                    <div className="text">
                        Prenom : {props.value.Prenom}
                    </div>
                    <div className="text">
                        Nom : {props.value.nom}
                    </div>
                </div>
                <div className="text">
                    <div>Date de Naissance : {props.value.date}</div>
                    
                </div>
            </div>
        );
}

function ProfilPic(props) {
        return (
            <img src={props.value.picName} className="dot"/>
        );
}

function Profil (props) {
        return (
            <div className="profil">
                <div className="borderProfil" id="backgroud-color">
                    {renderBackgroud(props)}
                    <div className="pic">
                        <ProfilPic value={props.value} />
                    </div>
                    <div>
                        <PersonnalInformation value={props.value} />
                    </div>
                    <div className="buttonContainer">
                        <ChangeStyle value={props.value}/>
                    </div>
                </div>
                
            </div>
        );   
}

export default Profil;