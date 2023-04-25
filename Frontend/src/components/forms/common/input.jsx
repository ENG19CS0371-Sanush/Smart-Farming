// const Input = ({ name, label, value, handleChange, type = "text" }props) => {
const Input = (props) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor={props.name} className="form-label">
          {props.label}
        </label>
        <input
          value={props.value}
          name={props.name}
          onChange={props.onChange}
          type={props.type}
          className="form-control"
          id={props.name}
          error={props.error}
          aria-describedby="emailHelp"
        />
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>
    </div>
  );
};

export default Input;
