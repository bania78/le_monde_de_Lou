import './DesCard.css'

function DesCard({projects}) {
    return (
        <div className="pres">
            <img className="img_pres" src={projects.image}></img>
            <div className='pres_one'>
                <p className='p_pres'>Organisateur</p>
            </div>
            <div className='pres_two'>
                <p className='p_pres'>{projects.organisateur}</p>
            </div>
            <div className='pres_one'>
                <p className='p_pres'>Edition</p>
            </div>
            <div className='pres_two'>
                <p className='p_pres'>{projects.edition}</p>
            </div>
            <div className='pres_one'>
                <p className='p_pres'>Lieu</p>
            </div>
            <div className='pres_two'>
                <p className='p_pres'>{projects.lieu}</p>
            </div>
            <div className='pres_one'>
                <p className='p_pres'>Date</p>
            </div>
            <div className='pres_two'>
                <p className='p_pres'>{projects.Date}</p>
            </div>
            <div className='pres_one'>
                <p className='p_pres'>Participants</p>
            </div>
            <div className='pres_two'>
                <p className='p_pres'>{projects.nb_participants}</p>
            </div>
            <div className='pres_one'>
                <p className='p_pres'>Vainqueur</p>
            </div>
            <div className='pres_two'>
                <p className='p_pres'>{projects.vainqueur}</p>
            </div>
            <div className='pres_one'>
                <p className='p_pres'>Finaliste</p>
            </div>
            <div className='pres_two'>
                <p className='p_pres'>{projects.finaliste}</p>
            </div>
        </div>
    )
}

export default DesCard
