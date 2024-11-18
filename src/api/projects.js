/* eslint-disable prettier/prettier */
const projects = [
  // {
  //   name: "alexbmoreira.ca",
  //   desc:
  //     "This site was designed and built myself using Vue.js and Tailwind. I made it to display the skills and experience on my resume in a more appealing way, as well as to highlight notable personal projects that aren't listed on there.",
  //   github_link: "alexbmoreira.ca",
  //   stack: ["vuejs", "tailwind"],
  //   deploy: ["firebase", "google-cloud"],
  //   image: "alexbmoreira.jpg"
  // },
  {
    id: "cookbook",
    name: "Two's Company Cookbook",
    desc:
      "A personal cookbook site I created with Rails and React, designed as my go-to platform for viewing and managing my collection of personal recipes. I can create and modify recipies, and anyone can sign up to add private notes to each recipe, making it easy to jot down tweaks or tips each time I make them. Best viewed on mobile.",
    github_link: "cookbook-site",
    website: "https://twoscompanycookbook.com/",
    stack: [
      { name: "Ruby", link: "https://www.ruby-lang.org/en/", class: "fa-ruby", color: "text-brand-ruby" },
      { name: "Ruby on Rails", link: "https://rubyonrails.org/", class: "fa-rails", color: "text-brand-rails" },
      { name: "React", link: "https://react.dev/", class: "fa-react", color: "text-brand-react" },
      { name: "PostgreSQL", link: "https://www.postgresql.org/", class: "fa-postgresql", color: "text-brand-postgresql" },
      { name: "TailwindCSS", link: "https://tailwindcss.com/", class: "fa-tailwind", color: "text-brand-tailwind" }
    ],
    deploy: [
      { name: "Heroku", link: "https://www.heroku.com/", class: "fa-heroku", color: "text-brand-heroku" },
      { name: "Firebase", link: "https://firebase.google.com/", class: "fa-firebase", color: "text-brand-firebase" },
      { name: "Google Cloud", link: "https://cloud.google.com/", class: "fa-google-cloud", color: "text-brand-google-cloud" }
    ],
    image: "twos-company-cookbook.jpg"
  },
  {
    id: "filler",
    name: "Filler",
    desc:
      "Web app clone of the GamePigeon iMessage game made with Python and Flask. It's my sister's favorite game and she wanted a version to play when her friends aren't available. It's played against a computer which will algorithmically make the best move each time.",
    github_link: "filler",
    stack: [{ name: "Python", link: "https://www.python.org/", class: "fa-python", color: "text-brand-python" }],
    deploy: [{ name: "Heroku", link: "https://www.heroku.com/", class: "fa-heroku", color: "text-brand-heroku" }],
    image: "filler.jpg"
  },
  {
    id: "forj",
    name: "Forj Custom Homes",
    desc:
      "The official website for Forj Custom Homes, a custom home project management business based out of Carlise, ON.",
    stack: [
      { name: "React", link: "https://react.dev/", class: "fa-react", color: "text-brand-react" },
      { name: "TailwindCSS", link: "https://tailwindcss.com/", class: "fa-tailwind", color: "text-brand-tailwind" }
    ],
    deploy: [
      { name: "Firebase", link: "https://firebase.google.com/", class: "fa-firebase", color: "text-brand-firebase" },
      { name: "Google Cloud", link: "https://cloud.google.com/", class: "fa-google-cloud", color: "text-brand-google-cloud" }
    ],
    image: "forj-custom-homes.jpg"
  },
  {
    id: "match-cut",
    name: "Movie Matching App",
    desc:
      "A social film app that transforms the often daunting task of deciding what movie to watch into a seamless process. Users curate personal watchlists and, using a Tinder-style interface, can match with friends on a mutual film choice for their next movie night.",
    github_link: "match-cut",
    stack: [
      { name: "Elixir", link: "https://elixir-lang.org/", class: "fa-elixir", color: "text-brand-elixir" },
      { name: "Phoenix", link: "https://www.phoenixframework.org/", class: "fa-phoenix", color: "text-brand-phoenix" },
      { name: "PostgreSQL", link: "https://www.postgresql.org/", class: "fa-postgresql", color: "text-brand-postgresql" }
    ],
    wip: true
  }
];

export default projects;
