import P_history from './../P_history/P_history';
import './Li_history.css'

function Li_history({ projects }) {
    return (
        projects.map(project => (
            <li key={project.id} className="li_history">
                <h3 id={project.id} className='h3_history'>{project.title}</h3>
                <div className='div_img'>
                    <div className="box_img">
                        <img className="history_img" src={project.image}/>
                        <div className='content_box'>
                            <ul className='tag_box'>
                                { project.tag.map((tag, id) => (
                                    <li key={id} className='li_tag_box'><a className='a_tag' href={tag.href}>{tag.title}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <P_history projects={ project.content }/>
            </li>
    )));
}

export default Li_history