const { HOST, PORT, API_HOST } = process.env;

export default {
  host: HOST || 'localhost',
  port: PORT,
  apiHost: API_HOST,
};
