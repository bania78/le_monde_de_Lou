import './Frise.css'

function Frise_agot({project}) {
    console.log(project)
    return (
        project.history.map(project => (
            project.story.map(project => (
                <article className='article_timeline'>
                    <a className='timeline_h3' href={'#'+project.id}>{ project.title }</a>
                </article>
    )))));
}

export default Frise_agot;