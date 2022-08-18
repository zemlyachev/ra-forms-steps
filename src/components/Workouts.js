import { useState } from "react";
import WorkoutForm from "./WorkoutForm";
import WorkoutsTable from "./WorkoutsTable";
import StepsPerDayModel from "../models/WorkoutsPerDayModel";

function Workouts() {
  const [dates, setDates] = useState([]);
  const [form, setForm] = useState(new StepsPerDayModel());

  const handleInput = (name, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const daysUpdated = (arrDays) => {
    const newArray = [...arrDays];
    const oi = arrDays.findIndex((o) => o.date === form.date);

    if (oi === -1) {
      newArray.push(new StepsPerDayModel(form.date, parseFloat(form.distance)));
    } else if (oi >= 0) {
      newArray[oi] = new StepsPerDayModel(
        form.date,
        form.isEdit
          ? parseFloat(form.distance)
          : (
              parseFloat(newArray[oi].distance) + parseFloat(form.distance)
            ).toFixed(1)
      );
    }

    return newArray;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDates((prevDates) =>
      daysUpdated(prevDates).sort((a, b) => {
        return a.date < b.date ? 1 : -1;
      })
    );
    setForm(new StepsPerDayModel());
  };

  const handleRemove = (date) => {
    setDates((prevDates) => prevDates.filter((o) => o.date !== date));
  };

  const handleEdit = (o) => {
    setForm((prevForm) => ({
      ...prevForm,
      date: o.date,
      distance: parseFloat(o.distance),
      isEdit: true,
    }));
  };

  return (
    <div className="container">
      <WorkoutForm
        form={form}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
      <WorkoutsTable
        dates={dates}
        handleEdit={handleEdit}
        handleRemove={handleRemove}
      />
    </div>
  );
}

export default Workouts;
