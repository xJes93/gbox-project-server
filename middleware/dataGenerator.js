//Generate fake sensrors data

const serverDebug = true;

const userid = Math.random();
const airTemp = Math.floor(Math.random() * (45 - 10 + 1) + 10);
const techTemp = Math.floor(Math.random() * (80 - 30 + 1) + 30);
const airflow = Math.floor(Math.random() * (60 - 30 + 1) + 30);
const soilHyd = Math.floor(Math.random() * (90 - 30 + 1) + 30);
const rootHyd = Math.floor(Math.random() * (100 - 10 + 1) + 10);

const dataGenerator = () => {
  serverDebug &&
    console.log(
      "\nTech data:\nUserID:",
      userid,
      "\nAir Temp:",
      airTemp,
      "С°\nLamp Temp:",
      techTemp,
      "С°\nAirflow:",
      airflow,
      "CFM\nSoil Hydracy:",
      soilHyd,
      "%\nRoot Hydracy:",
      rootHyd,
      "%"
    );

  return { userid, airTemp, techTemp, airflow, soilHyd, rootHyd };
};

export default dataGenerator;
