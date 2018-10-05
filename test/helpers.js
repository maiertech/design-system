import fs from "fs-extra";
import { join } from "path";
import axios from "axios";

export const downloadScreenshot = async ({
  componentName,
  customSnapshotIdentifier,
  cwd
}) => {
  const filename = `${customSnapshotIdentifier}-snap.png`;
  const url = `https://screenshots.maier.asia/${componentName}/${filename}`;
  let path = join(cwd, "__image_snapshots__");
  try {
    await fs.ensureDir(path);
  } catch (err) {
    Promise.reject(err);
  }
  path = join(path, filename);
  try {
    if (!(await fs.pathExists(path))) {
      const response = await axios({
        method: "get",
        url,
        responseType: "stream"
      });
      response.data.pipe(fs.createWriteStream(path));
      return new Promise((resolve, reject) => {
        response.data.on("end", () => {
          resolve();
        });
        response.data.on("error", err => {
          reject(err);
        });
      });
    }
  } catch (err) {
    Promise.reject(err);
  }
  return Promise.resolve();
};

export const createCustomSnapshotIdentifier = device =>
  device.toLocaleLowerCase().replace(/ /g, "-");
