import projects from '../../data/project.json'
import './Card.css'

function Card_copy() {
    return (
        projects[2].project.map(project => (
            <li key={project.projectId} className="Card">
                <a className='a_card' href={`/coach/${project.projectId}`}>
                    <article className='article_card'>
                        <img className="card_img" src={project.cover} alt={project.title}/>
                        <h3 className='h3_card'>{project.title}</h3>
                    </article>
                </a>
            </li>
    )));
}

export default Card_copy