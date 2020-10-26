import Profil from './profil';
import React from 'react';
import LastPost from './lastPost';
import Louis_Roussel from './profils/Louis_Roussel.jpg';
import Lucas_Dessouki from './profils/Lucas_Dessouki.jpg';
import Maylinh_Grand from './profils/Maylinh_Grand.jpg';
import './container.css';

const Containers = [
    {
        picName : Louis_Roussel,
        nom : 'Roussel',
        Prenom : 'Louis',
        date : '13/01/98',
        post1 : '"Maman, Maman! Le banquier est là. Tu as l’argent ou bien je dois aller jouer dehors?”',
        post2 : 'on se demandait tous d’où venait sa reput’ de tombeur, nous voila sur une bonne piste !',
        post3 : 'Il est l’Or de se réveiller ! #louisdefunès #réveilécologique #tréso',
    },
    {
        picName : Lucas_Dessouki,
        nom : 'Dessouki',
        Prenom : 'Lucas',
        date : '10/09/98',
        post1 : 'L E G E N D A R Y',
        post2 : 'E D I T I ON',
        post3 : 'https://www.youtube.com/watch?v=wAUK9hVgmNI&feature=share'
    },
    {
        picName : Maylinh_Grand,
        nom : 'Grand',
        Prenom : 'Maylinh',
        date : '20/01/99',
        post1 : '" En mer ou dans votre verre, les mouettes n’auront jamais pied. "',
        post2 : 'Facebook : https://www.facebook.com/noiseece/',
        post3 : 'Insta : https://instagram.com/noiseece?igshid=1g7as6tqsnd3c'
    }
];

class Container extends React.Component {
    
    constructor (props) {
        super(props)
        this.state = Containers[0];
    }
    renderProfil(){
        return (
            <Profil value={this.state} />
        );
    }

    renderPost(){
        return(
            <LastPost value={this.state} />
        );
    }
    changeProfil(i){
        this.setState(Containers[i]);
    }
    
    render() {
        return(
            <div className="container">
                <div className="allButtons">
                    <button 
                        onClick={() => this.changeProfil(0)} 
                        className="bouton">
                            Louis
                    </button>

                    <button 
                        onClick={() => this.changeProfil(1)} 
                        className="bouton">
                            Lucas
                    </button>

                    <button 
                        onClick={() => this.changeProfil(2)} 
                        className="bouton">
                            Maylinh
                    </button>
                </div>
                
                {this.renderProfil()}

                <div className="post">
                    <div className="borderPost">
                        {this.renderPost()}
                    </div>
                </div>
                

            </div>
            
        );
    }
}

export default Container;