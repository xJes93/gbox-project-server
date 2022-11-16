import DataModal from "../models/data.js";
import dataGenerator from "../middleware/dataGenerator.js";

//fix resp errors

const { userid, airTemp, techTemp, airflow, soilHyd, rootHyd } =
  dataGenerator();
const secret = "test";

//Send sensors data to userid
export const postTechData = async (req, res) => {
  console.log("\n[data.js]:postTechData");

  const _userid = req.body?.userid;

  try {
    const oldUserCheck = await DataModal.findOne({ userid: _userid });

    if (oldUserCheck) {
      return res
        .status(400)
        .json({ message: "[data.js]:UserID already exist" });
    }

    const result = await DataModal.create({
      userid: _userid,
      airTemp: airTemp,
      techTemp: techTemp,
      airflow: airflow,
      soilHyd: soilHyd,
      rootHyd: rootHyd,
    });

    res.status(201).json({
      result,
      message: "[data.js]:UserID not found: Create operation",
    });
  } catch (error) {
    res.status(500).json({ message: "[data.js]:postTechData:Server error" });
    console.log(error);
  }
};

//Fetch data by user id
export const getTechData = async (req, res) => {
  console.log("\n[data.js]:getTechData");

  const _userid = req?.query;
  console.log(_userid.userid);

  try {
    let oldUser = await DataModal.findOne(_userid);

    if (!oldUser)
      return res.status(404).json({
        message: "[data.js]:UserID not found",
      });

    oldUser = await DataModal.find(_userid).exec();
    const result = { ...oldUser[0]._doc };
    console.log("Result:\n", result);
    res.status(200).json({
      result: result,
      message: "[data.js]:UserID found: Data recieved",
    });
  } catch (error) {
    res.status(500).json({ message: "[data.js]:getTechData:Server error" });
    console.log(error);
  }
};

export const putTechData = async (req, res) => {
  console.log("[data.js]:putTechData");
  const { userid, airTemp, techTemp, airflow, soilHyd, rootHyd } = req.body;
  try {
    const oldUser = await DataModal.findOne({ userid });

    if (oldUser) {
      //this part
      return res
        .status(201)
        .json({ message: "[data.js]:UserID found: Update operation" });
    }

    const result = await DataModal.create({
      userid: userid,
      airTemp: airTemp,
      techTemp: techTemp,
      airflow: airflow,
      soilHyd: soilHyd,
      rootHyd: rootHyd,
    });
    console.log(result);
    res.status(201).json({
      result,
      message: "[data.js]:UserID not found: Create operation",
    });
  } catch (error) {
    res.status(500).json({ message: "[data.js]:sendTechData:Server error" });
    console.log(error);
  }
};
