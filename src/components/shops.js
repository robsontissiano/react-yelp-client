import React from "react";
import PropTypes from "prop-types";
import "./shops.css";

export default class Shops extends React.Component {
  static propTypes = {
    shops: PropTypes.array,
  };

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Customer</th>
            <th>Review</th>
            {/* <th>Reviews</th> */}
          </tr>
        </thead>
        <tbody>
          {this.props.shops && this.props.shops.map(shop => {
            return <tr key={shop.id}>
              <td>{shop.name}</td>
              <td>{shop.location.display_address}</td>
              <td>{shop.user}</td>
              <td>{shop.text}</td>
            </tr>
            // return <tr key={shop._id}>
            //     <td>{shop._id}</td>
            //     <td>{shop.name}</td>
            //     <td>{shop.notes}</td>
            // </tr>
          })}
        </tbody>
      </table>
    );
  }
}