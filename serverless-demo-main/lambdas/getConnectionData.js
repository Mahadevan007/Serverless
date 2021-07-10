exports.handler = async event => {
    return {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials' : true 
        },
        statusCode: 200,
        body: JSON.stringify(connectionsData),
    };
}


const connectionsData = [
    {
      "role": "Full Stack Developer",
      "lastName": "Kumar",
      "connected": "2020-01-31T18:30:00.000Z",
      "firstName": "Sanjay"
    },
    {
      "role": "Graphics Designer",
      "lastName": "Venkat",
      "connected": "2021-02-17T18:30:00.000Z",
      "firstName": "Arun"
    },
    {
      "role": "Software Developer",
      "lastName": "Kumar",
      "connected": "2020-01-11T18:30:00.000Z",
      "firstName": "Mahesh"
    },
    {
      "role": "Software Engineer",
      "lastName": "Gopalan",
      "connected": "2020-12-19T18:30:00.000Z",
      "firstName": "Naveen"
    },
    {
      "role": "Full Stack Developer",
      "lastName": "Thangaraj",
      "connected": "2021-05-19T18:30:00.000Z",
      "firstName": "Niranjana"
    },
    {
      "role": "Full Stack Developer",
      "lastName": "Basker",
      "connected": "2021-03-08T18:30:00.000Z",
      "firstName": "Arun"
    },
    {
      "role": "Full Stack Developer",
      "lastName": "Kumar",
      "connected": "2020-11-19T18:30:00.000Z",
      "firstName": "Rajesh"
    },
    {
      "role": "Full Stack Developer",
      "lastName": "Prakesh",
      "connected": "2021-02-17T18:30:00.000Z",
      "firstName": "Arun"
    },
    {
      "role": "Software Developer",
      "lastName": "Kumar",
      "connected": "2018-05-18T18:30:00.000Z",
      "firstName": "Ranjith"
    },
    {
      "role": "Software Tester",
      "lastName": "Gopalan",
      "connected": "2019-08-08T18:30:00.000Z",
      "firstName": "Umesh"
    }
  ]