import CardPerso from '../Card/CardPerso';
import './CardList.css'

function CardListPerso(story) {
    return (
        <div className="CardList">
            <ul className='ul_cardlist'>
                <CardPerso story={story} />
            </ul>
        </div>
    )
}

export default CardListPerso