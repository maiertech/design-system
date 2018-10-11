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
    const pathExists = await fs.pathExists(path);
    if (!pathExists) {
      const response = await axios({
        method: "get",
        url,
        responseType: "stream"
      });
      const stream = fs.createWriteStream(path);
      response.data.pipe(stream);
      return new Promise((resolve, reject) => {
        stream.on("finish", () => {
          resolve();
        });
        stream.on("error", err => {
          reject(err);
        });
      });
    }
  } catch (error) {
    // 404 means no screenshot has been taken yet for current device.
    if (error.response && error.response.status === 404) {
      return Promise.resolve();
    }
    return Promise.reject(error);
  }
  return Promise.resolve();
};

export const createCustomSnapshotIdentifier = device =>
  device.toLocaleLowerCase().replace(/ /g, "-");
