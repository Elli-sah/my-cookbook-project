import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import "../css/SearchModal.css";
import { Link } from "react-router-dom";

export default function SearchModal() {
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
    handleSearch(event);
  };

  useEffect(() => {
    fetch("./recipe.json")
      .then((response) => response.json())
      .then((searchData) => {
        console.log(searchData);
        setSearchData(searchData);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(searchText);

    const filteredRecipes = searchData.filter((recipe) =>
      recipe.recipe_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Performing search for:", searchTerm);
    console.log("Filtered Recipes:", filteredRecipes);
    console.log("Search Data:", searchData);
    if (filteredRecipes) {
      console.log(filteredRecipes);
      setSearchResult(filteredRecipes);
    }
  };

  return (
    <>
      <CiSearch className="nav-icons" onClick={handleShow} />

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header>
          <h2>Här kan du söka efter recept</h2>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form onSubmit={handleSearch}>
              <input
                className="search-field"
                type="text"
                placeholder="Sök recept"
                value={searchText}
                onChange={handleSearchTextChange}
              />
            </form>
          </div>
          {searchResult.map((recipe) => (
            <Link to={`/Recipes/${recipe.category}/${recipe.id}`}>
              {recipe.recipe_name}
            </Link>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Stäng
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
