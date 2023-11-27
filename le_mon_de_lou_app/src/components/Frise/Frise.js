import projects from '../../data/project.json'
import './Frise.css'

function Frise() {
    return (
        projects[0].history.map(project => (
            project.story.map(project => (
                <article className='article_timeline'>
                    <img className="icon" src={ project.icon }/>
                    <a className='timeline_h3' href={'#'+project.id}>{ project.title }</a>
                </article>
    )))));
}

export default Frise;