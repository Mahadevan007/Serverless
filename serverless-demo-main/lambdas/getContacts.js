exports.handler = async event => {
    return {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials' : true 
        },
        statusCode: 200,
        body: JSON.stringify(contactsData),
    };
}

const contactsData = [
    {
      "role": "Software Developer",
      "lastName": "Kumar",
      "connected": "2020-01-11T18:30:00.000Z",
      "firstName": "Mahesh"
    },
    {
      "role": "Software Engineer",
      "connect": true,
      "lastName": "Gopalan",
      "connected": "2020-12-19T18:30:00.000Z",
      "firstName": "Naveen"
    },
    {
      "lastName": "Thangaraj",
      "connected": "2021-05-19T18:30:00.000Z",
      "firstName": "Niranjana",
      "nonButton": true
    },
    {
      "role": "Full Stack Developer",
      "connect": true,
      "lastName": "Kumar",
      "connected": "2020-11-19T18:30:00.000Z",
      "firstName": "Rajesh"
    },
    {
      "role": "Graphics Designer",
      "lastName": "Venkat",
      "connected": "2021-02-17T18:30:00.000Z",
      "firstName": "Arun"
    },
    {
      "role": "Full Stack Developer",
      "connect": true,
      "lastName": "Basker",
      "connected": "2021-03-08T18:30:00.000Z",
      "firstName": "Arun"
    },
    {
      "lastName": "Murugan",
      "connected": "2020-11-19T18:30:00.000Z",
      "firstName": "Rajesh",
      "nonButton": true
    },
    {
      "role": "Tester",
      "connect": true,
      "lastName": "Kumar",
      "connected": "2021-02-17T18:30:00.000Z",
      "firstName": "Madhan"
    },
    {
      "lastName": "Kumar",
      "connected": "2020-01-11T18:30:00.000Z",
      "firstName": "Mahesh",
      "nonButton": true
    },
    {
      "lastName": "Kumar",
      "connected": "2020-12-19T18:30:00.000Z",
      "firstName": "Bharath",
      "nonButton": true
    },
    {
      "role": "Graphics Designer",
      "lastName": "Moorthy",
      "connected": "2021-02-17T18:30:00.000Z",
      "firstName": "Umesh"
    },
    {
      "lastName": "Boopalan",
      "connected": "2021-03-08T18:30:00.000Z",
      "firstName": "Bharani",
      "nonButton": true
    },
    {
      "role": "Full Stack Developer",
      "lastName": "K",
      "connected": "2020-11-19T18:30:00.000Z",
      "firstName": "Ananad"
    },
    {
      "lastName": "Vijay",
      "connected": "2021-02-17T18:30:00.000Z",
      "firstName": "Joseph",
      "nonButton": true
    },
    {
      "role": "Software Developer",
      "lastName": "Azhar",
      "connected": "2020-12-31T18:30:00.000Z",
      "firstName": "Mohammed"
    },
    {
      "role": "Software Engineer",
      "lastName": "Manohar",
      "connected": "2020-11-01T18:30:00.000Z",
      "firstName": "Ramya"
    }
  ]