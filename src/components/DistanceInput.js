import PropTypes from "prop-types";
import HEADER from "./Constants";

function DistanceInput(props) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    props.onInput(name, parseFloat(value));
  };

  return (
    <>
      <label htmlFor="distance">{HEADER.passedDistance}</label>
      <input
        type="number"
        name="distance"
        value={props.distance}
        id="distance"
        className="form-input"
        step=".1"
        min="0"
        required
        onChange={handleChange}
      />
    </>
  );
}

DistanceInput.propTypes = {
  distance: PropTypes.number.isRequired,
  onInput: PropTypes.func.isRequired,
};

export default DistanceInput;
