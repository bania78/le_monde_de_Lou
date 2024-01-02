import CardList_copy from '../../components/CardList/CardList_copy';
import './Accueil_coach.css'

function Accueil_coach() {
    return (
        <div className='accueil_pok'>
            <div className='div_content' id="pok">
                <h2 className='h2_pres'>Présentation</h2>
                <p>Voici une rapide présentation de mes expériences en tant qu'entraineur de football virtuel.</p>
                <p>C'est un résumé de différents challenges ou histoire que j'ai réalisé sur FIFA ou encore Football Manager.</p>
            </div>
            <CardList_copy>
            </CardList_copy>
        </div>
    );
}

export default Accueil_coach;
