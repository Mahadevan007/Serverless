exports.handler = async (event) => {
  return {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    statusCode: 200,
    body: JSON.stringify(suggestionData),
  };
};

const suggestionData = [
  {
    topic: " Industry leaders in India you may know ",
    profiles: [
      {
        meta: "Based on your profile",
        name: "Deepak Kumar",
        role: "Software Engineer",
        type: "connect",
      },
      {
        meta: "Anna Univeristy",
        name: "Manoj L",
        role: "Techical Lead",
        type: "connect",
      },
      {
        meta: "Anna Univeristy",
        name: "Sanjay Kumar",
        role: "Writer",
        type: "connect",
      },
      {
        meta: "Anna Univeristy",
        name: "Aravind Raj",
        role: "Senior Software Engineer",
        type: "connect",
      },
      {
        meta: "Based on your profile",
        name: "Narmadha",
        role: "Python Developer",
        type: "connect",
      },
      {
        meta: "Based on your profile",
        name: "Gautham Raj",
        role: "Tester",
        type: "connect",
      },
      {
        meta: "Anna Univeristy",
        name: "Lavanya T",
        role: "Software Engineer",
        type: "connect",
      },
      {
        meta: "Based on your profile",
        name: "Mahesh Kumar",
        role: "Software Engineer",
        type: "connect",
      },
    ],
  },
  {
    topic: "People you may know from Anna Univeristy",
    profiles: [
      {
        meta: "Anna Univeristy",
        name: "Deepak Kumar",
        role: "Software Engineer",
        type: "connect",
      },
      {
        meta: "Anna Univeristy",
        name: "Manoj L",
        role: "Techical Lead",
        type: "connect",
      },
      {
        meta: "Anna Univeristy",
        name: "Sanjay Kumar",
        role: "Writer",
        type: "connect",
      },
      {
        meta: "Anna Univeristy",
        name: "Aravind Raj",
        role: "Senior Software Engineer",
        type: "connect",
      },
      {
        meta: "Anna Univeristy",
        name: "Narmadha",
        role: "Python Developer",
        type: "connect",
      },
      {
        meta: "Anna Univeristy",
        name: "Gautham Raj",
        role: "Tester",
        type: "connect",
      },
      {
        meta: "Anna Univeristy",
        name: "Lavanya T",
        role: "Software Engineer",
        type: "connect",
      },
      {
        meta: "Anna Univeristy",
        name: "Mahesh Kumar",
        role: "Software Engineer",
        type: "connect",
      },
    ],
  },
];
