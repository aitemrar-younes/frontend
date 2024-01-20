const serverRootURL = 'http://127.0.0.1:8000/api/';
/* --------------------------------- */
class CustomError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = "Error";
    this.status = status;
    this.data = data;
  }
}
/* --------------------------------- */
export async function RetrieveAPI(uri) {
  const response = await fetch(serverRootURL + uri);
  if (!response.ok)
    throw new Error(
      "Error while fetching the endPoint, status : ",
      response.status
    );
  return response.json();
}
/* --------------------------------- */
export const CUDAPI = async (uri, item, method) => {
    const response = await fetch(serverRootURL + uri, {
      method: method, // [ POST, PUT, DELETE ]
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    /* when the request body is not valid */
    if (response.status == 400) {
      const data = await response.json();
      throw new CustomError("Error while Posting or Updating data in the Endpoint", response.status, data);
    }
    /*  */
    if (!response.ok && response.status != 400)
      throw new Error("Error while Posting or Updating data in the Endpoint, status : ", response.status);
    /* it is ok */
    return response.json();
};
  /* --------------------------------- */
export const CUD_AUTHAPI = async (uri, item, method) => {
    const authToken = localStorage.getItem("authToken");
    if (authToken && authToken.length<1)
        throw new Error("No session...");
    const response = await fetch(serverRootURL + uri, {
      method: method, // [ POST, PUT, DELETE ]
      headers: {
        Authorization: `Token ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    if (!response.ok && response.status != 400)
      throw new Error("Error while Posting or Updating data in the Endpoint, status : ", response.status);
    if (response.status == 400) {
      const data = await response.json();
      throw new CustomError("Error while Posting or Updating data in the Endpoint", response.status, data);
    }
    return response.json();
  };
  /* --------------------------------- */