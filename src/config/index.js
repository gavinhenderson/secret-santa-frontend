export const environement = process.env.NODE_ENV;

export const graphqlEndpoint =
  environement === "production"
    ? "https://super-secret-santa-backend.herokuapp.com/"
    : "http://localhost:4000/";
