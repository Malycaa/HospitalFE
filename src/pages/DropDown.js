import React from "react";
import api from "../lib/api";
import { Button, Container, Form, Row, Col, Image } from "react-bootstrap";

export const CustomDropdown = (props) => (
  <div className="form-group">
    <select
      class="form-select"
      name="{props.username}"
      disabled={props.isLoading}
      onChange={props.onChange}
    >
      <option selected disabled>
        {props.options.length !== 0 ? "Select Doctor" : "Loading.."}
      </option>
      {props.options.length !== 0 ? (
        props.options.map((item, index) => (
          <option key={index} value={JSON.stringify(item)}>
            {item.full_name}
          </option>
        ))
      ) : (
        <option key={1} value={1}>
          loading...
        </option>
      )}
    </select>
  </div>
);
export default class CustomListDropDown extends React.Component {
  constructor(props) {
    super();
    this.state = {
      collection: [],
      value: "",
    };
  }
  componentDidMount = async () => {
    const url = `/api/account/inquiryDoctor`;
    const response = await api.post(url, {
      value: "",
    });
    this.setState({ collection: response.data.data });
  };

  onChange = (event) => {
    var item = JSON.parse(event.target.value);
    this.setState({ value: item });
    this.props.onChange(item);
  };

  render() {
    console.log(this.props.isLoading);
    return (
      <Form.Group className="mt-2 text-start">
        <Form.Label>Doctor</Form.Label>
        <CustomDropdown
          name={this.state.username}
          options={this.state.collection}
          onChange={this.onChange}
          isLoading={this.props.isLoading}
        />
      </Form.Group>
    );
  }
}
