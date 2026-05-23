import { open, readdir, readFile } from "fs/promises";
import http from "http";

const server = http.createServer(async (req, res) => {
  if (req.url === "/favicon.ico") return res.end("No favicon.");
  if (req.url === "/") {
    serveDirectory(req, res);
  } else {
    try {
      const fileHandle = await open(`./storage${decodeURIComponent(req.url)}`);
      const stats = await fileHandle.stat();
      if (stats.isDirectory()) {
        serveDirectory(req, res);
      } else {
        const readStream = fileHandle.createReadStream();
        readStream.pipe(res);
      }
    } catch (err) {
      console.log(err.message);
      res.end("Not Found!");
    }
  }
});

async function serveDirectory(req, res) {
  const itemsList = await readdir(`./storage${req.url}`);
  let dynamicHTML = "";
  itemsList.forEach((item) => {
    dynamicHTML += `<a href=".${
      req.url === "/" ? "" : req.url
    }/${item}">${item}</a><br>`;
  });
  const htmlBoilerplate = await readFile("./boilerplate.html", "utf-8");
  res.end(htmlBoilerplate.replace("${dynamicHTML}", dynamicHTML));
}

server.listen(80, "192.168.56.1", () => {
  console.log("Server started");
});
