import React, { useState, useEffect } from "react";
import "./Cart.css";
import NavbarStore from "./NavbarStore";

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notification, setNotification] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const userId = "exampleUserId"; // Replace with actual user ID logic
    const BASE_URL = "http://localhost:5000";

    // Function to fetch cart items
    const fetchCartItems = () => {
        setLoading(true);
        fetch(`${BASE_URL}/api/cart/${userId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch cart");
                }
                return response.json();
            })
            .then((data) => {
                setCartItems(data.items || []);
                calculateTotalPrice(data.items || []);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching cart items:", error);
                setLoading(false);
            });
    };

    // Fetch cart items on mount
    useEffect(() => {
        fetchCartItems();
    }, [userId]);

    // Calculate total price
    const calculateTotalPrice = (items) => {
        const total = items.reduce(
            (acc, item) => acc + item.productId.price * item.quantity,
            0
        );
        setTotalPrice(total);
    };

    // Update cart item and re-fetch data
    const updateCartItem = (productId, action, quantity = 0) => {
        fetch(`${BASE_URL}/api/cart/update`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId, productId, action, quantity }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setNotification(data.message);
                    // Re-fetch updated cart data
                    fetchCartItems();
                } else {
                    setNotification("Error updating cart item");
                }
            })
            .catch((error) => {
                console.error("Error updating cart:", error);
                setNotification("Failed to update cart");
            });
    };

    return (
        <>
            <NavbarStore />

            <div className="cart-container">
                <h1>Your Cart</h1>
                {notification && <p className="notification"></p>}
                {loading ? (
                    <p>Loading your cart...</p>
                ) : cartItems.length > 0 ? (
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item.productId._id} className="cart-item">
                                <img
                                    src={`${BASE_URL}/images/${item.productId.imageUrl}`}
                                    alt={item.productId.name}
                                    className="cart-item-image"
                                />
                                <div className="cart-item-details">
                                    <h3>{item.productId.name}</h3>
                                    <p>{item.productId.description}</p>
                                    <p>Price: ₹{item.productId.price}</p>
                                    <div className="quantity-control">
                                        <button
                                            onClick={() =>
                                                updateCartItem(item.productId._id, "decrease", item.quantity - 1)
                                            }
                                        >
                                            -
                                        </button>
                                        <input type="number" value={item.quantity} readOnly />
                                        <button
                                            onClick={() =>
                                                updateCartItem(item.productId._id, "increase", item.quantity + 1)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        className="remove-button"
                                        onClick={() =>
                                            updateCartItem(item.productId._id, "decrease", 0)
                                        }
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Your cart is empty!</p>
                )}

                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-item">
                        <p>Subtotal</p>
                        <p>₹{totalPrice.toFixed(2)}</p>
                    </div>
                    <div className="summary-item">
                        <p>Estimated Delivery</p>
                        <p>₹0.00</p>
                    </div>
                    <div className="summary-item">
                        <p>Total</p>
                        <p>₹{totalPrice.toFixed(2)}</p>
                    </div>
                    <button className="checkout-button">Checkout</button>
                    <button className="secure-checkout-button">Secure Checkout</button>
                </div>
            </div>
        </>
    );
}

export default Cart;
