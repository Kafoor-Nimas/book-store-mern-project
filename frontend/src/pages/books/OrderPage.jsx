import React from "react";
import { useGetOrderByEmailQuery } from "../../redux/features/orders/ordersaApi";
import { useAuth } from "../../context/AuthContext";

const OrderPage = () => {
  const { currentUser } = useAuth();
  const {
    data: orders = [],
    isLoading,
    isError,
  } = useGetOrderByEmailQuery(currentUser.email);
  if (isLoading) return <div>Loading....</div>;
  if (isError) return <div>Error geting orders data</div>;
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Your orders</h2>
      {orders.length === 0 ? (
        <div>No orders found!</div>
      ) : (
        <div>
          {orders.map((order, index) => (
            <div key={index} className="border-b mb-4 pb-4">
              <p className="p-1 bg-secondary text-white w-10 rounded mb-1">
                # {index + 1}
              </p>
              <h3 className="font-bold">OrderId: {order?._id}</h3>
              <p className="text-gray-600">Name: {order?.name}</p>
              <p className="text-gray-600">Email: {order?.email}</p>
              <p className="text-gray-600">Phone: {order?.phone}</p>
              <p className="text-gray-600">Total Price: ${order?.totalPrice}</p>
              <p className="font-semibold mt-2">Address: </p>
              <p>
                {order.address.city}, {order.address.state},{" "}
                {order.address.country}, {order.address.zipcode}
              </p>
              <h3 className="font-semibold mt-2">Products Id:</h3>
              <ul>
                {order.productIds.map((p_Id) => (
                  <li key={p_Id}>{p_Id}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
