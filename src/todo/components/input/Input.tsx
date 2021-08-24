import { Component } from "react";
import styles from "./input.module.css";

export class Input extends Component<{
  type: string;
  handleChange: any;
  handleKeyPress?: any;
  className: string;
  value?: string;
  checked?: boolean;
}> {
  componentDidMount() {}

  render() {
    let { type, handleChange, handleKeyPress, className, value, checked } =
      this.props;
    return (
      <input
        className={styles[className]}
        type={type}
        checked={checked}
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    );
  }
}
