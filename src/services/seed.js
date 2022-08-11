const movies = [
    {
        id: 0,
        name: "Top Gun: Maverick",
        image: "https://m.media-amazon.com/images/I/71fxwaK9hDL._AC_SL1500_.jpg",
        description: "The lives of two great American pilots and a small civilian crew are affected by a giant plane crash that left them with severe injuries.",
        genre: "Action"
    },
    {
        id: 1,
        name: "The north man",
        image: "https://encuadres.com.mx/common/fotos/The_Northman_poster.jpg",
        description : "'The Northman' is a brutal revenge story marked by violence, vengeance and vastness Mostly set in 10th-century Iceland, The Northman tells the story of a Viking prince who sets out to avenge his father's death at the hands of his uncle — a legend that inspired Shakespeare's Hamlet.",
        genre: "drama"
    },
    {
        id: 2,
        name: "Sonic 2",
        image :"https://sm.ign.com/ign_es/screenshot/default/fl0u5uixwaazev7_cphe.jpg",
        description: "Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
        genre: "Comedy/Action"
    },
    {
        id: 3,
        name: "Thor: Love and Thunder",
        image :"https://www.entupantalla.com/wp-content/uploads/2022/05/56015L68_THOR_SPAIN_IntPayoff_1Sheet-scaled.jpg",
        description: "Thor: Love and Thunder brings Thor's ex-girlfriend, Jane Foster (Natalie Portman), back into the picture. Since their breakup in the Marvel Cinematic Universe, Thor has been single and flirting with everyone. The comics, however, have seen Thor in several romantic relationships other than Jane. What is this?",
        genre: "Action"
    },
    {
        id: 4,
        name: "The black phone",
        image :"https://pbs.twimg.com/media/FIxQPIgWQAcf90E.jpg:large",
        description: "Finney, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer's previous victims.",
        genre: "Thiller"
    },
    {
        id: 5,
        name: "Turning Red",
        image :"https://static.wikia.nocookie.net/disney/images/b/be/Turning_Red_Poster.jpg",
        description: "“Turning Red” follows Meilin “Mei” Lee, a 13-year-old Chinese-Canadian girl on the brink of adolescence. Mei's ancestors share a mystical connection with the red panda species, and one morning she discovers what this truly means when she wakes up from a nightmare to find that she has transformed into a giant red panda.",
        genre: "Animation"
    },
    {
        id: 6,
        name: "The batman",
        image :"https://www.quepeliculaver.com/uploads/2022/02/the-batman-posters-individuales-robert-pattinson.jpg",
        description: "A reclusive billionaire who obsessively protects Gotham City as a masked vigilante to cope with his traumatic past. Batman is around 30 years old and is not yet an experienced crime fighter, as director Matt Reeves wanted to explore the character before he becomes fully formed",
        genre: "Action"
    },
    {
        id: 7,
        name: "Avatar 2",
        image :"https://assets-prd.ignimgs.com/2022/05/09/avatar-the-way-of-water-poster-1652105534773.jpeg",
        description: "Premise. Set more than a decade after the events of the first film, Avatar: The Way of Water begins to tell the story of the Sully family, the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
        genre: "Action"
    },
    {
        id: 8,
        name: "Bullet train",
        image :"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2022/06/bullet-train-2731497.jpg",
        description: "Bullet Train is a 2022 American action comedy film starring Brad Pitt as an assassin who has to deal with enemies while riding a Japanese bullet train. The film is directed by David Leitch based on a screenplay by Zak Olkewicz that adapts the Japanese novel Maria Beetle by Kōtarō Isaka.",
        genre: "Comedy/Action"
    },
    {
        id: 9,
        name: "Black Adam",
        image :"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/11/black-adam-poster.jpg?itok=-PQZ9fwr",
        description: "After nearly five-thousand years of imprisonment, Black Adam (Dwayne Johnson), an antihero from the ancient city of Kahndaq, is unleashed into modern times. His brute tactics and way of justice attract the attention of the Justice Society of America (JSA), who try to stop his rampage, teach him how to be a hero more than a villain, and must team up to stop a force more powerful than Adam himself.",
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

export {movies, paymentMethods, venues};