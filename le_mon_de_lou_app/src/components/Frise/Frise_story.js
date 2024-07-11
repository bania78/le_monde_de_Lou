import projects from '../../data/project.json'
import './Frise.css'

function Frise_story(id_story) {
    return (
        projects[0].story[id_story.id_story].content.map(project => (
            <article className='article_timeline'>
                <a className='timeline_h3' href={'#'+project.id}>{ project.title }</a>
            </article>
    )));
}

export default Frise_story;