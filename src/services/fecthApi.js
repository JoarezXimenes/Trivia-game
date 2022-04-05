const fetchApi = async (questionNumber) => {
  const ENDPOINT_TOKEN = 'https://opentdb.com/api_token.php?command=request';
  const responseToken = await fetch(ENDPOINT_TOKEN);
  const jsonToken = await responseToken.json();
  const token = (responseToken.ok
    ? Promise.resolve(jsonToken)
    : Promise.reject(jsonToken));
  token.then((e) => console.log(e));

  const ENDPOINT = `https://opentdb.com/api.php?amount=${questionNumber}&token=${token.then(({ tokenU }) => tokenU)}`;
  const response = await fetch(ENDPOINT);
  const json = await response.json();
  json.then((el) => console.log(el));
  return (response.ok
    ? Promise.resolve(json)
    : Promise.reject(json));
};

export default fetchApi;
