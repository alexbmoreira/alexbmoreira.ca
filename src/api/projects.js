import techStack from './techStack';
import cookbook from '@images/projects/twos-company-cookbook.png';
import forj from '@images/projects/forj-custom-homes.png';
import filler from '@images/projects/filler.png';

const projects = [
  // {
  //   name: "alexbmoreira.ca",
  //   desc:
  //     "This site was designed and built myself using Vue.js and Tailwind. I made it to display the skills and experience on my resume in a more appealing way, as well as to highlight notable personal projects that aren't listed on there.",
  //   githubLink: "alexbmoreira.ca",
  //   stack: ["vuejs", "tailwind"],
  //   deploy: ["firebase", "google-cloud"],
  //   image: "alexbmoreira.jpg"
  // },
  {
    name: "Two's Company Cookbook",
    desc:
      'A personal cookbook site I created with Rails and React, designed as my go-to platform for viewing and managing my collection of personal recipes. I can create and modify recipes, and anyone can sign up to add private notes to each one, making it easy to jot down tweaks or tips each time I make them. Best viewed on mobile.',
    githubLink: 'cookbook-site',
    website: 'https://twoscompanycookbook.com/',
    stack: [techStack.ruby, techStack.rails, techStack.react, techStack.postgresql, techStack.tailwind],
    deploy: [techStack.heroku, techStack.firebase, techStack.googleCloud],
    image: cookbook,
    type: 'app'
  },
  {
    name: 'Forj Custom Homes',
    desc:
      'The official website for Forj Custom Homes, a custom home project management business based out of Carlise, ON.',
    stack: [techStack.react, techStack.tailwind],
    deploy: [techStack.firebase, techStack.googleCloud],
    website: 'https://forjcustomhomes.ca/',
    image: forj,
    type: 'app'
  },
  // {
  //   name: "Movie Matching App",
  //   desc:
  //     "A social film app that transforms the often daunting task of deciding what movie to watch into a seamless process. Users curate personal watchlists and, using a Tinder-style interface, can match with friends on a mutual film choice for their next movie night.",
  //   githubLink: "match-cut",
  //   stack: [techStack.elixir, techStack.phoenix, techStack.postgresql],
  //   wip: true,
  //   type: 'app'
  // },
  {
    name: 'Plex Server',
    desc:
      'A self-hosted media server stack centered around Plex, running in Docker and managed with tools like Kometa, Radarr, Sonarr, and Overseerr. It also features a custom web app where I can pick a seat in my home theater, print a real ticket on an Epson receipt printer, and schedule the movie to start at a specified time. This project is my pride and joy and I love it as if it were my child.',
    githubLink: 'plex-server',
    stack: [techStack.linux, techStack.javascript, techStack.python],
    deploy: [techStack.docker, techStack.cloudflare],
    type: 'homelab'
  },
  {
    name: 'TMDB-Elixir',
    desc:
      "A simple Elixir library for TMDB (The Movie Database). I couldn't find an Elixir package for TMDB that did what I wanted so I made this myself to use in another project I'm current working on.",
    stack: [techStack.elixir],
    website: 'https://www.hex.pm/packages/tmdb_elixir',
    githubLink: 'tmdb-elixir',
    type: 'package'
  },
  {
    name: 'Filler',
    desc:
      "Web app clone of the GamePigeon iMessage game made with Python and Flask. It's my sister's favorite game and she wanted a version to play when her friends aren't available. It's played against a computer which will algorithmically make the best move each time.",
    githubLink: 'filler',
    stack: [techStack.python],
    deploy: [techStack.docker, techStack.cloudflare],
    website: 'https://filler.alex-plex.xyz/',
    image: filler,
    type: 'app'
  },
  {
    name: 'Home Assistant Server',
    desc:
      'A Raspberry Pi-powered smart home setup using Home Assistant OS, with custom automations for lighting, voice activation, and environmental monitoring. I built this to tinker, learn, and streamline daily life.',
    githubLink: 'home-assistant',
    type: 'homelab'
  }
];

export default projects;
