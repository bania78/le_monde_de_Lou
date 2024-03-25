import projects from '../../data/project.json'
import { useLoaderData } from "react-router-dom";
import './TournamentBattle.css'

export async function getTournament(tournamentId, tourId, battleId) {
    let tournament = projects[0].tournament.find(project => project.tournamentId === tournamentId);
    let tour = tournament.combats.tour.find(tour => tour.id === tourId);
    let battle = tour.liste.find(battle => battle.id === battleId);
    return battle ?? null;
}

export async function loader({ params }) {
    const battle = await getTournament(params.tournamentId, params.tourId, params.battleId);
    console.log(battle);
    return { battle };
}

function TournamentBattle() {
    const project = useLoaderData();
    console.log(project);
    return (
        <div className='accueil_pok'>
            <h2>{project.battle.name}</h2>
            <img className='battle_cover' src={project.battle.image}></img>
            <div className='div_content_battle'>
                { project.battle.description.map(description => (
                    <p className='p_content'>{description}</p>
                ))}
            </div>
            <table className='table_battle'>
                <thead>
                    <tr>
                        <th>{project.battle.TrainA}</th>
                        <th>{project.battle.TrainB}</th>
                        <th>Winner</th>
                    </tr>
                </thead>
                <tbody>
                { project.battle.pok_comb.map(pok_comb => (
                    <tr>
                        <th><img className='icon_pok' src={pok_comb.imgA}></img> {pok_comb.PokA}</th>
                        <th><img className='icon_pok' src={pok_comb.imgB}></img> {pok_comb.PokB}</th>
                        <th><img className='icon_pok' src={pok_comb.imgW}></img> {pok_comb.winner}</th>
                    </tr>
                ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="5">{"Winner : "+project.battle.winner}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default TournamentBattle;
