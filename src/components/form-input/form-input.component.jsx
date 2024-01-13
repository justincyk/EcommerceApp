import "./form-input.styles.scss";

// Can take multiple arguments due to the spread "..."
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      {/* Destructure the otherProps object now */}
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
          htmlFor=""
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
