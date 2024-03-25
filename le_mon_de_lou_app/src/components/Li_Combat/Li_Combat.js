import "./Li_Combat.css"

function Li_Combat({battle, tournamentid}) {
    return (
        battle.tour.map((battle, id) => (
            <div id={id}>
                <h4>{battle.name}</h4>
                <p>{battle.description}</p>
                <ul className="ul_battle">
                    {battle.liste.map((combat, id)=> (
                        <li className="li_combat">
                            <table id={id}>
                                <tbody>
                                <tr>
                                    <th><a className="a_li_combat" href={"/pokemon/tournament/"+tournamentid+"/"+combat.tourId+"/"+combat.id}>{combat.name}</a></th>
                                </tr>
                                <tr>
                                    <th>{combat.winner}</th>
                                </tr>
                                </tbody>
                            </table>
                        </li>
                    ))}
                </ul>
            </div>
        ))
    )
}

export default Li_Combat;