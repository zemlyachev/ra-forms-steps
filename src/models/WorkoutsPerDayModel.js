class StepsPerDayModel {
  constructor(date = "", distance = 0) {
    this.date = date;
    this.dateLocalFormat = new Date(date).toLocaleDateString();
    this.distance = parseFloat(distance);
  }
}

export default StepsPerDayModel;
