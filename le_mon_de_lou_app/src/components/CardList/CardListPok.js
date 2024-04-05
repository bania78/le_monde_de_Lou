import CardPok from '../Card/CardPok';
import './CardList.css'

function CardListPok() {
    return (
        <div className="CardList">
            <ul className='ul_cardlist'>
                <CardPok />
            </ul>
        </div>
    )
}

export default CardListPok