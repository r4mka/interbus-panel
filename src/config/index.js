const { HOST, PORT, REACT_APP_API_HOST } = process.env;

export default {
  host: HOST || 'localhost',
  port: PORT,
  apiHost: REACT_APP_API_HOST,
};
