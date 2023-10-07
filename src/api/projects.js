const projects = [
  // {
  //   name: "alexbmoreira.ca",
  //   desc:
  //     "This site was designed and built myself using Vue.js and Tailwind. I made it to display the skills and experience on my resume in a more appealing way, as well as to highlight notable personal projects that aren't listed on there.",
  //   github_link: "alexbmoreira.ca",
  //   stack: [
  //     {
  //       name: "vue",
  //       paths: 2
  //     },
  //     {
  //       name: "tailwind",
  //       paths: 0
  //     }
  //   ],
  //   deploy: [
  //     {
  //       name: "firebase",
  //       paths: 5
  //     }
  //   ],
  //   image: "alexbmoreira.jpg"
  // },
  {
    name: "Two's Company Cookbook",
    desc:
      "A personal cookbook site I created with Rails and React, designed as my go-to platform for viewing my collection of personal recipes. For added functionality, there's a sign-up feature that lets me add notes to each recipe, making it easier to jot down tweaks or tips each I make it. Best viewed on mobile.",
    github_link: "cookbook-site",
    website: "https://twoscompanycookbook.com/",
    stack: [
      {
        name: "ruby",
        paths: 0
      },
      {
        name: "rails",
        paths: 0
      },
      {
        name: "postgres",
        paths: 0
      },
      {
        name: "tailwind",
        paths: 0
      }
    ],
    deploy: [
      {
        name: "heroku",
        paths: 0
      },
      {
        name: "firebase",
        paths: 5
      }
    ],
    image: "twos-company-cookbook.jpg"
  },
  {
    name: "Filler",
    desc:
      "Web app clone of the GamePigeon iMessage game made with Python and Flask. It's my sister's favorite game and she wanted a version to play when her friends aren't available. It's played against a computer which will algorithmically make the best move each time.",
    github_link: "filler",
    stack: [
      {
        name: "python",
        paths: 3
      }
    ],
    deploy: [
      {
        name: "heroku",
        paths: 0
      }
    ],
    image: "filler.jpg"
  },
  {
    name: "Movie Matching App",
    desc:
      "A social film app that transforms the often daunting task of deciding what movie to watch into a seamless process. Users curate personal watchlists and, using a Tinder-style interface, can match with friends on a mutual film choice for their next movie night.",
    github_link: "movie-match",
    stack: [
      {
        name: "ruby",
        paths: 0
      },
      {
        name: "rails",
        paths: 0
      },
      {
        name: "postgres",
        paths: 0
      },
      {
        name: "react",
        paths: 0
      }
    ],
    image: "moviematch.jpg"
  }
];

export default projects;
