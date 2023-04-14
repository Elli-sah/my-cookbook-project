import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import "../css/SearchModal.css";

function SearchModal() {
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    // Perform search using searchText
    console.log("Performing search for:", searchText);
  };

  return (
    <>
      <CiSearch className="nav-icons" onClick={handleShow} />

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input
              className="search-field"
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={handleSearchTextChange}
            />
          </div>
          <p>Sökhistorik</p>
        </Modal.Body>
        <Modal.Footer closeButton></Modal.Footer>
      </Modal>
    </>
  );
}
export default SearchModal;
