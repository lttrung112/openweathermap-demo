const request = {
    method: 'get',
    url: `https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=${API_KEY}`,
};

export { request as default };
