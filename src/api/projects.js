const projects = [
  {
    name: "alexbmoreira.ca",
    desc:
      "This site was designed and built myself using Vue.js and Tailwind. I made it to display the skills and experience on my resume in a more appealing way, as well as to highlight notable personal projects that aren't listed on there.",
    github_link: "alexbmoreira.ca",
    stack: [
      {
        name: "vue",
        paths: 2
      },
      {
        name: "tailwindcss",
        paths: 0
      }
    ],
    deploy: [
      {
        name: "firebase",
        paths: 4
      }
    ],
    image: "alexbmoreira.jpg"
  },
  {
    name: "Filler",
    desc:
      "Web app clone of the GamePigeon iMessage game made with Python and Flask. It's my sister's favorite game and she wanted a version to play when her friends aren't available. It's played against a computer which will algorithmically make the best move each time.",
    github_link: "filler",
    website: "https://playfiller.herokuapp.com/",
    stack: [
      {
        name: "python",
        paths: 2
      },
      {
        name: "javascript",
        paths: 2
      },
      {
        name: "html5",
        paths: 4
      },
      {
        name: "css3",
        paths: 4
      }
    ],
    deploy: [
      {
        name: "heroku",
        paths: 2
      }
    ],
    image: "filler.jpg"
  },
  {
    name: "Movie Matching App",
    desc:
      "A work-in-progress web app that will allow users to add their friends, as well as search for and add movies to a watchlist. The app will decide what to watch with their friends based on matches from a swipeable UI not unlike most dating apps.",
    github_link: "movie-match",
    stack: [
      {
        name: "python",
        paths: 2
      },
      {
        name: "django",
        paths: 0
      },
      {
        name: "postgresql",
        paths: 4
      },
      {
        name: "vue",
        paths: 2
      },
      {
        name: "tailwindcss",
        paths: 0
      }
    ],
    image: "moviematch.jpg"
  },
  {
    name: "Namaste",
    desc:
      "A simple yoga sequence builder put together over a weekend for the 2020 Winter Hacklympics hackathon. Coded with a partner in Django and Vue.js.",
    github_link: "yoga-app",
    website: "https://namaste-22f27.web.app/",
    devpost: "https://devpost.com/software/namaste-q1j6gk",
    stack: [
      {
        name: "python",
        paths: 2
      },
      {
        name: "django",
        paths: 0
      },
      {
        name: "postgresql",
        paths: 4
      },
      {
        name: "vue",
        paths: 2
      },
      {
        name: "css3",
        paths: 4
      }
    ],
    deploy: [
      {
        name: "heroku",
        paths: 2
      },
      {
        name: "firebase",
        paths: 4
      }
    ],
    image: "namaste.jpg"
  }
];

export default projects;
