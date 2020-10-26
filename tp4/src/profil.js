import React from "react";
import './profil.css';

function changeBack () {
    document.getElementById('borderProfil').style.background = "red";
}

function ChangeStyle() {

        return (
            <button onClick={() => changeBack()}> Change Style </button>
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
                <div className="borderProfil">
                    <div className="pic">
                        <ProfilPic value={props.value} />
                    </div>
                    <div>
                        <PersonnalInformation value={props.value} />
                    </div>
                    <div className="buttonContainer">
                        <ChangeStyle />
                    </div>
                </div>
                
            </div>
        );   
}

export default Profil;