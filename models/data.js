import mongoose from "mongoose";

const dataSchema = mongoose.Schema({
  userid: { type: String, require: true },
  airTemp: { type: String },
  techTemp: { type: String },
  airflow: { type: String },
  soilHyd: { type: String },
  rootHyd: { type: String },
});

export default mongoose.model("Data", dataSchema);
