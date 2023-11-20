import projects from '../../data/project.json'
import Li_history from '../../components/Li_history/Li_history';
import './History.css'

function History() {
    return (
        projects[0].history.map(project => (
            <ul key={project.id} className='ul_history'>
                <h2>{project.title}</h2>
                <Li_history projects={ project.content }/>
            </ul>
        )));
}

export default History;