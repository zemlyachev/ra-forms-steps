import PropTypes from "prop-types";
import HEADER from "./Constants";

function WorkoutsTable(props) {
  const { dates } = props;

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="table-headers">{HEADER.date}</th>
            <th className="table-headers">{HEADER.passedDistance}</th>
            <th className="table-headers">{HEADER.actions}</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {dates.map((o) => (
            <tr key={o.date}>
              <td>{o.dateLocalFormat}</td>
              <td>{o.distance}</td>
              <td>
                <button
                  title="Редактировать"
                  onClick={() => props.handleEdit(o)}
                >
                  <i className="fa fa-pencil"></i>
                </button>
                <button
                  title="Удалить"
                  onClick={() => props.handleRemove(o.date)}
                >
                  <i className="fa fa-trash-can"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

WorkoutsTable.propTypes = {
  dates: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      distance: PropTypes.number.isRequired,
    })
  ),
  handleEdit: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default WorkoutsTable;
