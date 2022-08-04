const movies = [
    {
        id: 1,
        name: "Top Gun",
        image: "../movies/top-1.png",
        description: "The lives of two great American pilots and a small civilian crew are affected by a giant plane crash that left them with severe injuries.",
        genre: "Action"
    },
    {
        id: 2,
        name: "The north man",
        image: "../movies/2.png",
        description : "",
        genre: "drama"
    },
    {
        id: 3,
        name: "Sonic 2",
        image :"../movies/3.png",
        description: "",
        genre: "Comedy/Action"
    },
    {
        id: 4,
        name: "Thor: Love and Thunder",
        image :"../movies/4.png",
        description: "",
        genre: "Action"
    },
    {
        id: 5,
        name: "The black phone",
        image :"../movies/5.png",
        description: "",
        genre: "Thiller"
    },
    {
        id: 6,
        name: "Turning Red",
        image :"../movies/6.png",
        description: "",
        genre: "Animation"
    },
    {
        id: 7,
        name: "The batman",
        image :"../movies/7.png",
        description: "",
        genre: "Action"
    },
    {
        id: 8,
        name: "Avatar 2",
        image :"../movies/8.png",
        description: "",
        genre: "Action"
    },
    {
        id: 9,
        name: "Bullet train",
        image :"../movies/9.png",
        description: "",
        genre: "Comedy/Action"
    },
    {
        id: 10,
        name: "Black Adam",
        image :"../movies/10.png",
        description: "",
        genre: "Action"
    }
];

const paymentMethods = [
    {
      id: 1,
      name: "Credit Card",
      icon: "credit-card",
      description: "Pay with your credit card",
      selected: true,
    },
    {
      id: 2,
      name: "Debit Card",
      icon: "credit-card",
      description: "Pay with your debit card",
      selected: false,
    },
    {
      id: 3,
      name: "Paypal",
      icon: "paypal",
      description: "Pay with your paypal account",
      selected: false,
    },
    {
      id: 4,
      name: "Bitcoin",
      icon: "bitcoin",
      description: "Pay with your bitcoin account",
      selected: false,
    }
];

const venues =[
    {
        id: 1,
        name: "Theater 1",
        adress : "123 Main St",
        city : "New York",
        state : "NY",
        zip : "10001",
        image : "../movies/theater-1.png",
        location: {
            lat: 40.7128,
            lng: -74.0060
        },
        halls : [
            {
                id: 1,
                name: "Hall 1",
            },
            {
                id: 2,
                name: "Hall 2",
            },
            {
                id: 3,
                name: "Hall 3",
            },
            {
                id: 4,
                name: "Hall 4",
            },
            {
                id: 5,
                name: "Hall 5",
            },
            {
                id: 6,
                name: "Hall 6",
            }
        ]
    },
    {
        id: 2,
        name: "Theater 2",
        adress : "123 Main St",
        city : "San Francisco",
        state : "CA",
        zip : "10001",
        image : "../movies/theater-2.png",
        location: {
            lat: 40.7128,
            lng: -74.0060
        },
        halls : [
            {
                id: 1,
                name: "Hall 1",
            },
            {
                id: 2,
                name: "Hall 2",
            },
            {
                id: 3,
                name: "Hall 3",
            },
            {
                id: 4,
                name: "Hall 4",
            },
            {
                id: 5,
                name: "Hall 5",
            },
            {
                id: 6,
                name: "Hall 6",
            }
        ]
    },
    {
        id: 3,
        name: "Theater 3",
        adress : "123 Main St",
        city : "Los Angeles",
        state : "CA",
        zip : "10001",
        image : "../movies/theater-3.png",
        location: {
            lat: 40.7128,
            lng: -74.0060
        },
        halls : [
            {
                id: 1,
                name: "Hall 1",
            },
            {
                id: 2,
                name: "Hall 2",
            },
            {
                id: 3,
                name: "Hall 3",
            },
            {
                id: 4,
                name: "Hall 4",
            },
            {
                id: 5,
                name: "Hall 5",
            },
            {
                id: 6,
                name: "Hall 6",
            }
        ]
    },
    {
        id: 4,
        name: "Theater 4",
        adress : "123 Main St",
        city : "Chicago",
        state : "CA",
        zip : "10001",
        image : "../movies/theater-4.png",
        location: {
            lat: 40.7128,
            lng: -74.0060
        },
        halls : [
            {
                id: 1,
                name: "Hall 1",
            },
            {
                id: 2,
                name: "Hall 2",
            },
            {
                id: 3,
                name: "Hall 3",
            },
            {
                id: 4,
                name: "Hall 4",
            },
            {
                id: 5,
                name: "Hall 5",
            },
            {
                id: 6,
                name: "Hall 6",
            }
        ]
    }
]