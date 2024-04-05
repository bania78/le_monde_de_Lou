import CardListPok from '../../components/CardList/CardListPok';
import chrono from './../../assets/chrono.png';
import './Accueil_pok.css'

function Accueil_pok() {
    return (
        <div className='accueil_pok'>
            <div className='div_content' id="pok">
                <h2 className='h2_pres'>Présentation</h2>
                <p>Voici une rapide présentation de mon univers dans le monde de Pokemon.</p>
                <p>Le phrise ci-dessous représente les évenements majeurs que se sont déroulé dans le monde avant nos jours par rapport aux jeux. Néanmoins toute la trame est détaillé dans <a className='link' href={`/pokemon/history`}>la page histoire.</a></p>
                <img className="card_img" src={chrono} alt="chrono"/>
                <h2 className='h2_pres'>Mes histoires</h2>
                <CardListPok>
                </CardListPok>
            </div>
        </div>
    );
}

export default Accueil_pok;
