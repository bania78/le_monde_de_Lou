import CardList_agot from '../../components/CardList/CardList_agot';
import './Accueil_agot.css'

function Accueil_agot() {
    return (
        <div className='accueil_pok'>
            <div className='div_content' id="pok">
                <h2 className='h2_pres'>Présentation</h2>
                <p>Voici une rapide présentation de mes expériences sur Crusader Kings 3 avec le mod AGOT.</p>
            </div>
            <CardList_agot>
            </CardList_agot>
        </div>
    );
}

export default Accueil_agot;
