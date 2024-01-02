import projects from '../../data/project.json'
import CardList_heritage from '../../components/CardList/CardList_heritage';
import { useLoaderData } from "react-router-dom";
import './Accueil_coach.css'

export async function getProject(projectId) {
    let project = projects[2].project.find(project => project.projectId === projectId);
    return project ?? null;
}

export async function loader({ params }) {
    const project = await getProject(params.projectId);
    return { project };
}

function Project_page() {
    const { project } = useLoaderData();
    return (
        <div className='accueil_pok'>
            <div className='div_content' id="pok">
                <h2 className='h2_pres'>Présentation</h2>
                <p>{project.description}</p>
            </div>
            <CardList_heritage project={project}/>
        </div>
    );
}

export default Project_page;
