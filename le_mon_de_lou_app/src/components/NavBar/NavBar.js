import ReactSearchBox from "react-search-box";
import datab from '../../data/data.json'

function openPage(url) {
    console.log(url);
    window.open(url);
}

function NavBar() {
    return (
        <ReactSearchBox
        placeholder="Rechercher"
        value="Doe"
        data={datab}
        clearOnSelect
        callback={(record) => openPage(record.url)}
      />
    )
}

export default NavBar
