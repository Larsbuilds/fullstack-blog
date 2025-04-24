//Sends an error response with a specified status code and message
export const returnErrorWithMessage = (res, code, message) => {
  res.statusCode = code || 500;
  res.setHeader("Content-Type", "application/json");
  return res.end(
    JSON.stringify({ message: message || "Internal Server Error" })
  );
};

//Processes the body from a request object
export const processBodyFromRequest = (req) =>
  new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });

// Creates a regular expression pattern for a given resource
export const regex = (resource) => new RegExp(`^${resource}\/[a-zA-Z0-9]+$`);

//Get the resource ID from the given URL
export const getResourceId = (url) => url.split("/")[2];
