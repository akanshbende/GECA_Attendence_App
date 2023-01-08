import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const folderName = `../DataBase/StudentLoginData`;
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
    const userAvail = `../DataBase/StudentLoginData/${req.body.RollNo}.json`;
    if (fs.existsSync(userAvail)) {
      let data = await fs.promises.readFile(
        `../DataBase/StudentLoginData/${req.body.RollNo}.json`
      );

      let finalData = JSON.parse(data);

      if (finalData.pass != req.body.pass) {
        res.status(404).json({ status: "Invalid" });
      } else {
        res.status(200).json(finalData);
      }
    } else {
      res.status(200).json({ status: "Unavailable" });
    }
  } else {
    res.status(200).json({ status: "Bad Request" });
  }
}
