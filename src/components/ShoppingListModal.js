"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
require("../css/ShoppingListModal.css");
var ri_1 = require("react-icons/ri");
var react_bootstrap_1 = require("react-bootstrap");
var ShoppingListModal = function () {
    var _a = (0, react_1.useState)(function () {
        var storedItems = sessionStorage.getItem("shoppingListItems");
        return storedItems ? JSON.parse(storedItems) : [];
    }), items = _a[0], setItems = _a[1];
    var _b = (0, react_1.useState)([]), checkedItems = _b[0], setCheckedItems = _b[1];
    var _c = (0, react_1.useState)(false), isModalOpen = _c[0], setIsModalOpen = _c[1];
    var _d = (0, react_1.useState)(""), newItemName = _d[0], setNewItemName = _d[1];
    var _e = (0, react_1.useState)(1), newItemQuantity = _e[0], setNewItemQuantity = _e[1];
    (0, react_1.useEffect)(function () {
        var storedItems = sessionStorage.getItem("shoppingListItems");
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);
    (0, react_1.useEffect)(function () {
        sessionStorage.setItem("shoppingListItems", JSON.stringify(items));
    }, [items]);
    var handleAddItem = function () {
        if (newItemName.trim() !== "") {
            var newItem = {
                id: Date.now(),
                name: newItemName.trim(),
                quantity: newItemQuantity,
                checked: false
            };
            setItems(__spreadArray(__spreadArray([], items, true), [newItem], false));
            setNewItemName("");
        }
    };
    var handleToggleItem = function (itemId) {
        setItems(items.map(function (item) {
            return item.id === itemId ? __assign(__assign({}, item), { checked: !item.checked }) : item;
        }));
    };
    var handleRemoveItem = function (itemId) {
        setItems(items.filter(function (item) { return item.id !== itemId; }));
        setCheckedItems(checkedItems.filter(function (id) { return id !== itemId; }));
    };
    var handleModalOpen = function () {
        setIsModalOpen(true);
        document.body.classList.add("slide-in");
    };
    var handleModalClose = function () {
        setIsModalOpen(false);
        document.body.classList.remove("slide-in");
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(ri_1.RiTodoLine, { onClick: handleModalOpen, className: "open-modal-button nav-icons" }),
        react_1["default"].createElement(react_bootstrap_1.Modal, { show: isModalOpen, onHide: handleModalClose },
            react_1["default"].createElement(react_bootstrap_1.Modal.Header, null,
                react_1["default"].createElement(react_bootstrap_1.Modal.Title, null,
                    react_1["default"].createElement("h2", null, "Shoppinglistan"))),
            react_1["default"].createElement(react_bootstrap_1.Modal.Body, null,
                react_1["default"].createElement("div", { className: "inputs" },
                    react_1["default"].createElement("input", { type: "text", placeholder: "Vad beh\u00F6vs ?", value: newItemName, onChange: function (e) { return setNewItemName(e.target.value); }, className: "add-item-input" }),
                    react_1["default"].createElement("input", { type: "number", value: newItemQuantity, onChange: function (e) { return setNewItemQuantity(Number(e.target.value)); }, placeholder: "Antal", className: "quantity" })),
                react_1["default"].createElement("button", { onClick: handleAddItem, className: "add-item-button buttons" }, "L\u00E4gg till"),
                react_1["default"].createElement("div", { className: "shopping-list-box" },
                    react_1["default"].createElement("ul", { className: "shopping-list" }, items.map(function (item) { return (react_1["default"].createElement("li", { className: "list-items", key: item.id },
                        react_1["default"].createElement("div", { className: "item-checkbox" },
                            react_1["default"].createElement("input", { type: "checkbox", checked: item.checked, onChange: function () { return handleToggleItem(item.id); }, className: "checkbox" }),
                            item.name,
                            " (",
                            item.quantity,
                            " st)"),
                        react_1["default"].createElement("div", { className: "quantity-controls" },
                            react_1["default"].createElement("input", { type: "number", value: item.quantity, onChange: function (e) {
                                    setItems(function (prevItems) {
                                        return prevItems.map(function (prevItem) {
                                            if (prevItem.id === item.id) {
                                                return __assign(__assign({}, prevItem), { quantity: Number(e.target.value) });
                                            }
                                            return prevItem;
                                        });
                                    });
                                }, className: "quantity-2" })),
                        react_1["default"].createElement("span", { className: "remove-item", onClick: function () { return handleRemoveItem(item.id); } }, "X"))); })))),
            react_1["default"].createElement(react_bootstrap_1.Modal.Footer, null,
                react_1["default"].createElement(react_bootstrap_1.Button, { variant: "secondary", onClick: handleModalClose }, "St\u00E4ng")))));
};
exports["default"] = ShoppingListModal;
//# sourceMappingURL=ShoppingListModal.js.map