import projects from '../../data/project.json'
import { useLoaderData } from "react-router-dom";
import DesCard from '../../components/DesCard/DesCard';
import P_history from '../../components/P_history/P_history';
import './Tournament.css'
import Li_parti from '../../components/Li_parti/Li_parti';
import Li_Combat from '../../components/Li_Combat/Li_Combat';

export async function getTournament(tournamentId) {
    let tournament = projects[0].tournament.find(project => project.tournamentId === tournamentId);
    return tournament ?? null;
}

export async function loader({ params }) {
    const project = await getTournament(params.tournamentId);
    return { project };
}

function Tournament() {
    const { project } = useLoaderData();
    return (
        <div className='accueil_pok'>
            <h2>{project.title}</h2>
            <div className='div_content' id="tour">
                <DesCard projects={project}/>
                <P_history projects={project.description}></P_history>
                <h3>Participants</h3>
                <p className='p_content'>{project.participants.description}</p>
                <Li_parti région={project}></Li_parti>
                <h3>Combats</h3>
                <Li_Combat battle={project.combats} tournamentid={project.tournamentId}></Li_Combat>
            </div>
        </div>
    );
}

export default Tournament;
