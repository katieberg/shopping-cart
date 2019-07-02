import React from "react";

class AddItem extends React.Component {
  state = {};
  onSubmit = e => {
    e.preventDefault();
    this.props.onItemAdded(
      JSON.parse(this.state.item),
      parseInt(this.state.quantity)
    );
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }); //need to set a key called quantity and a key called item.
  };
  render() {
    const products = this.props.products.map((row, index) => {
      return (
        <option value={JSON.stringify(row)} key={index}>
          {row.name}
        </option>
      );
    });

    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            name="quantity"
            onChange={this.onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="products">Products</label>
          <select className="form-control" name="item" onChange={this.onChange}>
            <option value="" disabled selected>
              Select an option...
            </option>
            {products}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default AddItem;
