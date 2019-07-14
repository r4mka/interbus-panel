import { stringify } from 'qs';
import { isEmpty } from 'lodash';
import config from 'config';

const { apiHost } = config;

export default getState => {
  const url = (path, params) =>
    `${apiHost}${path}${isEmpty(params) ? '' : `/?${stringify(params)}`}`;

  const handleResponse = res =>
    res.ok ? res.text().then(text => (text.length ? JSON.parse(text) : {})) : Promise.reject(res);

  const attachToken = headers => {
    const cognitoUser = getState().getIn(['auth', 'user']);
    if (!cognitoUser) throw new Error('Access Token is missing in Authorization header');

    const {
      signInUserSession: {
        idToken: { jwtToken },
      },
    } = cognitoUser;

    return { ...headers, Authorization: jwtToken };
  };

  return {
    get: (path, { params, headers = {}, addToken = false } = {}) =>
      fetch(url(path, params), {
        method: 'GET',
        headers: addToken ? attachToken(headers) : headers,
      }).then(handleResponse),
    post: (path, { payload = {}, headers = {}, addToken = false, ...options }) => {
      const customHeaders = { 'Content-Type': 'application/json', ...headers };

      return fetch(url(path), {
        method: 'POST',
        headers: addToken ? attachToken(customHeaders) : customHeaders,
        body: JSON.stringify(payload),
        ...options,
      }).then(handleResponse);
    },
    put: (path, { payload = {}, headers = {}, addToken = false }) => {
      const customHeaders = { 'Content-Type': 'application/json', ...headers };

      return fetch(url(path), {
        method: 'PUT',
        headers: addToken ? attachToken(customHeaders) : customHeaders,
        body: JSON.stringify(typeof payload.toJS === 'function' ? payload.toJS() : payload),
      }).then(handleResponse);
    },
    delete: (path, { params, headers = {}, addToken = false } = {}) =>
      fetch(url(path, params), {
        method: 'DELETE',
        headers: addToken ? attachToken(headers) : headers,
      }).then(handleResponse),
  };
};
