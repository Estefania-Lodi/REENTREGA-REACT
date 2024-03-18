import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const CartWidget = () => {
  const { cart } = useCart();

  return (
    <div>
      {cart.length === 0 ? (
        <span>El carrito está vacío</span>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={{ marginBottom: '10px' }}>
            <span>{item.name}</span>
            <span style={{ marginLeft: '10px' }}>Precio: ${item.price}</span>
            <span style={{ marginLeft: '10px' }}>Cantidad: {item.quantity}</span>
          </div>
        ))
      )}
      <Link to="/cart" className="btn btn-primary">Ver carrito</Link>
    </div>
  );
};

export default CartWidget;
