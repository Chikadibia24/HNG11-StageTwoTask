import deliveryIcon from "../assets/deliveryIcon.svg";

const OrderIDBar = () => {
  return (
    <div className="orderID-editButton-container flex items-center justify-between">
      <div>
        <h1>Your Order ID: HTU4736529867SF</h1>
        <div>
          <div>
            <p>
              <span>Order:</span>
              <span>July 5, 2024</span>
            </p>
          </div>

          <div>
            <img src={deliveryIcon} alt="deliveryIcon" />
            <p>
              <span>Estimated delivery date:</span>
              <span>July 6, 2024</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <button className="edit-button">Edit Order ID</button>
      </div>
    </div>
  );
};

export default OrderIDBar;
