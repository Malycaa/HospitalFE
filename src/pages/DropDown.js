import React from 'react'

export const CustomDropdown = (props) => (
  <div className="form-group">
    <strong>{props.username}</strong>
    <select
      className="form-control"
      name="{props.username}"
      onChange={props.onChange}
    >
      <option defaultValue>Select {props.username}</option>
      {/* {props.data.map((item, index) => (
        <option key={index} value={item.user_id}>
          {item.username}
        </option>
      ))} */}
    </select>
  </div>
)
export default class CustomListDropDown extends React.Component {
  constructor() {
    super()
    this.state = {
      collection: [],
      value: '',
    }
  }
  componentDidMount = async () => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
    //   .then((res) => this.setState({ collection: res }))
    const [username, setusername] = useState("");
    try {
      const url = `/api/account/inquiryDoctor`;
      const response = await api.post(url, {

        value: username,
      });
      this.setState({ collection: response.data.data })
      // dispatch(setToken(response.data.data))
    } catch (error) {
      alert("bad request");
    }
  }

  onChange = (event) => {
    this.setState({ value: event.target.value })
  }
  render() {
    return (
      <div className="container mt-4">
        <h2>React Dropdown List with Bootstrap Example</h2>
        <CustomDropdown
          name={this.state.username}
          options={this.state.collection}
          onChange={this.onChange}
        />
      </div>
    )
  }
}