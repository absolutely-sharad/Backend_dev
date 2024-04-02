const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());
//let users = ['mohit', 'sharad', 'ravi', 'pradeep'];
const books = [
    {
        writer: "J.K. Rowling",
        bookName: "Harry Potter and the Philosopher's Stone",
        genre: "Fantasy",
        description: "Follows the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, who all study at Hogwarts School of Witchcraft and Wizardry.",
    },
    {
        writer: "George Orwell",
        bookName: "1984",
        genre: "Dystopian Fiction",
        description: "Portrays a totalitarian regime and its effects on the lives of its citizens, exploring themes of surveillance, manipulation, and control.",
    },
    {
        writer: "Harper Lee",
        bookName: "To Kill a Mockingbird",
        genre: "Fiction",
        description: "Narrated by a young girl named Scout Finch, it explores themes of racism, injustice, and moral growth in the American South during the 1930s.",
    },
    {
        writer: "R.K. Narayan",
        bookName: "Malgudi Days",
        genre: "Fiction",
        description: "A collection of short stories set in the fictional town of Malgudi, portraying the lives of ordinary people and their struggles, joys, and sorrows.",
    },
    {
        writer: "Vikram Seth",
        bookName: "A Suitable Boy",
        genre: "Fiction",
        description: "Set in post-independence India, the novel follows the story of a young woman's search for a suitable husband, exploring themes of love, politics, and societal norms.",
    },
    {
        writer: "Arundhati Roy",
        bookName: "The God of Small Things",
        genre: "Fiction",
        description: "Set in Kerala, the novel tells the story of fraternal twins Rahel and Estha, exploring themes of love, caste discrimination, and political turmoil.",
    }
];
const movies = [
    {
        movieName: "Inception",
        director: "Christopher Nolan",
        genre: "Science Fiction",
        description: "Follows a professional thief who steals information by infiltrating the subconscious of his targets, exploring themes of dreams, reality, and identity.",
    },
    {
        movieName: "The Shawshank Redemption",
        director: "Frank Darabont",
        genre: "Drama",
        description: "Based on a Stephen King novella, the film follows the story of a banker who is wrongly convicted of murder and his experiences in Shawshank State Penitentiary.",
    },
    {
        movieName: "The Dark Knight",
        director: "Christopher Nolan",
        genre: "Superhero",
        description: "Follows Batman as he faces off against the Joker, exploring themes of chaos, morality, and vigilantism.",
    },
    {
        movieName: "Pulp Fiction",
        director: "Quentin Tarantino",
        genre: "Crime",
        description: "A nonlinear narrative that follows the lives of several criminals in Los Angeles, intertwining their stories of violence, redemption, and betrayal.",
    },
    {
        movieName: "Interstellar",
        director: "Christopher Nolan",
        genre: "Science Fiction",
        description: "Follows a group of astronauts who travel through a wormhole in search of a new habitable planet for humanity, exploring themes of time, space, and love.",
    },
    {
        movieName: "Fight Club",
        director: "David Fincher",
        genre: "Drama",
        description: "Follows an insomniac office worker and a charismatic soap salesman who form an underground fight club as a form of therapy, exploring themes of consumerism and masculinity.",
    },
];
router.get('/user', function (req, res) {
    const { user } = req.body;
    for (let i = 0; i < users.length; i++) {
        //"user"-> can be named as anything you want and in postman -> body -> raw -> JSON
        if (users[i].name == user) {
            return res.send(users[i]);
        }
    }
    // use return to tackle this error {Cannot set headers after they are sent to the client}
    return res.send('user not found')
})
app.use('/', router);
app.listen(3000, function () {
    console.log('server started', 3000);
})