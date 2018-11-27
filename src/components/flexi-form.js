import React from "react";
// import './form.css';

export default class FlexiForm extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.newState = {};
    this.props.config.items.map(item => {
      this.newState[item.name] = item.defaultValue;
      return this.newState;
    });

    this.onFlexiSubmit = this.onFlexiSubmit.bind(this);
  }

  componentDidMount() {
    // Initialize state from default value of config
    this.setState({ ...this.newState });
  }

  onFlexiSubmit = e => {
    e.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state);
    }
  };

  onChange = (e, name) => {
    this.setState({
      [name]: e.target.value
    });
  };

  renderForm = () => {
    let config = this.props.config;
    // let defaultValues = this.props.defaultValues;

    let formUI = config.items.map(item => {
      // let key = item.name;
      let type = item.type || "text";
      let props = item.props || {};
      let name = item.name;
      let defaultValue = item.defaultValue;

      // Let default be TextField
      let input = (
        <input
          {...props}
          className="form-input"
          type={type}
          name={name}
          defaultValue={defaultValue}
          key={
            "i-" + name // ref={this.input}
          }
          onChange={e => {
            this.onChange(e, name);
          }}
        />
      );

      // If the field type is dropdown
      if (type === "DropDown") {
        let options = item.values.map(value => {
          return (
            <option
              {...props}
              className="form-input"
              key={"o-" + value}
              // defaultValue={item.value}
            >
              {value}
            </option>
          );
        });

        input = (
          <select
            name={name}
            key={"s-" + name}
            className="form-select"
            defaultValue={defaultValue}
            onChange={e => {
              this.onChange(e, name);
            }}
          >
            {options}
          </select>
        );
      }

      return (
        <div key={name} className="form-group">
          <label className="form-label" htmlFor={name} key={"l-" + name}>
            {item.label}
          </label>
          {input}
        </div>
      );
    });
    return formUI;
  };

  render() {
    return (
      <div className={this.props.className}>
        <form className="flexi-form" onSubmit={this.onFlexiSubmit}>
          {this.renderForm()}
          <div className="form-actions">
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    );
  }
}
