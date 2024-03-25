import './Li_part.css'

function Li_parti({région}) {
    return (
        région.participants.liste.map((rég, id) => (
            <li key={id} className='li_région'><h4>{rég.région}</h4>
                <ul className='ul_par'>
                    {rég.liste.map((par, id) => (
                            <li key={id} className='li_par'><p>{par.name}</p></li>
                    ))}
                </ul>
            </li>
        ))
    )
}

export default Li_parti;