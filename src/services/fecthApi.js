export const fetchToken = async () => {
  const ENDPOINT_TOKEN = 'https://opentdb.com/api_token.php?command=request';
  const response = await fetch(ENDPOINT_TOKEN);
  const json = await response.json();
  return (response.ok
    ? Promise.resolve(json.token)
    : Promise.reject(json));
};

export const fetchApi = async (numberOfQuestions, tokenKey) => {
  const ENDPOINT = `https://opentdb.com/api.php?amount=${numberOfQuestions}&token=${tokenKey}`;
  console.log(ENDPOINT);
  const response = await fetch(ENDPOINT);
  const json = await response.json();
  // json.then((el) => console.log(el));
  return (response.ok
    ? Promise.resolve(json)
    : Promise.reject(json));
};
