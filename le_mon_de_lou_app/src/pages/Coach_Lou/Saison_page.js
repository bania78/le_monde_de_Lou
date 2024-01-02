import projects from '../../data/project.json'
import { useLoaderData } from "react-router-dom";
import Li_history from '../../components/Li_history/Li_history';
import Frise_coach from '../../components/Frise/Frise_coach';
import './Accueil_coach.css'

export async function getSaison(projectId, saisonId) {
    let project = projects[2].project.find(project => project.projectId === projectId);
    let saison = project.saisons.find(saison => saison.id === saisonId);
    return saison ?? null;
}

export async function loader({ params }) {
    const project = await getSaison(params.projectId, params.saisonId);
    return { project };
}

function Saison_page() {
    const { project } = useLoaderData();
    return ([
        <div className="timeline">
            <Frise_coach project={project}/>
        </div>,
        project.content.map(project => (
            project.date.map(project => (
                <ul key={project.id} className='ul_history'>
                    <Li_history projects={ project.content }/>
                </ul>
            ))
        ))
    ]);
}

export default Saison_page;
