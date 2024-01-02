import './Card.css'

function Card_heritage({projects}) {
    return (
        projects.saisons.map(project => (
            <li key={project.id} className="Card">
                <a className='a_card' href={`/coach/${project.projectId}/${project.id}`}>
                    <article className='article_card'>
                        <img className="card_img" src={project.cover} alt={project.title}/>
                        <h3 className='h3_card'>{project.title}</h3>
                    </article>
                </a>
            </li>
    )));
}

export default Card_heritage