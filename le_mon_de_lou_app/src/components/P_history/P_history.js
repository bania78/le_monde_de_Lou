function P_history({ projects }) {
    return (
        projects.map(project => (
            <p>{project}<br/></p>
        )));

}

export default P_history
