import React from "react";
import api from "../lib/api";
import { Button, Container, Form, Row, Col, Image } from "react-bootstrap";

export const DropDownMedication = (props) => (
  <div className="form-group">
    <select
      class="form-select"
      name="{props.medication_name}"
      disabled={props.isLoading}
      onChange={props.onChange}
    >
      <option selected disabled>
        {props.options.length !== 0 ? "Select Medications" : "Loading.."}
      </option>
      {props.options.length !== 0 ? (
        props.options.map((item, index) => (
          <option key={index} value={JSON.stringify(item)}>
            {item.medication_name}
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
export default class CustomListDropDownMedication extends React.Component {
  constructor(props) {
    super();
    this.state = {
      collection: [],
      value: "",
    };
  }
  componentDidMount = async () => {
    const url = `/api/medication/inquiryMedication`;
    const response = await api.post(url, {
      value: "",
    });
    this.setState({ collection: response.data.data });
  };

  onChange = (event) => {
    var item = JSON.parse(event.target.value);
    item.index = this.props.index
    this.setState({ value: item });
    this.props.onChange(item);
  };

  render() {
    console.log(this.props.isLoading);
    return (
      <Form.Group className="mt-2 text-start">
        <DropDownMedication
          name={this.state.medication_name}
          options={this.state.collection}
          onChange={this.onChange}
          isLoading={this.props.isLoading}
        />
        {/* <Row>
          <Col md={8}>
          </Col>
          <Col md={4}>
            <Button onClick={this.props.tapAdd}>+</Button>
          </Col>

        </Row> */}

      </Form.Group>
    );
  }
}
