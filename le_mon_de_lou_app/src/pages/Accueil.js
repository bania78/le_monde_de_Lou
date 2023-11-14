import CardList from '../components/CardList/CardList';
import Pres from '../components/Pres/Pres';
import './Accueil.css'

function Accueil() {
    return (
        <div className='accueil'>
            <Pres></Pres>
            <h2>Mes univers</h2>
            <CardList>
            </CardList>
        </div>
    );
}

export default Accueil;
