import React, { useState, useEffect } from "react";
import "../css/ShoppingListModal.css";
// import { GrClose } from "react-icons/gr";
import { RiFilePaper2Line } from "react-icons/ri";
import { Modal, Button } from "react-bootstrap";

interface ShoppingItem {
  id: number;
  name: string;
  quantity: number;
  checked: boolean; // Add checked property to ShoppingItem interface
}

const ShoppingListModal: React.FC = () => {
  const [items, setItems] = useState<ShoppingItem[]>(() => {
    // Retrieve items from sessionStorage on component mount
    const storedItems = sessionStorage.getItem("shoppingListItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newItemName, setNewItemName] = useState<string>("");
  const [newItemQuantity, setNewItemQuantity] = useState<number>(1);

  useEffect(() => {
    // Load items from sessionStorage on component mount
    const storedItems = sessionStorage.getItem("shoppingListItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    // Store items in sessionStorage whenever items change
    sessionStorage.setItem("shoppingListItems", JSON.stringify(items));
  }, [items]);

  const handleAddItem = () => {
    if (newItemName.trim() !== "") {
      const newItem: ShoppingItem = {
        id: Date.now(),
        name: newItemName.trim(),
        quantity: newItemQuantity,
        checked: false, // Initialize checked property to false
      };
      setItems([...items, newItem]);
      setNewItemName("");
    }
  };

  const handleToggleItem = (itemId: number) => {
    setItems(
      items.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleRemoveItem = (itemId: number): void => {
    setItems(items.filter((item) => item.id !== itemId));
    setCheckedItems(checkedItems.filter((id) => id !== itemId));
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
    document.body.classList.add("slide-in"); // Add slide-in class to body
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    document.body.classList.remove("slide-in"); // Remove slide-in class from body
  };

  return (
    <>
      <RiFilePaper2Line
        onClick={handleModalOpen}
        className="open-modal-button nav-icons"
      />

      <Modal show={isModalOpen} onHide={handleModalClose}>
        <Modal.Header>
          <Modal.Title>
            <h2>Shoppinglistan</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="inputs">
            <input
              type="text"
              placeholder="Vad behövs ?"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              className="add-item-input"
            />
            <input
              type="number"
              value={newItemQuantity}
              onChange={(e) => setNewItemQuantity(Number(e.target.value))}
              placeholder="Antal"
              className="quantity"
            />
          </div>
          <button onClick={handleAddItem} className="add-item-button buttons">
            Lägg till
          </button>
          <div className="shopping-list-box">
            <ul className="shopping-list">
              {items.map((item) => (
                <li className="list-items" key={item.id}>
                  <div className="item-checkbox">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => handleToggleItem(item.id)}
                      className="checkbox"
                    />
                    {item.name} ({item.quantity} st)
                  </div>
                  <div className="quantity-controls">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => {
                        // Update quantity directly in state
                        setItems((prevItems) => {
                          return prevItems.map((prevItem) => {
                            if (prevItem.id === item.id) {
                              return {
                                ...prevItem,
                                quantity: Number(e.target.value),
                              };
                            }
                            return prevItem;
                          });
                        });
                      }}
                      className="quantity-2"
                    />
                    {/* <div className="quantity-arrows">
                      <span
                        className="quantity-up"
                        onClick={() => handleIncrementQuantity(item.id)} // Call function to increase quantity
                      >
                        &#x25B2;
                      </span>
                      <span
                        className="quantity-down"
                        onClick={() => handleDecrementQuantity(item.id)} // Call function to decrease quantity
                      >
                        &#x25BC;
                      </span>
                    </div> */}
                  </div>
                  <span
                    className="remove-item"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    X
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Stäng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShoppingListModal;
