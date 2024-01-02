import './Frise.css'

function Frise_coach({project}) {
    return (
        project.content.map(project => (
            project.date.map(project => (
                <article className='article_timeline'>
                    <a className='timeline_h3' href={'#'+project.id}>{ project.title }</a>
                </article>
    )))));
}

export default Frise_coach;