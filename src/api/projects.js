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
    name: "Two's Company Cookbook",
    desc:
      "A personal cookbook site I created with Rails and React, designed as my go-to platform for viewing and managing my collection of personal recipes. I can create and modify recipies, and anyone can sign up to add private notes to each recipe, making it easy to jot down tweaks or tips each time I make them. Best viewed on mobile.",
    github_link: "cookbook-site",
    website: "https://twoscompanycookbook.com/",
    stack: [
      { class: "fa-ruby", color: "text-brand-ruby" },
      { class: "fa-rails", color: "text-brand-rails" },
      { class: "fa-react", color: "text-brand-react" },
      { class: "fa-postgresql", color: "text-brand-postgresql" },
      { class: "fa-tailwind", color: "text-brand-tailwind" }
    ],
    deploy: [
      { class: "fa-heroku", color: "text-brand-heroku" },
      { class: "fa-firebase", color: "text-brand-firebase" },
      { class: "fa-google-cloud", color: "text-brand-google-cloud" }
    ],
    image: "twos-company-cookbook.jpg"
  },
  {
    name: "Filler",
    desc:
      "Web app clone of the GamePigeon iMessage game made with Python and Flask. It's my sister's favorite game and she wanted a version to play when her friends aren't available. It's played against a computer which will algorithmically make the best move each time.",
    github_link: "filler",
    stack: [{ class: "fa-python", color: "text-brand-python" }],
    deploy: [{ class: "fa-heroku", color: "text-brand-heroku" }],
    image: "filler.jpg"
  },
  {
    name: "Forj Custom Homes",
    desc:
      "The official website for Forj Custom Homes, a custom home project management business based out of Carlise, ON.",
    stack: [{ class: "fa-react", color: "text-brand-react" }],
    deploy: [
      { class: "fa-firebase", color: "text-brand-firebase" },
      { class: "fa-google-cloud", color: "text-brand-google-cloud" }
    ],
    image: "forj-custom-homes.jpg"
  },
  {
    name: "Movie Matching App",
    desc:
      "A social film app that transforms the often daunting task of deciding what movie to watch into a seamless process. Users curate personal watchlists and, using a Tinder-style interface, can match with friends on a mutual film choice for their next movie night.",
    github_link: "movie-match",
    stack: [
      { class: "fa-ruby", color: "text-brand-ruby" },
      { class: "fa-rails", color: "text-brand-rails" },
      { class: "fa-react", color: "text-brand-react" },
      { class: "fa-postgresql", color: "text-brand-postgresql" }
    ],
    image: "moviematch.jpg"
  }
];

export default projects;
