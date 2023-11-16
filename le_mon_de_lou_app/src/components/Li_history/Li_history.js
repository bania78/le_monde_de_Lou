import projects from '../../data/project.json'

function Li_history() {
    return (
        projects.map(project => (
            <li key={project.id} className="Card">
                <a className='a_card' href={`/${project.path}`}>
                    <article className='article_card'>
                        <img className="card_img" src={project.cover} alt={project.title}/>
                        <h3 className='h3_card'>{project.title}</h3>
                    </article>
                </a>
            </li>
    )));
}

export default Li_history