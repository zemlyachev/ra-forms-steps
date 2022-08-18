import PropTypes from "prop-types";
import DateInput from "./DateInput";
import DistanceInput from "./DistanceInput";

function WorkoutForm(props) {
  const handleInput = (name, value) => {
    props.handleInput(name, value);
  };

  const handleSubmit = (e) => {
    props.handleSubmit(e);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-item">
        <DateInput date={props.form.date} onInput={handleInput} />
      </div>
      <div className="form-item">
        <DistanceInput
          distance={parseFloat(props.form.distance)}
          onInput={handleInput}
        />
      </div>
      <button type="submit" className="form-item form-input form-button">
        OK
      </button>
    </form>
  );
}

WorkoutForm.propTypes = {
  form: PropTypes.shape({
    date: PropTypes.string.isRequired,
    distance: PropTypes.number.isRequired,
  }),
};

export default WorkoutForm;
