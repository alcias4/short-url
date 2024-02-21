




const apiUrl = async ({longUrl}:{longUrl:string}) => {

  const url = 'https://url-shortener-service.p.rapidapi.com/shorten';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'cf64bc7fc9msh7e4f05b54fe5e6ap172b16jsn94da3d41c4c3',
      'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
    },
    body: new URLSearchParams({
      url: longUrl
    })
  };
  const res =  await fetch(url,options)
  const result = await res.text();
  const json = JSON.parse(result).result_url
  return json;
}

export default apiUrl;