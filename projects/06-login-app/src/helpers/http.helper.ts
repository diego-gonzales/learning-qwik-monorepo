export const helpHttp = () => {
  const customFetch = (endpoint: string, options: RequestInit) => {
    const defaultHeaders = {
      accept: 'application/json',
    };

    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || 'GET';
    options.headers = options.headers
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;

    options.body = JSON.stringify(options.body) || null;
    if (!options.body) delete options.body;

    // console.log(options);

    setTimeout(() => {
      controller.abort();
    }, 3000);

    return fetch(endpoint, options)
      .then((resp) =>
        resp.ok
          ? resp.json()
          : Promise.reject({
              err: true,
              status: resp.status || '00',
              statusText: resp.statusText || 'An error ocurred',
            })
      )
      .catch((err) => err);
  };

  const get = (url: string, options: any = {}) => {
    return customFetch(url, options);
  };

  const post = (url: string, options: any = {}) => {
    options.method = 'POST';
    return customFetch(url, options);
  };

  const put = (url: string, options: any = {}) => {
    options.method = 'PUT';
    return customFetch(url, options);
  };

  const del = (url: string, options: any = {}) => {
    options.method = 'DELETE';
    return customFetch(url, options);
  };

  return { get, post, put, del };
};
