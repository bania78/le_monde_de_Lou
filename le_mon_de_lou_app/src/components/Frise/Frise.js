import projects from '../../data/project.json'
import './Frise.css'

function Frise(id) {
    return (
        projects[id.id].history.map(project => (
            project.story.map(project => (
                <article className='article_timeline'>
                    <img className="icon" src={ project.icon }/>
                    <a className='timeline_h3' href={'#'+project.id}>{ project.title }</a>
                </article>
    )))));
}

export default Frise;