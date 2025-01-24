import projects from '../../data/project.json'
import { useLoaderData } from "react-router-dom";
import './TournamentBattle.css'
import CardListPerso from '../../components/CardList/CardListPerso';
import './Perso.css'


export async function getTournament(persoId) {
    let perso = projects[0].perso.find(project => project.id === persoId);
    return perso ?? null;
}

export async function loader({ params }) {
    const perso = await getTournament(params.persoId);
    return { perso };
}

function Perso() {
    const project = useLoaderData();
    return (
        <div className='accueil_pok'>
            <h2>{project.perso.name}</h2>
            <table className='table_perso'>
                <thead>
                    <tr>
                        <img className='perso_cover' src={project.perso.cover}></img>
                    </tr>
                </thead>
                <tbody>
                    <tr className='tr_des'>
                        <th className='th_des'>Sexe</th>
                        <th className='th_per'>{project.perso.sexe}</th>
                    </tr>
                    <tr className='tr_des'>
                        <th className='th_des'>Profession</th>
                        <th className='th_per'>{project.perso.profession}</th>
                    </tr>
                    <tr className='tr_des'>
                        <th className='th_des'>Naissance</th>
                        <th className='th_per'>{project.perso.birthplace}</th>
                    </tr>
                    <tr className='tr_des'>
                        <th className='th_des'>Région</th>
                        <th className='th_per'>{project.perso.région}</th>
                    </tr>
                    <tr className='tr_des'>
                        <th className='th_des'>IFPT Rank</th>
                        <th className='th_per'>{project.perso.IFPT}</th>
                    </tr>
                </tbody>
            </table>
            <div className='div_content_battle'>
                <h3>Introduction</h3>
                { project.perso.introduction.map(description => (
                    <p className='content_perso'>{description}</p>
                ))}
                <h3>Personnalité</h3>
                { project.perso.personnalite.map(description => (
                    <p className='content_perso'>{description}</p>
                ))}
                <h3>Apparence</h3>
                { project.perso.apparence.map(description => (
                    <p className='content_perso'>{description}</p>
                ))}
                <h3>Pokémon</h3>
                <div  className='poke_table'>
                    { project.perso.pokemon.map(pok => (
                        <table>
                            <tr>
                                <img className='poke_cover' src={pok.image}></img>
                            </tr>
                            <tr>
                                <th className='th_pok_des'>{pok.name}</th>
                            </tr>
                        </table>
                    ))}
                </div>
                <h3>Références</h3>
                <CardListPerso story={project.perso.ref}>
                </CardListPerso>
            </div>
        </div>
    );
}

export default Perso;
