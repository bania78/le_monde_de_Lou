import projects from '../../data/project.json'
import './Card.css'

function CardPerso(story) {
    return (
        story.story.story.map(id => (
            <li key={projects[0].story[id].storyId} className="Card_perso">
                <a className='a_card' href={`/pokemon/story/${projects[0].story[id].storyId}`}>
                    <article className='article_card'>
                        <img className="card_img" src={projects[0].story[id].storyCover} alt={projects[0].story[id].storyTitle}/>
                        <h3 className='h3_card'>{projects[0].story[id].storyTitle}</h3>
                    </article>
                </a>
            </li>
    )));
}

export default CardPerso