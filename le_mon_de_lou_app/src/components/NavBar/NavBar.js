import ReactSearchBox from "react-search-box";
import datab from '../../data/data.json'

function NavBar() {
    const handleSearchSubmit = (event) => {
        var input = document.getElementsByClassName("sc-gswNZR")[0].value;
        console.log(`Searching for: ${input}`);
        datab.map(data => {
            if (data.value === input) {
                window.location.href = data.url;
            }
            return true;
        })
    }
    return (
        <ReactSearchBox
        placeholder="Rechercher"
        data={datab}
        onSelect={handleSearchSubmit}
      />
    )
}

export default NavBar
