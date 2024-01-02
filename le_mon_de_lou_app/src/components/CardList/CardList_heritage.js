import Card_heritage from '../Card/Card_heritage';
import './CardList.css'

function CardList_heritage({project}) {
    return (
        <div className="CardList">
            <ul className='ul_cardlist'>
                <Card_heritage projects={project}/>
            </ul>
        </div>
    )
}

export default CardList_heritage