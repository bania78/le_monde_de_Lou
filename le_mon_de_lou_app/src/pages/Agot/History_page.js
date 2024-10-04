import projects from '../../data/project.json'
import { useLoaderData } from "react-router-dom";
import Li_history from '../../components/Li_history/Li_history';
import Frise_agot from '../../components/Frise/Frise_agot';
import './History.css'

export async function getProject(projectId) {
    let project = projects[4].project.find(project => project.projectId === projectId);
    return project ?? null;
}

export async function loader({ params }) {
    const project = await getProject(params.projectId);
    return { project };
}

function History_page() {
    const { project } = useLoaderData();
    return ([
        <div className="timeline">
            <Frise_agot project={project}/>
        </div>,
        project.history.map(project => (
            <ul key={project.id} className='ul_history'>
                <h2>{project.title}</h2>
                <Li_history projects={ project.story }/>
            </ul>
        ))]);
}

export default History_page;