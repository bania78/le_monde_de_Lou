import projects from '../../data/project.json'
import './Card.css'

function CardPok() {
    return (
        projects[0].story.map(story => (
            <li key={story.storyId} className="Card">
                <a className='a_card' href={`/pokemon/story/${story.storyId}`}>
                    <article className='article_card'>
                        <img className="card_img" src={story.storyCover} alt={story.storyTitle}/>
                        <h3 className='h3_card'>{story.storyTitle}</h3>
                    </article>
                </a>
            </li>
    )));
}

export default CardPok