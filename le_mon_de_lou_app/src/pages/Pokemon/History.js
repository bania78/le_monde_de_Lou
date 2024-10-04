import projects from '../../data/project.json'
import Li_history from '../../components/Li_history/Li_history';
import Frise from '../../components/Frise/Frise';
import './History.css'

function History() {
    return ([
        <div className="timeline">
            <Frise  id={0}/>
        </div>,
        projects[0].history.map(project => (
            <ul key={project.id} className='ul_history'>
                <h2>{project.title}</h2>
                <Li_history projects={ project.story }/>
            </ul>
        ))]);
}

export default History;