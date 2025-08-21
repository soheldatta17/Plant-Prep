import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import { deliveryZones } from '../data/deliveryZones';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (plantId: string, quantity: number) => void;
  onRemoveItem: (plantId: string) => void;
  onClearCart: () => void;
}

export const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.plant.price * item.quantity, 0);
  const defaultDeliveryFee = deliveryZones[0].deliveryFee;
  const total = subtotal + defaultDeliveryFee;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      <div className="absolute inset-0 bg-black bg-opacity-50 animate-fadeIn" onClick={onClose}></div>
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl animate-fadeInRight">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b animate-fadeInUp">
            <h2 className="text-lg font-semibold text-gray-900">
              Shopping Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 transform hover:scale-110"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500 animate-fadeIn">
                <ShoppingBag className="h-16 w-16 mb-4 animate-bounce-gentle" />
                <p className="text-lg animate-fadeInUp">Your cart is empty</p>
                <p className="text-sm animate-fadeInUp animate-delay-100">Add some beautiful plants to get started!</p>
              </div>
            ) : (
              <div className="space-y-4 animate-fadeInUp">
                {cartItems.map((item, index) => (
                  <div key={item.plant.id} className={`flex gap-4 bg-gray-50 rounded-lg p-3 hover-lift animate-fadeInUp animate-delay-${Math.min(index * 100, 500)}`}>
                    <img
                      src={item.plant.image}
                      alt={item.plant.name}
                      className="w-16 h-16 rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate hover:text-green-600 transition-colors duration-200">{item.plant.name}</h3>
                      <p className="text-sm text-gray-500 animate-pulse-gentle">${item.plant.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.plant.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-all duration-200 transform hover:scale-110"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-medium animate-pulse-gentle">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.plant.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-all duration-200 transform hover:scale-110"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => onRemoveItem(item.plant.id)}
                          className="ml-auto p-1 hover:bg-red-100 rounded text-red-500 transition-all duration-200 transform hover:scale-110"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t p-4 space-y-4 animate-fadeInUp">
              {/* Delivery Info */}
              <div className="bg-green-50 rounded-lg p-3 hover-lift">
                <h4 className="font-medium text-green-900 mb-2">Delivery Information</h4>
                <div className="text-sm text-green-700">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery (Downtown):</span>
                    <span>{defaultDeliveryFee === 0 ? 'FREE' : `$${defaultDeliveryFee}`}</span>
                  </div>
                  <div className="flex justify-between font-medium border-t border-green-200 pt-2 mt-2">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={onClearCart}
                  className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                >
                  Clear Cart
                </button>
                <button className="flex-1 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 hover-glow transition-all duration-300 transform hover:scale-105">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};