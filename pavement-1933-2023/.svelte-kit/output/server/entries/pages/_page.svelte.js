import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, f as each } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
import { group } from "d3-array";
import { scaleLinear, scaleBand, scaleSqrt } from "d3-scale";
import { line, curveBumpX } from "d3-shape";
import { timeParse, timeFormat } from "d3-time-format";
const Topper_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: '.wrap.svelte-7yydmz.svelte-7yydmz{max-width:980px;margin-left:auto;margin-right:auto;margin-top:0}.wrap.svelte-7yydmz img.svelte-7yydmz{width:100%}.pvmt.svelte-7yydmz.svelte-7yydmz{margin-bottom:40px}.pvmt-wrap.svelte-7yydmz.svelte-7yydmz{position:relative}.dek.svelte-7yydmz.svelte-7yydmz{margin:0 auto;position:absolute}p.dek.svelte-7yydmz.svelte-7yydmz{font-family:var(--font-body);font-size:40px;letter-spacing:20px}.dek.expand.svelte-7yydmz.svelte-7yydmz{left:50%;bottom:6%;transform:translate(-50%,0);width:40%;height:8px}.banner-wrap.svelte-7yydmz.svelte-7yydmz{position:relative;display:flex;justify-content:space-around;max-width:700px;margin-left:auto;margin-right:auto;margin-top:20px}.banner.svelte-7yydmz.svelte-7yydmz{max-width:100px;position:relative;width:20%}.banner.svelte-7yydmz.svelte-7yydmz:after{content:"";position:absolute;top:0;left:50%;transform:translate(-50%,0);width:10px;height:10px;border-radius:50%;background-color:var(--color-text);border:1px solid var(--d2020s)}@keyframes svelte-7yydmz-wave{0%{transform:rotate(10deg)}50%{transform:rotate(-10deg)}100%{transform:rotate(10deg)}}.banner-wrap.svelte-7yydmz img.svelte-7yydmz{height:100%;animation-name:svelte-7yydmz-wave;animation-duration:5s;animation-timing-function:ease-in;animation-iteration-count:infinite;transform-origin:top center}@media(max-width: 900px){.dek.expand.svelte-7yydmz.svelte-7yydmz{width:30%}}@media(max-width: 768px){.wrap.svelte-7yydmz.svelte-7yydmz{height:100vh;position:relative}.bgcontent.svelte-7yydmz.svelte-7yydmz{position:absolute;top:50%;left:0;transform:translate(0,-50%)}p.dek.svelte-7yydmz.svelte-7yydmz{font-size:27px;letter-spacing:11px}.banner-wrap.svelte-7yydmz.svelte-7yydmz{margin-top:30px;width:88%}}@media(max-width: 480px){.pvmt.svelte-7yydmz.svelte-7yydmz{margin-bottom:28px}p.dek.svelte-7yydmz.svelte-7yydmz{font-size:23px;letter-spacing:7px}.banner.svelte-7yydmz.svelte-7yydmz{width:19%}}',
  map: null
};
const Topper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<div class="wrap svelte-7yydmz"><div class="bgcontent svelte-7yydmz"><div class="pvmt-wrap svelte-7yydmz" data-svelte-h="svelte-19wge4g"><img class="pvmt svelte-7yydmz" src="${escape(base, true) + "/images/pvmt.png"}" alt="Stylized lettering spelling PAVEMENT"> <p class="dek year svelte-7yydmz" style="left:10%; bottom:0;">1933</p> <div class="dek expand svelte-7yydmz"><div class="border b-top"></div></div> <p class="dek year svelte-7yydmz" style="right:10%; bottom:0;">2023</p></div> <div class="banner-wrap svelte-7yydmz"><div class="banner svelte-7yydmz"><img style="${"animation-delay:" + escape(Math.random(), true) + "s; transform:rotate(10deg);"}" src="${escape(base, true) + "/images/banner-1.png"}" alt="banner from a Pavement show in 2022" class="svelte-7yydmz"></div> <div class="banner svelte-7yydmz"><img style="${"animation-delay:" + escape(Math.random(), true) + "s; transform:rotate(-20deg);"}" src="${escape(base, true) + "/images/banner-2.png"}" alt="banner from a Pavement show in 2022" class="svelte-7yydmz"></div> <div class="banner svelte-7yydmz"><img style="${"animation-delay:" + escape(Math.random(), true) + "s; transform:rotate(30deg);"}" src="${escape(base, true) + "/images/banner-3.png"}" alt="banner from a Pavement show in 2022" class="svelte-7yydmz"></div> <div class="banner svelte-7yydmz"><img style="${"animation-delay:" + escape(Math.random(), true) + "s; transform:rotate(15deg);"}" src="${escape(base, true) + "/images/banner-4.png"}" alt="banner from a Pavement show in 2022" class="svelte-7yydmz"></div> <div class="banner svelte-7yydmz"><img style="${"animation-delay:" + escape(Math.random(), true) + "s; transform:rotate(-15deg);"}" src="${escape(base, true) + "/images/banner-5.png"}" alt="banner from a Pavement show in 2022" class="svelte-7yydmz"></div></div></div> </div>`;
});
const raw$1 = [
  {
    track: 1,
    song: "You're Killing Me",
    album: "Slay Tracks: 1933–1969",
    year: 1989,
    comp: "Westing (By Musket And Sextant)",
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 2,
    song: "Box Elder",
    album: "Slay Tracks: 1933–1969",
    year: 1989,
    comp: "Westing (By Musket And Sextant)",
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 3,
    song: "Maybe Maybe",
    album: "Slay Tracks: 1933–1969",
    year: 1989,
    comp: "Westing (By Musket And Sextant)",
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 4,
    song: "She Believes",
    album: "Slay Tracks: 1933–1969",
    year: 1989,
    comp: "Westing (By Musket And Sextant)",
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 5,
    song: "Price Yeah!",
    album: "Slay Tracks: 1933–1969",
    year: 1989,
    comp: "Westing (By Musket And Sextant)",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 6,
    song: "Forklift",
    album: "Demolition Plot J-7",
    year: 1990,
    comp: "Westing (By Musket And Sextant)",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 7,
    song: "Spizzle Trunk",
    album: "Demolition Plot J-7",
    year: 1990,
    comp: "Westing (By Musket And Sextant)",
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 8,
    song: "Recorder Grot",
    album: "Demolition Plot J-7",
    year: 1990,
    comp: "Westing (By Musket And Sextant)",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 9,
    song: "Internal K-Dart",
    album: "Demolition Plot J-7",
    year: 1990,
    comp: "Westing (By Musket And Sextant)",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 10,
    song: "Perfect Depth",
    album: "Demolition Plot J-7",
    year: 1990,
    comp: "Westing (By Musket And Sextant)",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 11,
    song: "Recorder Grot (Rally)",
    album: "Demolition Plot J-7",
    year: 1990,
    comp: "Westing (By Musket And Sextant)",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 12,
    song: "Heckler Spray",
    album: "Perfect Sound Forever",
    year: 1991,
    comp: "Westing (By Musket And Sextant)",
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 13,
    song: "From Now On",
    album: "Perfect Sound Forever",
    year: 1991,
    comp: "Westing (By Musket And Sextant)",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 14,
    song: "Angel Carver Blues / Mellow Jazz Docent",
    album: "Perfect Sound Forever",
    year: 1991,
    comp: "Westing (By Musket And Sextant)",
    aka: "Angel Carver Blues,Mellow Jazz Docent",
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 15,
    song: "Drive-by Fader",
    album: "Perfect Sound Forever",
    year: 1991,
    comp: "Westing (By Musket And Sextant)",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 16,
    song: "Debris Slide",
    album: "Perfect Sound Forever",
    year: 1991,
    comp: "Westing (By Musket And Sextant)",
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 17,
    song: "Home",
    album: "Perfect Sound Forever",
    year: 1991,
    comp: "Westing (By Musket And Sextant)",
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 18,
    song: "Krell Vid-User",
    album: "Perfect Sound Forever",
    year: 1991,
    comp: "Westing (By Musket And Sextant)",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 20,
    song: "Mercy Snack",
    album: "Summer Babe",
    year: 1991,
    comp: "Westing (By Musket And Sextant)",
    aka: "Mercy Snack: The Laundromat",
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 21,
    song: "Baptiss Blacktick",
    album: "Summer Babe",
    year: 1991,
    comp: "Westing (By Musket And Sextant)",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 22,
    song: "My First Mine",
    album: "Us / My First Mine",
    year: 1991,
    comp: "Westing (By Musket And Sextant)",
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 1,
    song: "Summer Babe",
    album: "Slanted and Enchanted",
    year: 1992,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 2,
    song: "Trigger Cut",
    album: "Slanted and Enchanted",
    year: 1992,
    comp: null,
    aka: "Wounded Kite,Trigger Cut / Wounded Kite",
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 3,
    song: "No Life Singed Her",
    album: "Slanted and Enchanted",
    year: 1992,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 4,
    song: "In the Mouth a Desert",
    album: "Slanted and Enchanted",
    year: 1992,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 5,
    song: "Conduit for Sale!",
    album: "Slanted and Enchanted",
    year: 1992,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 6,
    song: "Zurich Is Stained",
    album: "Slanted and Enchanted",
    year: 1992,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 7,
    song: "Chesley's Little Wrists",
    album: "Slanted and Enchanted",
    year: 1992,
    comp: null,
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 8,
    song: "Loretta's Scars",
    album: "Slanted and Enchanted",
    year: 1992,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 9,
    song: "Here",
    album: "Slanted and Enchanted",
    year: 1992,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 10,
    song: "Two States",
    album: "Slanted and Enchanted",
    year: 1992,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 11,
    song: "Perfume-V",
    album: "Slanted and Enchanted",
    year: 1992,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 12,
    song: "Fame Throwa",
    album: "Slanted and Enchanted",
    year: 1992,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 13,
    song: "Jackals, False Grails: The Lonesome Era",
    album: "Slanted and Enchanted",
    year: 1992,
    comp: null,
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 14,
    song: "Our Singer",
    album: "Slanted and Enchanted",
    year: 1992,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 29,
    song: "Sue Me Jack",
    album: "Trigger Cut Plus Two",
    year: 1992,
    comp: "Slanted and Enchanted: Luxe & Reduxe",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 30,
    song: "So Stark (You're a Skyscraper)",
    album: "Trigger Cut Plus Two",
    year: 1992,
    comp: "Slanted and Enchanted: Luxe & Reduxe",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 25,
    song: "Texas Never Whispers",
    album: "Watery, Domestic",
    year: 1992,
    comp: "Slanted and Enchanted: Luxe & Reduxe",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 26,
    song: "Frontwards",
    album: "Watery, Domestic",
    year: 1992,
    comp: "Slanted and Enchanted: Luxe & Reduxe",
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 27,
    song: "Feed 'em to the (Linden) Lions",
    album: "Watery, Domestic",
    year: 1992,
    comp: "Slanted and Enchanted: Luxe & Reduxe",
    aka: "Lions (Linden)",
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 28,
    song: "Shoot the Singer (1 Sick Verse)",
    album: "Watery, Domestic",
    year: 1992,
    comp: "Slanted and Enchanted: Luxe & Reduxe",
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 1,
    song: "Silence Kid",
    album: "Crooked Rain, Crooked Rain",
    year: 1994,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 2,
    song: "Elevate Me Later",
    album: "Crooked Rain, Crooked Rain",
    year: 1994,
    comp: null,
    aka: "Ell Ess Two",
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 3,
    song: "Stop Breathin",
    album: "Crooked Rain, Crooked Rain",
    year: 1994,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 4,
    song: "Cut Your Hair",
    album: "Crooked Rain, Crooked Rain",
    year: 1994,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 5,
    song: "Newark Wilder",
    album: "Crooked Rain, Crooked Rain",
    year: 1994,
    comp: null,
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 6,
    song: "Unfair",
    album: "Crooked Rain, Crooked Rain",
    year: 1994,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 7,
    song: "Gold Soundz",
    album: "Crooked Rain, Crooked Rain",
    year: 1994,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 8,
    song: "5-4=Unity",
    album: "Crooked Rain, Crooked Rain",
    year: 1994,
    comp: null,
    aka: null,
    "decade-2020s": null,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 9,
    song: "Range Life",
    album: "Crooked Rain, Crooked Rain",
    year: 1994,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 10,
    song: "Heaven Is a Truck",
    album: "Crooked Rain, Crooked Rain",
    year: 1994,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 11,
    song: "Hit the Plane Down",
    album: "Crooked Rain, Crooked Rain",
    year: 1994,
    comp: null,
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 12,
    song: "Fillmore Jive",
    album: "Crooked Rain, Crooked Rain",
    year: 1994,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 13,
    song: "Camera",
    album: "Cut Your Hair",
    year: 1994,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 14,
    song: "Stare",
    album: "Cut Your Hair",
    year: 1994,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 17,
    song: "Kneeling Bus",
    album: "Gold Soundz",
    year: 1994,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 18,
    song: "Strings of Nashville",
    album: "Gold Soundz",
    year: 1994,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 19,
    song: "Exit Theory",
    album: "Gold Soundz",
    year: 1994,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 21,
    song: "Jam Kids",
    album: "Haunt You Down / Jam Kids",
    year: 1994,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 22,
    song: "Haunt You Down",
    album: "Haunt You Down / Jam Kids",
    year: 1994,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 23,
    song: "Kris Kraft",
    album: "Father To A Sister Of Thought",
    year: 1995,
    comp: "Wowee Zowee: Sordid Sentinels Edition",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 24,
    song: "Mussle Rock (Is A Horse In Transition)",
    album: "Father To A Sister Of Thought",
    year: 1995,
    comp: "Wowee Zowee: Sordid Sentinels Edition",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 15,
    song: "Raft",
    album: "Range Life",
    year: 1995,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 16,
    song: "Coolin' By Sound",
    album: "Range Life",
    year: 1995,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 21,
    song: "False Skorpion",
    album: "Rattled by La Rush",
    year: 1995,
    comp: "Wowee Zowee: Sordid Sentinels Edition",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 22,
    song: "Easily Fooled",
    album: "Rattled by La Rush",
    year: 1995,
    comp: "Wowee Zowee: Sordid Sentinels Edition",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 46,
    song: "Brink of the Clouds",
    album: "Rattled by La Rush",
    year: 1995,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: "Candylad,Brink of the Clouds / Candylad",
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 1,
    song: "We Dance",
    album: "Wowee Zowee",
    year: 1995,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 2,
    song: "Rattled by the Rush",
    album: "Wowee Zowee",
    year: 1995,
    comp: null,
    aka: null,
    "decade-2020s": null,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 3,
    song: "Black Out",
    album: "Wowee Zowee",
    year: 1995,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 4,
    song: "Brinx Job",
    album: "Wowee Zowee",
    year: 1995,
    comp: null,
    aka: null,
    "decade-2020s": null,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 5,
    song: "Grounded",
    album: "Wowee Zowee",
    year: 1995,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 6,
    song: "Serpentine Pad",
    album: "Wowee Zowee",
    year: 1995,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 7,
    song: "Motion Suggests",
    album: "Wowee Zowee",
    year: 1995,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 8,
    song: "Father to a Sister of Thought",
    album: "Wowee Zowee",
    year: 1995,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 9,
    song: "Extradition",
    album: "Wowee Zowee",
    year: 1995,
    comp: null,
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 10,
    song: "Best Friend's Arm",
    album: "Wowee Zowee",
    year: 1995,
    comp: null,
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 11,
    song: "Grave Architecture",
    album: "Wowee Zowee",
    year: 1995,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 12,
    song: "AT&T",
    album: "Wowee Zowee",
    year: 1995,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 13,
    song: "Flux=Rad",
    album: "Wowee Zowee",
    year: 1995,
    comp: null,
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 14,
    song: "Fight This Generation",
    album: "Wowee Zowee",
    year: 1995,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 15,
    song: "Kennel District",
    album: "Wowee Zowee",
    year: 1995,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 16,
    song: "Pueblo",
    album: "Wowee Zowee",
    year: 1995,
    comp: null,
    aka: "Pueblo Domain",
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 17,
    song: "Half a Canyon",
    album: "Wowee Zowee",
    year: 1995,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 18,
    song: "Western Homes",
    album: "Wowee Zowee",
    year: 1995,
    comp: null,
    aka: null,
    "decade-2020s": null,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 25,
    song: "Give It a Day",
    album: "Pacific Trim",
    year: 1996,
    comp: "Wowee Zowee: Sordid Sentinels Edition",
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 26,
    song: "Gangsters & Pranksters",
    album: "Pacific Trim",
    year: 1996,
    comp: "Wowee Zowee: Sordid Sentinels Edition",
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 27,
    song: "Saganaw",
    album: "Pacific Trim",
    year: 1996,
    comp: "Wowee Zowee: Sordid Sentinels Edition",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 28,
    song: "I Love Perth",
    album: "Pacific Trim",
    year: 1996,
    comp: "Wowee Zowee: Sordid Sentinels Edition",
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 48,
    song: "No More Kings",
    album: "School House Rock! Rocks",
    year: 1996,
    comp: "Wowee Zowee: Sordid Sentinels Edition",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 1,
    song: "Stereo",
    album: "Brighten the Corners",
    year: 1997,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 2,
    song: "Shady Lane",
    album: "Brighten the Corners",
    year: 1997,
    comp: null,
    aka: "J vs. S",
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 3,
    song: "Transport Is Arranged",
    album: "Brighten the Corners",
    year: 1997,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 4,
    song: "Date w/ IKEA",
    album: "Brighten the Corners",
    year: 1997,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 5,
    song: "Old to Begin",
    album: "Brighten the Corners",
    year: 1997,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 6,
    song: "Type Slowly",
    album: "Brighten the Corners",
    year: 1997,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 7,
    song: "Embassy Row",
    album: "Brighten the Corners",
    year: 1997,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 8,
    song: "Blue Hawaiian",
    album: "Brighten the Corners",
    year: 1997,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 9,
    song: "We Are Underused",
    album: "Brighten the Corners",
    year: 1997,
    comp: null,
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 10,
    song: "Passat Dream",
    album: "Brighten the Corners",
    year: 1997,
    comp: null,
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 11,
    song: "Starlings of the Slipstream",
    album: "Brighten the Corners",
    year: 1997,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 12,
    song: "Fin",
    album: "Brighten the Corners",
    year: 1997,
    comp: null,
    aka: "Infinite Spark",
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 22,
    song: "Cherry Area",
    album: "Shady Lane",
    year: 1997,
    comp: "Brighten the Corners: Nicene Creedence Edition",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 23,
    song: "Wanna Mess You Around",
    album: "Shady Lane",
    year: 1997,
    comp: "Brighten the Corners: Nicene Creedence Edition",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 23,
    song: "Unseen Power of the Picket Fence",
    album: "Shady Lane",
    year: 1997,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 24,
    song: "No Tan Lines",
    album: "Shady Lane",
    year: 1997,
    comp: "Brighten the Corners: Nicene Creedence Edition",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 16,
    song: "Westie Can Drum",
    album: "Stereo",
    year: 1997,
    comp: "Brighten the Corners: Nicene Creedence Edition",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 17,
    song: "Winner of the",
    album: "Stereo",
    year: 1997,
    comp: "Brighten the Corners: Nicene Creedence Edition",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 18,
    song: "Birds in the Majic Industry",
    album: "Stereo",
    year: 1997,
    comp: "Brighten the Corners: Nicene Creedence Edition",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 13,
    song: "The Porpoise and the Hand Grenade",
    album: "Carrot Rope",
    year: 1999,
    comp: "Terror Twilight: Farewell Horizontal",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 14,
    song: "Rooftop Gambler",
    album: "Carrot Rope",
    year: 1999,
    comp: "Terror Twilight: Farewell Horizontal",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 19,
    song: "Harness Your Hopes",
    album: "Carrot Rope",
    year: 1999,
    comp: "Brighten the Corners: Nicene Creedence Edition",
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 20,
    song: "Roll With the Wind",
    album: "Carrot Rope",
    year: 1999,
    comp: "Brighten the Corners: Nicene Creedence Edition",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 15,
    song: "Your Time to Change",
    album: "Major Leagues",
    year: 1999,
    comp: "Terror Twilight: Farewell Horizontal",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 16,
    song: "Stub Your Toe",
    album: "Major Leagues",
    year: 1999,
    comp: "Terror Twilight: Farewell Horizontal",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 18,
    song: "Decouvert de Soleil",
    album: "Major Leagues",
    year: 1999,
    comp: "Terror Twilight: Farewell Horizontal",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 27,
    song: "The Killing Moon",
    album: "Major Leagues",
    year: 1999,
    comp: "Brighten the Corners: Nicene Creedence Edition",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 42,
    song: "The Classical",
    album: "Major Leagues",
    year: 1999,
    comp: "Brighten the Corners: Nicene Creedence Edition",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 1,
    song: "Spit on a Stranger",
    album: "Terror Twilight",
    year: 1999,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 2,
    song: "Folk Jam",
    album: "Terror Twilight",
    year: 1999,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 3,
    song: "You Are a Light",
    album: "Terror Twilight",
    year: 1999,
    comp: null,
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 4,
    song: "Cream of Gold",
    album: "Terror Twilight",
    year: 1999,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 5,
    song: "Major Leagues",
    album: "Terror Twilight",
    year: 1999,
    comp: null,
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 6,
    song: "Platform Blues",
    album: "Terror Twilight",
    year: 1999,
    comp: null,
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 7,
    song: "Ann Don't Cry",
    album: "Terror Twilight",
    year: 1999,
    comp: null,
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 8,
    song: "Billie",
    album: "Terror Twilight",
    year: 1999,
    comp: null,
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 9,
    song: "Speak, See, Remember",
    album: "Terror Twilight",
    year: 1999,
    comp: null,
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 10,
    song: "The Hexx",
    album: "Terror Twilight",
    year: 1999,
    comp: null,
    aka: "And Then (The Hexx)",
    "decade-2020s": 1,
    "decade-2010s": 1,
    "decade-1990s": 1
  },
  {
    track: 11,
    song: "Carrot Rope",
    album: "Terror Twilight",
    year: 1999,
    comp: null,
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 12,
    song: "Shagbag",
    album: null,
    year: null,
    comp: "Terror Twilight: Farewell Horizontal",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 14,
    song: "Beautiful As A Butterfly",
    album: null,
    year: null,
    comp: "Brighten the Corners: Nicene Creedence Edition",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 15,
    song: "Cataracts",
    album: null,
    year: null,
    comp: "Brighten the Corners: Nicene Creedence Edition",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 20,
    song: "Nothing Ever Happens",
    album: null,
    year: null,
    comp: "Slanted and Enchanted: Luxe & Reduxe",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 21,
    song: "Circa 1762",
    album: null,
    year: null,
    comp: "Slanted and Enchanted: Luxe & Reduxe",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 22,
    song: "Kentucky Cocktail",
    album: null,
    year: null,
    comp: "Slanted and Enchanted: Luxe & Reduxe",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 23,
    song: "Secret Knowledge of Backroads",
    album: null,
    year: null,
    comp: "Slanted and Enchanted: Luxe & Reduxe",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 23,
    song: "My Radio",
    album: null,
    year: null,
    comp: "Westing (By Musket And Sextant)",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 24,
    song: "Nail Clinic",
    album: null,
    year: null,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 25,
    song: "All My Friends",
    album: null,
    year: null,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 26,
    song: "Soiled Little Filly",
    album: null,
    year: null,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 30,
    song: "Nigel",
    album: null,
    year: null,
    comp: "Brighten the Corners: Nicene Creedence Edition",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 31,
    song: "Greenlander",
    album: null,
    year: null,
    comp: "Slanted and Enchanted: Luxe & Reduxe",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 31,
    song: "Bad Version of War",
    album: null,
    year: null,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 32,
    song: "Rain Ammunition",
    album: null,
    year: null,
    comp: "Slanted and Enchanted: Luxe & Reduxe",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 32,
    song: "Same Way of Saying",
    album: null,
    year: null,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 33,
    song: "Drunks With Guns",
    album: null,
    year: null,
    comp: "Slanted and Enchanted: Luxe & Reduxe",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 33,
    song: "Hands Off the Bayou",
    album: null,
    year: null,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 34,
    song: "Ed Ames",
    album: null,
    year: null,
    comp: "Slanted and Enchanted: Luxe & Reduxe",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 35,
    song: "The List of Dorms",
    album: null,
    year: null,
    comp: "Slanted and Enchanted: Luxe & Reduxe",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 35,
    song: "Be the Hook",
    album: null,
    year: null,
    comp: "Terror Twilight: Farewell Horizontal",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 35,
    song: "Neil Haggerty vs. Jon Spencer",
    album: null,
    year: null,
    comp: "Brighten the Corners: Nicene Creedence Edition",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 36,
    song: "Destroy Mater Dei",
    album: null,
    year: null,
    comp: "Brighten the Corners: Nicene Creedence Edition",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 38,
    song: "Fucking Righteous",
    album: null,
    year: null,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 39,
    song: "Colorado",
    album: null,
    year: null,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 39,
    song: "For Sale! The Preston School of Industry",
    album: null,
    year: null,
    comp: "Terror Twilight: Farewell Horizontal",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 41,
    song: "Flood Victim",
    album: null,
    year: null,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 42,
    song: "JMC Retro",
    album: null,
    year: null,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 43,
    song: "Rug Rat",
    album: null,
    year: null,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": null
  },
  {
    track: 47,
    song: "Tarter Martyr",
    album: null,
    year: null,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: "Tartar Martyr",
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 47,
    song: "Baby Yeah",
    album: null,
    year: null,
    comp: "Slanted and Enchanted: Luxe & Reduxe",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 49,
    song: "The Sutcliffe Catering Song",
    album: null,
    year: null,
    comp: "Crooked Rain, Crooked Rain: LA's Desert Origins",
    aka: null,
    "decade-2020s": null,
    "decade-2010s": null,
    "decade-1990s": 1
  },
  {
    track: 49,
    song: "Painted Soldiers",
    album: null,
    year: null,
    comp: "Wowee Zowee: Sordid Sentinels Edition",
    aka: null,
    "decade-2020s": 1,
    "decade-2010s": null,
    "decade-1990s": 1
  }
];
const Scroller_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "svelte-scroller-outer.svelte-xdbafy{display:block;position:relative}svelte-scroller-background.svelte-xdbafy{display:block;position:relative;width:100%}svelte-scroller-foreground.svelte-xdbafy{display:block;position:relative;z-index:2}svelte-scroller-foreground.svelte-xdbafy::after{content:' ';display:block;clear:both}svelte-scroller-background-container.svelte-xdbafy{display:block;position:absolute;width:100%;max-width:100%;pointer-events:none;will-change:transform}",
  map: null
};
const handlers = [];
if (typeof window !== "undefined") {
  const run_all = () => handlers.forEach((fn) => fn());
  window.addEventListener("scroll", run_all);
  window.addEventListener("resize", run_all);
}
if (typeof IntersectionObserver !== "undefined") {
  const map = /* @__PURE__ */ new Map();
  new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        const update = map.get(entry.target);
        const index = handlers.indexOf(update);
        if (entry.isIntersecting) {
          if (index === -1)
            handlers.push(update);
        } else {
          update();
          if (index !== -1)
            handlers.splice(index, 1);
        }
      });
    },
    {
      rootMargin: "400px 0px"
      // TODO why 400?
    }
  );
}
const Scroller = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let style;
  let widthStyle;
  let { top = 0 } = $$props;
  let { bottom = 1 } = $$props;
  let { threshold = 0.5 } = $$props;
  let { query = "section" } = $$props;
  let { parallax = false } = $$props;
  let { index = 0 } = $$props;
  let { count = 0 } = $$props;
  let { offset = 0 } = $$props;
  let { progress = 0 } = $$props;
  let { visible = false } = $$props;
  let outer;
  let foreground;
  let background;
  let offset_top = 0;
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  if ($$props.query === void 0 && $$bindings.query && query !== void 0)
    $$bindings.query(query);
  if ($$props.parallax === void 0 && $$bindings.parallax && parallax !== void 0)
    $$bindings.parallax(parallax);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  $$result.css.add(css$4);
  style = `
		position: ${"absolute"};
		top: 0;
		transform: translate(0, ${offset_top}px);
		z-index: ${1};
	`;
  widthStyle = "";
  return ` <svelte-scroller-outer class="svelte-xdbafy"${add_attribute("this", outer, 0)}><svelte-scroller-background-container class="background-container svelte-xdbafy" style="${escape(style, true) + escape(widthStyle, true)}"><svelte-scroller-background class="svelte-xdbafy"${add_attribute("this", background, 0)}>${slots.background ? slots.background({}) : ``}</svelte-scroller-background></svelte-scroller-background-container> <svelte-scroller-foreground class="svelte-xdbafy"${add_attribute("this", foreground, 0)}>${slots.foreground ? slots.foreground({}) : ``}</svelte-scroller-foreground> </svelte-scroller-outer>`;
});
const Discography_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: `.wrap.svelte-nbie6v.svelte-nbie6v{max-width:var(--widest);margin-left:auto;margin-right:auto;margin-bottom:0}div[slot="background"].svelte-nbie6v.svelte-nbie6v{position:relative;height:100vh}.bgcontent.svelte-nbie6v.svelte-nbie6v{max-width:800px;position:absolute;width:100%;right:0}section.svelte-nbie6v.svelte-nbie6v{height:100vh;width:calc(100% - 815px)}section.spacer.svelte-nbie6v.svelte-nbie6v{height:30vh}section.svelte-nbie6v p.svelte-nbie6v{font-size:16px;line-height:20px;font-family:var(--font-sans);text-align:right;max-width:190px;margin-right:0;margin-left:auto}section.svelte-nbie6v p span.svelte-nbie6v{font-weight:700;display:inline-block}section.svelte-nbie6v p span.d2020s.svelte-nbie6v{background-color:var(--d2020s-light)}section.svelte-nbie6v p span.d2010s.svelte-nbie6v{background-color:var(--d2010s-light)}section.svelte-nbie6v p span.d2020s.d2010s.svelte-nbie6v{background-color:var(--d2020s-d2010s)}p.source.svelte-nbie6v.svelte-nbie6v{margin-left:0}.album-wrap.svelte-nbie6v.svelte-nbie6v{display:flex}.album-wrap.svelte-nbie6v img.svelte-nbie6v{max-width:90px;width:100%}.tracklist.svelte-nbie6v.svelte-nbie6v{display:flex;align-items:flex-end}.track.svelte-nbie6v.svelte-nbie6v{transform:rotate(300deg);transform-origin:top left;width:20px;height:20px;margin-right:2px}.track.separator.svelte-nbie6v.svelte-nbie6v{margin-left:3px}.tracklist.svelte-nbie6v .track.separator p.svelte-nbie6v{overflow:visible !important}.tracklist.svelte-nbie6v .track.separator p.svelte-nbie6v:before{content:"";position:absolute;width:100%;height:8px;top:0;left:0;background-image:url('images/border-h.png');background-repeat:repeat-x;background-size:cover;transform:translate(0,-80%);background-position:30% 0}[data-mode="prod"] .discography-big-wrap .tracklist .track.separator p:before{background-image:url('/sandbox/pavement-1933-2023/images/border-h.png')}.tracklist.svelte-nbie6v .track p.svelte-nbie6v{margin:0;width:90px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-size:14px;position:relative}@keyframes svelte-nbie6v-anim{from{background-position:-500% 0}to{background-position:0 0}}.track.svelte-nbie6v p.svelte-nbie6v{background-repeat:no-repeat;background-position:-500% 0px;background-size:contain}[data-index="1"].svelte-nbie6v .track.d2020s p.svelte-nbie6v{background-image:url('images/highlight-d2020s.png');animation:svelte-nbie6v-anim 0.3s linear 1 forwards}[data-index="2"].svelte-nbie6v .track.d2020s p.svelte-nbie6v{background-image:url('images/highlight-d2020s.png');animation:svelte-nbie6v-anim 0.3s linear 1 forwards}[data-index="2"].svelte-nbie6v .track.d2020s.d2010s p.svelte-nbie6v{background-image:url('images/highlight-d2020s-d2010s.png');animation:svelte-nbie6v-anim 0.3s linear 1 forwards}[data-index="2"].svelte-nbie6v .track.d2010s p.svelte-nbie6v{background-image:url('images/highlight-d2010s.png');animation:svelte-nbie6v-anim 0.3s linear 1 forwards}[data-index="3"].svelte-nbie6v .track.d2010s p.svelte-nbie6v{background-image:url('images/highlight-d2010s.png');animation:svelte-nbie6v-anim 0.3s linear 1 forwards}[data-index="3"].svelte-nbie6v .track.d2020s.d2010s p.svelte-nbie6v{background-image:none}[data-index="4"].svelte-nbie6v .track.d2020s p.svelte-nbie6v{background-image:url('images/highlight-d2020s.png');animation:svelte-nbie6v-anim 0.3s linear 1 forwards}[data-index="4"].svelte-nbie6v .track.d2020s.d2010s p.svelte-nbie6v{background-image:none}[data-mode="prod"] .discography-big-wrap [data-index="1"] .track.d2020s p{background-image:url('/sandbox/pavement-1933-2023/images/highlight-d2020s.png')}[data-mode="prod"] .discography-big-wrap [data-index="2"] .track.d2020s p{background-image:url('/sandbox/pavement-1933-2023/images/highlight-d2020s.png')}[data-mode="prod"] .discography-big-wrap [data-index="2"] .track.d2020s.d2010s p{background-image:url('/sandbox/pavement-1933-2023/images/highlight-d2020s-d2010s.png')}[data-mode="prod"] .discography-big-wrap [data-index="2"] .track.d2010s p{background-image:url('/sandbox/pavement-1933-2023/images/highlight-d2010s.png')}[data-mode="prod"] .discography-big-wrap [data-index="3"] .track.d2010s p{background-image:url('/sandbox/pavement-1933-2023/images/highlight-d2010s.png')}[data-mode="prod"] .discography-big-wrap [data-index="4"] .track.d2020s p{background-image:url('/sandbox/pavement-1933-2023/images/highlight-d2020s.png')}@media(max-width:930px){section.svelte-nbie6v.svelte-nbie6v{width:100%}section.svelte-nbie6v p.svelte-nbie6v{margin-left:auto;margin-right:auto;width:calc(100% - 20px);text-align:left;max-width:460px;padding:10px;outline:2px solid black;background-color:white}.bgcontent.svelte-nbie6v.svelte-nbie6v{max-width:100%;max-width:540px;left:50%}.discography-wrap.svelte-nbie6v.svelte-nbie6v{display:flex;justify-content:space-between}.album-wrap.svelte-nbie6v.svelte-nbie6v,.tracklist.svelte-nbie6v.svelte-nbie6v{display:block}.album-wrap.svelte-nbie6v.svelte-nbie6v{width:16%}.track.svelte-nbie6v.svelte-nbie6v{transform:none;width:100%;height:auto;margin-right:0;margin-bottom:1px}.track.separator.svelte-nbie6v.svelte-nbie6v{margin-left:0;margin-top:7px}.tracklist.svelte-nbie6v .track p.svelte-nbie6v{width:100%;font-size:13px}.track.separator.svelte-nbie6v p.svelte-nbie6v{border-top:1px dashed #999}}`,
  map: null
};
const Discography = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let innerHeight;
  let innerWidth;
  let top;
  let translateX;
  let translateY;
  let index, offset, progress;
  let threshold = 0.6;
  const data2 = raw$1.filter((f) => {
    return f["decade-1990s"];
  }).sort((a, b) => {
    return a.track - b.track;
  });
  const albumOrder = [
    {
      "album": "Westing (By Musket And Sextant)",
      "img": "westing"
    },
    {
      "album": "Slanted and Enchanted",
      "img": "slanted"
    },
    {
      "album": "Crooked Rain, Crooked Rain",
      "img": "crooked"
    },
    { "album": "Wowee Zowee", "img": "wowee" },
    {
      "album": "Brighten the Corners",
      "img": "brighten"
    },
    {
      "album": "Terror Twilight",
      "img": "terror"
    }
  ];
  const byAlbum = group(data2, (d) => {
    if (d.comp) {
      if (albumOrder.includes(d.comp)) {
        return d.comp;
      } else {
        return d.comp.split(":")[0];
      }
    } else {
      return d.album;
    }
  });
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    innerHeight = 660;
    innerWidth = 375;
    top = innerHeight > 600 ? "50%" : "0.02%";
    translateX = innerWidth <= 930 ? "-50%" : "0";
    translateY = innerHeight > 600 ? "-50%" : "0";
    $$rendered = ` <div class="wrap discography-big-wrap svelte-nbie6v">${validate_component(Scroller, "Scroller").$$render(
      $$result,
      {
        top: "0",
        bottom: "1",
        index,
        offset,
        progress,
        threshold
      },
      {
        index: ($$value) => {
          index = $$value;
          $$settled = false;
        },
        offset: ($$value) => {
          offset = $$value;
          $$settled = false;
        },
        progress: ($$value) => {
          progress = $$value;
          $$settled = false;
        },
        threshold: ($$value) => {
          threshold = $$value;
          $$settled = false;
        }
      },
      {
        foreground: () => {
          return `<div slot="foreground" data-svelte-h="svelte-sutcbw"><section class="spacer svelte-nbie6v"></section> <section class="svelte-nbie6v"><p class="svelte-nbie6v">Pavement played 66 songs from their catalog for the <span class="d2020s svelte-nbie6v">2022‑3</span> reunion.</p></section> <section class="svelte-nbie6v"><p class="svelte-nbie6v">Of these, a majority were <span class="d2010s d2020s svelte-nbie6v">also played</span> during the <span class="d2010s svelte-nbie6v">2010</span> reunion.</p></section> <section class="svelte-nbie6v"><p class="svelte-nbie6v">Five songs had been played in 2010 but not the 2020s, including one of my favorite b‑sides, “<a href="https://www.youtube.com/watch?v=3KsYdKwUQvI" target="_blank">Perfect Depth</a>.” The band has also said in interviews that “Rattled by the Rush” was hard to play live.</p></section> <section class="svelte-nbie6v"><p class="svelte-nbie6v">About two dozen songs during the 2022‑3 reunion haven’t been played since the ’90s, including songs on later albums and several b‑sides.</p></section></div>`;
        },
        background: () => {
          return `<div slot="background" class="svelte-nbie6v"><div class="bgcontent svelte-nbie6v" style="${"top:" + escape(top, true) + "; transform:translate(" + escape(translateX, true) + "," + escape(translateY, true) + ")"}"><div class="discography-wrap svelte-nbie6v"${add_attribute("data-index", index, 0)}>${each(albumOrder, (a, ai) => {
            let tracks = byAlbum.get(a.album);
            return ` <div class="album-wrap svelte-nbie6v"><div class="img-wrap"><img src="${escape(base, true) + "/images/album-" + escape(a.img, true) + ".jpg"}" alt="${escape(a.album, true) + " album cover"}" class="svelte-nbie6v"></div> <div class="tracklist svelte-nbie6v">${each(tracks, (track, i) => {
              return `${ai == 0 && i == 0 || i > 0 && track.comp && !tracks[i - 1].comp ? `<div class="track separator svelte-nbie6v" data-svelte-h="svelte-10gks2q"><p class="svelte-nbie6v">B‑SIDES↓</p></div>` : ``} <div class="${"track " + escape(track["decade-2020s"] ? "d2020s" : "", true) + " " + escape(track["decade-2010s"] ? "d2010s" : "", true) + " svelte-nbie6v"}"><p class="svelte-nbie6v">${escape(track.song)}</p> </div>`;
            })}</div> </div>`;
          })}</div> <p class="source svelte-nbie6v" data-svelte-h="svelte-1u8hguv">Note: Songs that were released but not in setlists before 2000 are not included (those songs, all b‑sides, were also not played during reunions).</p>   </div></div>`;
        }
      }
    )} </div>`;
  } while (!$$settled);
  return $$rendered;
});
const raw = [
  {
    song: "AT&T",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        9,
        1
      ]
    ]
  },
  {
    song: "Angel Carver Blues / Mellow Jazz Docent",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Black Out",
    orders: [
      [
        4,
        1
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Blue Hawaiian",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Box Elder",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Conduit for Sale!",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        22,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        24,
        1
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        22,
        1
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Cream of Gold",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Cut Your Hair",
    orders: [
      [
        18,
        1
      ],
      [
        15,
        1
      ],
      [
        15,
        1
      ],
      [
        12,
        1
      ],
      [
        20,
        1
      ],
      [
        7,
        1
      ],
      [
        13,
        1
      ],
      [
        24,
        2
      ],
      [
        18,
        1
      ],
      [
        15,
        1
      ],
      [
        19,
        1
      ],
      [
        23,
        2
      ],
      [
        11,
        1
      ],
      [
        22,
        2
      ],
      [
        2,
        1
      ],
      [
        24,
        2
      ],
      [
        25,
        2
      ],
      [
        26,
        2
      ],
      [
        1,
        1
      ],
      [
        25,
        2
      ],
      [
        23,
        1
      ],
      [
        25,
        2
      ],
      [
        25,
        2
      ],
      [
        6,
        1
      ],
      [
        25,
        2
      ],
      [
        20,
        1
      ],
      [
        21,
        1
      ],
      [
        14,
        1
      ],
      [
        21,
        1
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        20,
        1
      ],
      [
        15,
        1
      ],
      [
        2,
        1
      ],
      [
        25,
        2
      ],
      [
        21,
        1
      ],
      [
        26,
        2
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        4,
        1
      ],
      [
        23,
        2
      ],
      [
        22,
        2
      ],
      [
        24,
        2
      ],
      [
        27,
        2
      ],
      [
        21,
        2
      ],
      [
        1,
        1
      ],
      [
        23,
        2
      ],
      [
        23,
        2
      ],
      [
        23,
        2
      ],
      [
        6,
        1
      ],
      [
        1,
        1
      ],
      [
        25,
        2
      ],
      [
        23,
        1
      ],
      [
        25,
        2
      ],
      [
        17,
        1
      ],
      [
        25,
        2
      ],
      [
        26,
        2
      ],
      [
        25,
        2
      ],
      [
        25,
        2
      ],
      [
        16,
        1
      ],
      [
        7,
        1
      ],
      [
        1,
        1
      ],
      [
        7,
        1
      ],
      [
        11,
        1
      ],
      [
        26,
        1
      ],
      [
        19,
        1
      ],
      [
        23,
        1
      ],
      [
        7,
        1
      ],
      [
        26,
        2
      ],
      [
        18,
        1
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ]
    ]
  },
  {
    song: "Date w/ IKEA",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        14,
        1
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Debris Slide",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        21,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Elevate Me Later",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Embassy Row",
    orders: [
      [
        3,
        1
      ],
      [
        9,
        1
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        23,
        2
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        7,
        1
      ],
      [
        3,
        1
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        24,
        2
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Fame Throwa",
    orders: [
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Father to a Sister of Thought",
    orders: [
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        25,
        2
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        21,
        1
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        5,
        1
      ],
      [
        12,
        1
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        13,
        1
      ]
    ]
  },
  {
    song: "Feed 'em to the (Linden) Lions",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        3,
        1
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Fight This Generation",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        22,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        22,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Fillmore Jive",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        27,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        27,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        27,
        2
      ],
      [
        0,
        0
      ],
      [
        22,
        1
      ],
      [
        0,
        0
      ],
      [
        24,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        27,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Fin",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        22,
        1
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        27,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        21,
        2
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Folk Jam",
    orders: [
      [
        23,
        1
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Frontwards",
    orders: [
      [
        2,
        1
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Gangsters & Pranksters",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Give It a Day",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        22,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Gold Soundz",
    orders: [
      [
        8,
        1
      ],
      [
        3,
        1
      ],
      [
        3,
        1
      ],
      [
        4,
        1
      ],
      [
        7,
        1
      ],
      [
        19,
        1
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        10,
        1
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        8,
        1
      ],
      [
        20,
        1
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        17,
        1
      ],
      [
        23,
        2
      ],
      [
        6,
        1
      ],
      [
        3,
        1
      ],
      [
        24,
        2
      ],
      [
        7,
        1
      ],
      [
        17,
        1
      ],
      [
        19,
        1
      ],
      [
        9,
        1
      ],
      [
        13,
        1
      ],
      [
        15,
        1
      ],
      [
        24,
        2
      ],
      [
        3,
        1
      ],
      [
        10,
        1
      ],
      [
        20,
        1
      ],
      [
        3,
        1
      ],
      [
        15,
        1
      ],
      [
        2,
        1
      ],
      [
        9,
        1
      ],
      [
        12,
        1
      ],
      [
        2,
        1
      ],
      [
        8,
        1
      ],
      [
        14,
        1
      ],
      [
        25,
        2
      ],
      [
        6,
        1
      ],
      [
        15,
        1
      ],
      [
        14,
        1
      ],
      [
        4,
        1
      ],
      [
        7,
        1
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        6,
        1
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ]
    ]
  },
  {
    song: "Grave Architecture",
    orders: [
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        20,
        2
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Grounded",
    orders: [
      [
        15,
        1
      ],
      [
        18,
        1
      ],
      [
        1,
        1
      ],
      [
        1,
        1
      ],
      [
        25,
        2
      ],
      [
        16,
        1
      ],
      [
        24,
        2
      ],
      [
        21,
        2
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        21,
        2
      ],
      [
        21,
        2
      ],
      [
        1,
        1
      ],
      [
        14,
        1
      ],
      [
        17,
        1
      ],
      [
        1,
        1
      ],
      [
        17,
        1
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        1,
        1
      ],
      [
        13,
        1
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        17,
        1
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        14,
        1
      ],
      [
        1,
        1
      ],
      [
        12,
        1
      ],
      [
        1,
        1
      ],
      [
        5,
        1
      ],
      [
        1,
        1
      ],
      [
        10,
        1
      ],
      [
        1,
        1
      ],
      [
        10,
        1
      ],
      [
        22,
        2
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        12,
        1
      ],
      [
        11,
        1
      ],
      [
        1,
        1
      ],
      [
        14,
        1
      ],
      [
        1,
        1
      ],
      [
        8,
        1
      ],
      [
        11,
        1
      ],
      [
        8,
        1
      ],
      [
        10,
        1
      ],
      [
        1,
        1
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        1,
        1
      ],
      [
        25,
        1
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ]
    ]
  },
  {
    song: "Half a Canyon",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        22,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Harness Your Hopes",
    orders: [
      [
        16,
        1
      ],
      [
        19,
        1
      ],
      [
        11,
        1
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        6,
        1
      ],
      [
        9,
        1
      ],
      [
        25,
        2
      ],
      [
        4,
        1
      ],
      [
        16,
        1
      ],
      [
        2,
        1
      ],
      [
        15,
        1
      ],
      [
        11,
        1
      ],
      [
        22,
        2
      ],
      [
        16,
        1
      ],
      [
        9,
        1
      ],
      [
        22,
        1
      ],
      [
        12,
        1
      ],
      [
        10,
        1
      ],
      [
        11,
        1
      ],
      [
        3,
        1
      ],
      [
        22,
        1
      ],
      [
        5,
        1
      ],
      [
        17,
        1
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        10,
        1
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        10,
        1
      ],
      [
        7,
        1
      ],
      [
        12,
        1
      ],
      [
        9,
        1
      ],
      [
        14,
        1
      ],
      [
        19,
        1
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        24,
        2
      ],
      [
        6,
        1
      ],
      [
        20,
        1
      ],
      [
        22,
        2
      ],
      [
        12,
        1
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        22,
        1
      ],
      [
        21,
        1
      ],
      [
        13,
        1
      ],
      [
        5,
        1
      ],
      [
        3,
        1
      ],
      [
        18,
        1
      ],
      [
        18,
        1
      ],
      [
        12,
        1
      ],
      [
        2,
        1
      ],
      [
        19,
        1
      ],
      [
        12,
        1
      ],
      [
        18,
        1
      ],
      [
        13,
        1
      ],
      [
        9,
        1
      ],
      [
        15,
        1
      ],
      [
        10,
        1
      ],
      [
        8,
        1
      ],
      [
        6,
        1
      ],
      [
        15,
        1
      ],
      [
        20,
        1
      ],
      [
        22,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        18,
        1
      ],
      [
        26,
        3
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ]
    ]
  },
  {
    song: "Heaven Is a Truck",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Heckler Spray",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        11,
        1
      ],
      [
        13,
        1
      ],
      [
        7,
        1
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        8,
        1
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        10,
        1
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        8,
        1
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        9,
        1
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        7,
        1
      ],
      [
        6,
        1
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        11,
        1
      ],
      [
        4,
        1
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        11,
        1
      ],
      [
        2,
        1
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Here",
    orders: [
      [
        29,
        3
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        14,
        1
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        28,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        22,
        1
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Home",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        23,
        1
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "I Love Perth",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "In the Mouth a Desert",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        21,
        2
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        21,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        5,
        1
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Kennel District",
    orders: [
      [
        6,
        1
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        22,
        2
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        3,
        1
      ],
      [
        9,
        1
      ],
      [
        12,
        1
      ],
      [
        17,
        1
      ],
      [
        8,
        1
      ],
      [
        19,
        1
      ],
      [
        12,
        1
      ],
      [
        6,
        1
      ],
      [
        15,
        1
      ],
      [
        12,
        1
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        22,
        1
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        5,
        1
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        7,
        1
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        18,
        1
      ],
      [
        4,
        1
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        4,
        1
      ],
      [
        5,
        1
      ],
      [
        20,
        1
      ],
      [
        5,
        1
      ],
      [
        3,
        1
      ],
      [
        3,
        1
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        4,
        1
      ],
      [
        11,
        1
      ],
      [
        9,
        1
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        9,
        1
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        24,
        2
      ],
      [
        6,
        1
      ]
    ]
  },
  {
    song: "Loretta's Scars",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ]
    ]
  },
  {
    song: "Major Leagues",
    orders: [
      [
        27,
        2
      ],
      [
        25,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        20,
        2
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        16,
        1
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        21,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        27,
        2
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        23,
        1
      ],
      [
        0,
        0
      ],
      [
        22,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        23,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Maybe Maybe",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Motion Suggests",
    orders: [
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        21,
        2
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "My First Mine",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "No Life Singed Her",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Old to Begin",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Our Singer",
    orders: [
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Painted Soldiers",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        6,
        1
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Perfume-V",
    orders: [
      [
        20,
        1
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        7,
        1
      ],
      [
        10,
        1
      ],
      [
        15,
        1
      ],
      [
        6,
        1
      ],
      [
        22,
        2
      ],
      [
        5,
        1
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        20,
        1
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Pueblo",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Range Life",
    orders: [
      [
        22,
        1
      ],
      [
        23,
        1
      ],
      [
        19,
        1
      ],
      [
        26,
        2
      ],
      [
        26,
        2
      ],
      [
        25,
        2
      ],
      [
        19,
        1
      ],
      [
        18,
        1
      ],
      [
        23,
        2
      ],
      [
        24,
        2
      ],
      [
        17,
        1
      ],
      [
        19,
        1
      ],
      [
        20,
        1
      ],
      [
        20,
        1
      ],
      [
        16,
        1
      ],
      [
        21,
        1
      ],
      [
        20,
        1
      ],
      [
        16,
        1
      ],
      [
        14,
        1
      ],
      [
        20,
        1
      ],
      [
        18,
        1
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        23,
        2
      ],
      [
        15,
        1
      ],
      [
        23,
        2
      ],
      [
        20,
        1
      ],
      [
        18,
        1
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        11,
        1
      ],
      [
        21,
        1
      ],
      [
        23,
        2
      ],
      [
        21,
        1
      ],
      [
        18,
        1
      ],
      [
        17,
        1
      ],
      [
        24,
        2
      ],
      [
        22,
        2
      ],
      [
        18,
        1
      ],
      [
        27,
        2
      ],
      [
        21,
        1
      ],
      [
        25,
        2
      ],
      [
        26,
        2
      ],
      [
        20,
        1
      ],
      [
        18,
        1
      ],
      [
        24,
        2
      ],
      [
        21,
        1
      ],
      [
        25,
        2
      ],
      [
        22,
        1
      ],
      [
        23,
        1
      ],
      [
        26,
        2
      ],
      [
        23,
        1
      ],
      [
        27,
        2
      ],
      [
        21,
        1
      ],
      [
        21,
        2
      ],
      [
        12,
        1
      ],
      [
        22,
        1
      ],
      [
        22,
        1
      ],
      [
        16,
        1
      ],
      [
        18,
        1
      ],
      [
        22,
        1
      ],
      [
        22,
        1
      ],
      [
        20,
        1
      ],
      [
        20,
        1
      ],
      [
        18,
        1
      ],
      [
        27,
        1
      ],
      [
        24,
        2
      ],
      [
        25,
        2
      ],
      [
        23,
        1
      ],
      [
        25,
        1
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        25,
        2
      ],
      [
        23,
        2
      ],
      [
        21,
        1
      ]
    ]
  },
  {
    song: "Serpentine Pad",
    orders: [
      [
        10,
        1
      ],
      [
        6,
        1
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Shady Lane",
    orders: [
      [
        24,
        2
      ],
      [
        22,
        1
      ],
      [
        21,
        1
      ],
      [
        18,
        1
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        2,
        1
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        10,
        1
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        19,
        1
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        7,
        1
      ],
      [
        5,
        1
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        10,
        1
      ],
      [
        6,
        1
      ],
      [
        19,
        2
      ],
      [
        19,
        1
      ],
      [
        3,
        1
      ],
      [
        12,
        1
      ],
      [
        10,
        1
      ],
      [
        17,
        1
      ],
      [
        16,
        1
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ]
    ]
  },
  {
    song: "She Believes",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Shoot the Singer (1 Sick Verse)",
    orders: [
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Silence Kid",
    orders: [
      [
        17,
        1
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        1,
        1
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        1,
        1
      ],
      [
        7,
        1
      ],
      [
        1,
        1
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        8,
        1
      ]
    ]
  },
  {
    song: "Spit on a Stranger",
    orders: [
      [
        7,
        1
      ],
      [
        7,
        1
      ],
      [
        13,
        1
      ],
      [
        11,
        1
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        12,
        1
      ],
      [
        11,
        1
      ],
      [
        23,
        2
      ],
      [
        14,
        1
      ],
      [
        3,
        1
      ],
      [
        18,
        1
      ],
      [
        3,
        1
      ],
      [
        6,
        1
      ],
      [
        2,
        1
      ],
      [
        7,
        1
      ],
      [
        24,
        2
      ],
      [
        8,
        1
      ],
      [
        23,
        2
      ],
      [
        12,
        1
      ],
      [
        4,
        1
      ],
      [
        24,
        2
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        15,
        1
      ],
      [
        5,
        1
      ],
      [
        12,
        1
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        21,
        1
      ],
      [
        14,
        1
      ],
      [
        16,
        1
      ],
      [
        7,
        1
      ],
      [
        23,
        2
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        13,
        1
      ],
      [
        15,
        1
      ],
      [
        26,
        2
      ],
      [
        22,
        2
      ],
      [
        23,
        2
      ],
      [
        11,
        1
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        23,
        2
      ],
      [
        12,
        1
      ],
      [
        14,
        1
      ],
      [
        10,
        1
      ],
      [
        18,
        1
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        2,
        1
      ],
      [
        8,
        1
      ],
      [
        17,
        1
      ],
      [
        5,
        1
      ],
      [
        10,
        1
      ],
      [
        3,
        1
      ],
      [
        23,
        2
      ],
      [
        20,
        1
      ],
      [
        12,
        1
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ]
    ]
  },
  {
    song: "Spizzle Trunk",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        21,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Starlings of the Slipstream",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        5,
        1
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        3,
        1
      ]
    ]
  },
  {
    song: "Stereo",
    orders: [
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        8,
        1
      ],
      [
        25,
        2
      ],
      [
        14,
        1
      ],
      [
        3,
        1
      ],
      [
        18,
        1
      ],
      [
        2,
        1
      ],
      [
        21,
        2
      ],
      [
        17,
        1
      ],
      [
        5,
        1
      ],
      [
        12,
        1
      ],
      [
        5,
        1
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        2,
        1
      ],
      [
        17,
        1
      ],
      [
        8,
        1
      ],
      [
        11,
        1
      ],
      [
        19,
        1
      ],
      [
        3,
        1
      ],
      [
        2,
        1
      ],
      [
        19,
        1
      ],
      [
        2,
        1
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        2,
        1
      ],
      [
        3,
        1
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        2,
        1
      ],
      [
        23,
        2
      ],
      [
        2,
        1
      ],
      [
        2,
        1
      ],
      [
        22,
        1
      ],
      [
        25,
        2
      ],
      [
        2,
        1
      ],
      [
        5,
        1
      ],
      [
        2,
        1
      ],
      [
        3,
        1
      ],
      [
        7,
        1
      ],
      [
        3,
        1
      ],
      [
        11,
        1
      ],
      [
        2,
        1
      ],
      [
        21,
        1
      ],
      [
        16,
        1
      ],
      [
        27,
        2
      ],
      [
        6,
        1
      ],
      [
        2,
        1
      ],
      [
        22,
        2
      ],
      [
        6,
        1
      ],
      [
        2,
        1
      ],
      [
        7,
        1
      ],
      [
        7,
        1
      ],
      [
        9,
        1
      ],
      [
        24,
        2
      ],
      [
        24,
        2
      ],
      [
        17,
        1
      ],
      [
        16,
        1
      ],
      [
        2,
        1
      ],
      [
        22,
        1
      ],
      [
        14,
        1
      ],
      [
        15,
        1
      ],
      [
        2,
        1
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        13,
        1
      ],
      [
        18,
        1
      ],
      [
        2,
        1
      ]
    ]
  },
  {
    song: "Stop Breathin",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        18,
        1
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        21,
        1
      ],
      [
        22,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        22,
        1
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        23,
        1
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        27,
        2
      ],
      [
        0,
        0
      ],
      [
        28,
        2
      ],
      [
        0,
        0
      ],
      [
        24,
        1
      ],
      [
        28,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        16,
        1
      ],
      [
        25,
        1
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        22,
        1
      ],
      [
        23,
        1
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        22,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Summer Babe",
    orders: [
      [
        28,
        2
      ],
      [
        26,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        23,
        2
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        16,
        1
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        3,
        1
      ],
      [
        14,
        1
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        24,
        2
      ],
      [
        13,
        1
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        21,
        2
      ],
      [
        14,
        1
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        24,
        2
      ],
      [
        18,
        1
      ],
      [
        25,
        2
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        13,
        1
      ],
      [
        24,
        2
      ],
      [
        21,
        1
      ],
      [
        20,
        2
      ],
      [
        2,
        1
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        10,
        1
      ],
      [
        4,
        1
      ],
      [
        4,
        1
      ]
    ]
  },
  {
    song: "The Hexx",
    orders: [
      [
        13,
        1
      ],
      [
        12,
        1
      ],
      [
        18,
        1
      ],
      [
        15,
        1
      ],
      [
        9,
        1
      ],
      [
        8,
        1
      ],
      [
        3,
        1
      ],
      [
        20,
        1
      ],
      [
        12,
        1
      ],
      [
        21,
        2
      ],
      [
        15,
        1
      ],
      [
        13,
        1
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        27,
        2
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        20,
        1
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        13,
        1
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        18,
        1
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        12,
        1
      ],
      [
        11,
        1
      ],
      [
        14,
        1
      ],
      [
        20,
        1
      ],
      [
        21,
        1
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        14,
        1
      ],
      [
        18,
        1
      ],
      [
        16,
        1
      ],
      [
        15,
        1
      ],
      [
        7,
        1
      ],
      [
        12,
        1
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        13,
        1
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ]
    ]
  },
  {
    song: "Transport Is Arranged",
    orders: [
      [
        9,
        1
      ],
      [
        10,
        1
      ],
      [
        9,
        1
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        7,
        1
      ]
    ]
  },
  {
    song: "Trigger Cut",
    orders: [
      [
        5,
        1
      ],
      [
        13,
        1
      ],
      [
        5,
        1
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        4,
        1
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        12,
        1
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        9,
        1
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        5,
        1
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        2,
        1
      ],
      [
        4,
        1
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Two States",
    orders: [
      [
        12,
        1
      ],
      [
        17,
        1
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        21,
        2
      ],
      [
        22,
        2
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        5,
        1
      ],
      [
        15,
        1
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        8,
        1
      ],
      [
        8,
        1
      ],
      [
        16,
        1
      ],
      [
        22,
        2
      ],
      [
        8,
        1
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        23,
        2
      ],
      [
        14,
        1
      ],
      [
        11,
        1
      ],
      [
        12,
        1
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        20,
        1
      ],
      [
        15,
        1
      ],
      [
        13,
        1
      ],
      [
        23,
        2
      ],
      [
        18,
        1
      ],
      [
        18,
        1
      ],
      [
        14,
        1
      ],
      [
        5,
        1
      ],
      [
        18,
        1
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        9,
        1
      ],
      [
        4,
        1
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        6,
        1
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        5,
        1
      ],
      [
        24,
        1
      ],
      [
        26,
        1
      ],
      [
        0,
        0
      ],
      [
        11,
        1
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        9,
        1
      ],
      [
        15,
        1
      ],
      [
        18,
        1
      ]
    ]
  },
  {
    song: "Type Slowly",
    orders: [
      [
        19,
        1
      ],
      [
        14,
        1
      ],
      [
        16,
        1
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        7,
        1
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        21,
        2
      ],
      [
        9,
        1
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        9,
        1
      ],
      [
        16,
        1
      ],
      [
        17,
        1
      ],
      [
        11,
        1
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        17,
        1
      ],
      [
        18,
        1
      ],
      [
        16,
        1
      ],
      [
        12,
        1
      ],
      [
        13,
        1
      ],
      [
        16,
        1
      ],
      [
        19,
        1
      ],
      [
        26,
        2
      ],
      [
        17,
        1
      ],
      [
        19,
        1
      ],
      [
        19,
        1
      ],
      [
        13,
        1
      ],
      [
        16,
        1
      ],
      [
        15,
        1
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        25,
        2
      ],
      [
        24,
        1
      ],
      [
        22,
        1
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ]
    ]
  },
  {
    song: "Unfair",
    orders: [
      [
        25,
        2
      ],
      [
        24,
        1
      ],
      [
        20,
        1
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        10,
        1
      ],
      [
        22,
        2
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        22,
        2
      ],
      [
        17,
        1
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        22,
        1
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        25,
        2
      ],
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        23,
        2
      ],
      [
        12,
        1
      ],
      [
        8,
        1
      ],
      [
        8,
        1
      ],
      [
        7,
        1
      ],
      [
        14,
        1
      ],
      [
        21,
        1
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        11,
        1
      ],
      [
        11,
        1
      ],
      [
        25,
        2
      ],
      [
        14,
        1
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        17,
        1
      ],
      [
        18,
        1
      ],
      [
        13,
        1
      ],
      [
        22,
        1
      ],
      [
        11,
        1
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        7,
        1
      ],
      [
        6,
        1
      ],
      [
        16,
        1
      ]
    ]
  },
  {
    song: "We Dance",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        4,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        18,
        1
      ],
      [
        0,
        0
      ],
      [
        20,
        1
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        22,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        10,
        1
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        23,
        2
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Witchi Tai To",
    orders: [
      [
        30,
        3
      ],
      [
        27,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        27,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        27,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        27,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        29,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        26,
        2
      ],
      [
        0,
        0
      ],
      [
        27,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        21,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "You're Killing Me",
    orders: [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        24,
        2
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    song: "Zurich Is Stained",
    orders: [
      [
        0,
        0
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        13,
        1
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        16,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        7,
        1
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        19,
        1
      ],
      [
        0,
        0
      ],
      [
        17,
        1
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        8,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        9,
        1
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        10,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        12,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        14,
        1
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        15,
        1
      ]
    ]
  }
];
const setlists = [
  {
    eventDate: "2022-05-23",
    venue: "The Fonda Theatre",
    city: "Los Angeles"
  },
  {
    eventDate: "2022-06-02",
    venue: "Parc del Fòrum",
    city: "Barcelona"
  },
  {
    eventDate: "2022-06-10",
    venue: "Parque da Cidade do Porto",
    city: "Porto"
  },
  {
    eventDate: "2022-09-07",
    venue: "Balboa Theatre",
    city: "San Diego"
  },
  {
    eventDate: "2022-09-08",
    venue: "Orpheum Theatre",
    city: "Los Angeles"
  },
  {
    eventDate: "2022-09-09",
    venue: "Orpheum Theatre",
    city: "Los Angeles"
  },
  {
    eventDate: "2022-09-10",
    venue: "Orpheum Theatre",
    city: "Los Angeles"
  },
  {
    eventDate: "2022-09-12",
    venue: "Masonic Auditorium",
    city: "San Francisco"
  },
  {
    eventDate: "2022-09-13",
    venue: "Masonic Auditorium",
    city: "San Francisco"
  },
  {
    eventDate: "2022-09-14",
    venue: "Masonic Auditorium",
    city: "San Francisco"
  },
  {
    eventDate: "2022-09-16",
    venue: "McMenamins Historic Edgefield Manor",
    city: "Troutdale"
  },
  {
    eventDate: "2022-09-17",
    venue: "Paramount Theatre",
    city: "Seattle"
  },
  {
    eventDate: "2022-09-19",
    venue: "Paramount Theatre",
    city: "Denver"
  },
  {
    eventDate: "2022-09-20",
    venue: "Uptown Theater",
    city: "Kansas City"
  },
  {
    eventDate: "2022-09-21",
    venue: "Palace Theatre",
    city: "St. Paul"
  },
  {
    eventDate: "2022-09-22",
    venue: "The Chicago Theatre",
    city: "Chicago"
  },
  {
    eventDate: "2022-09-23",
    venue: "The Chicago Theatre",
    city: "Chicago"
  },
  {
    eventDate: "2022-09-24",
    venue: "Cathedral Theatre at the Masonic Temple",
    city: "Detroit"
  },
  {
    eventDate: "2022-09-26",
    venue: "Massey Hall",
    city: "Toronto"
  },
  {
    eventDate: "2022-09-27",
    venue: "Massey Hall",
    city: "Toronto"
  },
  {
    eventDate: "2022-09-28",
    venue: "Wang Theatre",
    city: "Boston"
  },
  {
    eventDate: "2022-09-30",
    venue: "Kings Theatre",
    city: "Brooklyn"
  },
  {
    eventDate: "2022-10-01",
    venue: "Kings Theatre",
    city: "Brooklyn"
  },
  {
    eventDate: "2022-10-02",
    venue: "Kings Theatre",
    city: "Brooklyn"
  },
  {
    eventDate: "2022-10-03",
    venue: "Kings Theatre",
    city: "Brooklyn"
  },
  {
    eventDate: "2022-10-05",
    venue: "Metropolitan Opera House",
    city: "Philadelphia"
  },
  {
    eventDate: "2022-10-06",
    venue: "Warner Theatre",
    city: "Washington"
  },
  {
    eventDate: "2022-10-08",
    venue: "The Eastern",
    city: "Atlanta"
  },
  {
    eventDate: "2022-10-09",
    venue: "The Eastern",
    city: "Atlanta"
  },
  {
    eventDate: "2022-10-10",
    venue: "ACL Live at The Moody Theater",
    city: "Austin"
  },
  {
    eventDate: "2022-10-10",
    venue: "3TEN Austin City Limits Live",
    city: "Austin"
  },
  {
    eventDate: "2022-10-11",
    venue: "ACL Live at The Moody Theater",
    city: "Austin"
  },
  {
    eventDate: "2022-10-17",
    venue: "O2 Academy Leeds",
    city: "Leeds"
  },
  {
    eventDate: "2022-10-18",
    venue: "Barrowland",
    city: "Glasgow"
  },
  {
    eventDate: "2022-10-19",
    venue: "Usher Hall",
    city: "Edinburgh"
  },
  {
    eventDate: "2022-10-20",
    venue: "O2 Apollo Manchester",
    city: "Manchester"
  },
  {
    eventDate: "2022-10-22",
    venue: "Roundhouse",
    city: "London"
  },
  {
    eventDate: "2022-10-23",
    venue: "Roundhouse",
    city: "London"
  },
  {
    eventDate: "2022-10-24",
    venue: "Roundhouse",
    city: "London"
  },
  {
    eventDate: "2022-10-25",
    venue: "Roundhouse",
    city: "London"
  },
  {
    eventDate: "2022-10-27",
    venue: "Le Grand Rex",
    city: "Paris"
  },
  {
    eventDate: "2022-10-29",
    venue: "Store Vega",
    city: "Copenhagen"
  },
  {
    eventDate: "2022-10-30",
    venue: "Sentrum Scene",
    city: "Oslo"
  },
  {
    eventDate: "2022-10-31",
    venue: "Cirkus",
    city: "Stockholm"
  },
  {
    eventDate: "2022-11-02",
    venue: "VoxHall",
    city: "Aarhus"
  },
  {
    eventDate: "2022-11-04",
    venue: "Aladin",
    city: "Bremen"
  },
  {
    eventDate: "2022-11-05",
    venue: "Tempodrom",
    city: "Berlin"
  },
  {
    eventDate: "2022-11-07",
    venue: "Cirque Royal / Koninklijk Circus",
    city: "Brussels"
  },
  {
    eventDate: "2022-11-08",
    venue: "Koninklijk Theater Carré",
    city: "Amsterdam"
  },
  {
    eventDate: "2022-11-10",
    venue: "Vicar Street",
    city: "Dublin"
  },
  {
    eventDate: "2022-11-11",
    venue: "Vicar Street",
    city: "Dublin"
  },
  {
    eventDate: "2023-02-15",
    venue: "Tokyo Dome City Hall",
    city: "Tokyo"
  },
  {
    eventDate: "2023-02-16",
    venue: "Tokyo Dome City Hall",
    city: "Tokyo"
  },
  {
    eventDate: "2023-02-18",
    venue: "Nanba Hatch",
    city: "Osaka"
  },
  {
    eventDate: "2023-02-22",
    venue: "Perth Concert Hall",
    city: "Perth"
  },
  {
    eventDate: "2023-02-24",
    venue: "Thebarton Theatre",
    city: "Adelaide"
  },
  {
    eventDate: "2023-02-25",
    venue: "Mona Lawns",
    city: "Hobart"
  },
  {
    eventDate: "2023-02-28",
    venue: "Fortitude Music Hall",
    city: "Brisbane"
  },
  {
    eventDate: "2023-03-01",
    venue: "Anita's Theatre",
    city: "Wollongong"
  },
  {
    eventDate: "2023-03-02",
    venue: "Enmore Theatre",
    city: "Sydney"
  },
  {
    eventDate: "2023-03-03",
    venue: "Palais Theatre",
    city: "Melbourne"
  },
  {
    eventDate: "2023-03-04",
    venue: "Mount Duneed Estate",
    city: "Geelong"
  },
  {
    eventDate: "2023-03-07",
    venue: "Civic Theatre",
    city: "Auckland"
  },
  {
    eventDate: "2023-03-08",
    venue: "St James Theatre",
    city: "Wellington"
  },
  {
    eventDate: "2023-05-14",
    venue: "Utah State Fairpark",
    city: "Salt Lake City"
  },
  {
    eventDate: "2023-07-07",
    venue: "Kobetamendi",
    city: "Bilbao"
  },
  {
    eventDate: "2023-07-22",
    venue: "Jodrell Bank Observatory",
    city: "Lower Withington"
  },
  {
    eventDate: "2023-07-24",
    venue: "Heineken Big Top",
    city: "Galway"
  },
  {
    eventDate: "2023-07-27",
    venue: "Harpa",
    city: "Reykjavik"
  },
  {
    eventDate: "2023-07-28",
    venue: "Harpa",
    city: "Reykjavik"
  },
  {
    eventDate: "2023-07-29",
    venue: "Harpa",
    city: "Reykjavik"
  },
  {
    eventDate: "2023-09-07",
    venue: "City Plaza",
    city: "Raleigh"
  },
  {
    eventDate: "2023-09-11",
    venue: "Brooklyn Steel",
    city: "Brooklyn"
  },
  {
    eventDate: "2023-09-12",
    venue: "Brooklyn Steel",
    city: "Brooklyn"
  },
  {
    eventDate: "2023-09-13",
    venue: "Brooklyn Steel",
    city: "Brooklyn"
  },
  {
    eventDate: "2023-09-14",
    venue: "Brooklyn Steel",
    city: "Brooklyn"
  },
  {
    eventDate: "2023-09-16",
    venue: "The ICON Festival Stage at Smale Park",
    city: "Cincinnati"
  }
];
const Setlists_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: `@media(min-width:481px){.select-wrap.svelte-1str936 select.svelte-1str936{background-color:transparent;background-image:url('images/highlight-d2020s.png');background-repeat:no-repeat;background-size:contain}[data-mode="prod"] .setlists-big-wrap .select-wrap select{background-image:url('/sandbox/pavement-1933-2023/images/highlight-d2020s.png')}}.wrap.svelte-1str936.svelte-1str936{max-width:calc(90px + var(--widest));width:100%;margin-left:auto;margin-right:auto}.bgcontent.svelte-1str936.svelte-1str936{max-width:var(--widest);width:calc(100% - 90px);margin-left:auto;margin-right:auto}.select-wrap.svelte-1str936.svelte-1str936{text-align:center}.select-wrap.svelte-1str936 select.svelte-1str936{font-size:18px;font-family:var(--font-sans);font-weight:700;color:black;border:none;border-bottom:1px solid #000;width:100%;max-width:var(--body-width);padding:3px 5px;position:relative}p.prompt.svelte-1str936.svelte-1str936{font-family:var(--font-sans);margin:0;font-size:16px;text-align:center}p.prompt.svelte-1str936 span.svelte-1str936{font-size:20px}.dates-wrap.svelte-1str936.svelte-1str936{position:relative;height:75px}.dates-wrap.svelte-1str936 p.svelte-1str936{position:absolute;font-family:var(--font-condensed);font-size:12px;line-height:12px;margin:0;transform-origin:top left;transform:translate(2px,0) rotate(300deg);white-space:nowrap;background-color:var(--bg);background-repeat:no-repeat;background-position:center;background-size:100%}.dates-wrap.svelte-1str936 p.sdate.svelte-1str936{opacity:0;background-image:url('images/highlight-d2020s.png')}[data-mode="prod"] .setlists-big-wrap .dates-wrap p.sdate{background-image:url('/sandbox/pavement-1933-2023/images/highlight-d2020s.png')}.dates-wrap.svelte-1str936 p.sdate.highlight.svelte-1str936{opacity:1}.dates-wrap.svelte-1str936 p.cdate.svelte-1str936{background-color:var(--bg)}.dates-wrap.svelte-1str936 p.cdate.highlight.svelte-1str936{background-image:url('images/highlight-d2020s.png')}[data-mode="prod"] .setlists-big-wrap .dates-wrap p.cdate.highlight{background-image:url('/sandbox/pavement-1933-2023/images/highlight-d2020s.png')}.dates-wrap.svelte-1str936 .runline.svelte-1str936{position:absolute;border-top:1px solid black;border-left:1px solid black;border-right:1px solid black;height:5px;bottom:-10px}.dates-wrap.svelte-1str936 .runline.svelte-1str936:before{content:"";position:absolute;width:100%;height:5px;top:0;left:0;background-image:url('images/border-h.png');background-repeat:repeat-x;background-size:cover;transform:translate(0,-80%);background-position:13% 0}[data-mode="prod"] .setlists-big-wrap .dates-wrap .runline:before{background-image:url('/sandbox/pavement-1933-2023/images/border-h.png')}.chart-wrap.svelte-1str936.svelte-1str936{position:relative}.label-wrap.svelte-1str936.svelte-1str936{position:absolute;width:100%;height:100%;left:0;top:0;pointer-events:none}.label-wrap.svelte-1str936 p.svelte-1str936{position:absolute;margin:0;font-family:var(--font-condensed);font-size:12px;background-color:var(--bg)}.label-wrap.svelte-1str936 p.set.svelte-1str936{transform:rotate(90deg);transform-origin:top left;left:0;top:35%;text-transform:uppercase;color:var(--d2020s);font-weight:700;letter-spacing:2px;font-size:14px}.label-wrap.svelte-1str936 p.set.encore.svelte-1str936{top:76%;color:var(--d2010s)}g.g-song.svelte-1str936 path.svelte-1str936{fill:none;stroke:var(--d2020s);stroke-width:2;stroke-linecap:round;opacity:0}.circle-wrap.svelte-1str936.svelte-1str936{position:absolute;width:100%;height:100%;top:0;left:0}.g-song.svelte-1str936 .c.svelte-1str936{position:absolute;border-radius:50%;transform:translate(-50%,-50%);background-color:var(--d2020s);opacity:0.4}.g-song.svelte-1str936 .c.s2.svelte-1str936{background-color:var(--d2010s-light);opacity:0.35}.g-song.svelte-1str936 .c.s3.svelte-1str936{background-color:var(--d1990s)}g.g-song.highlight path{opacity:1 !important}.g-song.highlight .c{opacity:1 !important}.g-song.highlight .c:after{content:'';position:absolute;left:50%;top:50%;width:200%;height:200%;transform:translate(-50%,-50%);background-image:url('images/star-yellow.png');background-repeat:no-repeat;background-position:center;background-size:100%}[data-mode="prod"] .g-song.highlight .c:after{background-image:url('/sandbox/pavement-1933-2023/images/star-yellow.png')}.g-song.highlight .c.s2:after, .g-song.highlight .c.s3:after{background-image:url('images/star-blue.png')}[data-mode="prod"] .g-song.highlight .c.s2:after, [data-mode="prod"] .g-song.highlight .c.s3:after{background-image:url('/sandbox/pavement-1933-2023/images/star-blue.png')}.g-song.highlight .c.hover{border:2px solid black}.mults-wrap.svelte-1str936.svelte-1str936{margin-top:20px;position:relative}.mgroup.svelte-1str936.svelte-1str936{margin-bottom:20px}.mgroup.svelte-1str936 .mhed.svelte-1str936{font-family:var(--font-sans);font-weight:700;margin:0 auto 10px auto;font-size:18px;max-width:var(--body-width)}.msets.svelte-1str936.svelte-1str936{margin:0 auto}.msets.svelte-1str936>div.svelte-1str936{margin-bottom:15px;display:flex;justify-content:flex-start}.msets.svelte-1str936 .blurb.svelte-1str936{width:calc((100% - var(--body-width))/2);display:flex;justify-content:flex-end}.msets.svelte-1str936 p.svelte-1str936{font-size:16px;line-height:20px;font-family:var(--font-sans);max-width:190px;width:100%;text-align:right;margin:0 15px 0 0}.msets p span{font-weight:700}.msets.svelte-1str936 img.svelte-1str936{width:100%;height:100%;display:inline;max-width:var(--body-width);mix-blend-mode:multiply}.malkdiv.svelte-1str936.svelte-1str936{max-width:var(--malk-width);position:absolute;right:0;top:40%}img.malk.svelte-1str936.svelte-1str936{width:100%;mix-blend-mode:multiply}@media(max-width:1180px){.malkdiv.svelte-1str936.svelte-1str936{display:none}}@media(max-width:720px){p.prompt.svelte-1str936.svelte-1str936{font-size:14px}p.prompt.svelte-1str936 span.svelte-1str936{font-size:18px}.dates-wrap.svelte-1str936.svelte-1str936{height:100%;width:80px}.dates-wrap.svelte-1str936 p.svelte-1str936{transform:none;text-align:right;left:auto;right:0}.dates-wrap.svelte-1str936 p.cdate.svelte-1str936{opacity:1}.dates-wrap.svelte-1str936 .runline.svelte-1str936{opacity:1;border-top:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-right:none;height:auto;bottom:auto;right:-9px}.dates-wrap.svelte-1str936 .runline.svelte-1str936:before{content:"";position:absolute;width:6px;height:100%;top:0;left:0;background-image:url('images/border-v.png');background-repeat:repeat-y;background-size:cover;transform:translate(-80%,0);background-position:0 51%}[data-mode="prod"] .setlists-big-wrap .dates-wrap .runline:before{background-image:url('/sandbox/pavement-1933-2023/images/border-v.png')}.dates-wrap.svelte-1str936.svelte-1str936,.chart-wrap.svelte-1str936.svelte-1str936{margin-top:40px}.chart-wrap.svelte-1str936.svelte-1str936{width:calc(100% - 80px)}.wrap.svelte-1str936.svelte-1str936{max-width:var(--widest)}.bgcontent.svelte-1str936.svelte-1str936{width:100%}.big-wrap.svelte-1str936.svelte-1str936{display:flex}.label-wrap.svelte-1str936 p.set.svelte-1str936{transform:none;left:20%;top:0;transform:translate(0,-100%);letter-spacing:0px}.label-wrap.svelte-1str936 p.set.encore.svelte-1str936{top:0;transform:translate(0,-100%);left:77%}.msets.svelte-1str936.svelte-1str936{max-width:var(--body-width)}.msets.svelte-1str936 .blurb.svelte-1str936{width:150px;display:block;margin-left:15px;order:2}.msets.svelte-1str936 .blurb p.svelte-1str936{text-align:left}}`,
  map: null
};
const maxShows = 77;
const maxSongs = 30;
const breakpoint$1 = 720;
const Setlists = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let innerWidth;
  let w;
  let desktop;
  let radius;
  let margin;
  let h;
  let width;
  let height;
  let xDomainMax;
  let yDomainMax;
  let xScale;
  let yScale;
  let makeLine;
  let highlightedSong;
  let highlightedShow;
  const parseTime = timeParse("%Y-%m-%d");
  const formatTime = timeFormat("%-m/%-d");
  const runs = {
    "2023-09-11": [72, "Brooklyn", 4],
    "2023-07-27": [68, "Reykjavik", 3],
    "2023-02-15": [51, "Tokyo", 2],
    "2022-11-10": [49, "Dublin", 2],
    "2022-10-22": [36, "London", 4],
    "2022-10-10": [29, "Austin", 3],
    "2022-10-08": [27, "Atlanta", 2],
    "2022-09-30": [21, "Brooklyn", 4],
    "2022-09-26": [18, "Toronto", 2],
    "2022-09-22": [15, "Chicago", 2],
    "2022-09-12": [7, "San Francisco", 3],
    "2022-09-08": [4, "Los Angeles", 3]
  };
  const mults = [
    {
      "hed": "Openers",
      "sets": [
        {
          "blurb": "<span>“Our Singer”</span> opened 10 shows.",
          "img": "oursinger"
        },
        {
          "blurb": "<span>“Grounded”</span> opened 24 shows and was also played throughout the set.",
          "img": "grounded"
        }
      ]
    },
    {
      "hed": "Closers",
      "sets": [
        {
          "blurb": "<span>“Fillmore Jive”</span> was a consistent closer, always played at the end of the first set or the encore, closing 13 shows.",
          "img": "fillmorejive"
        },
        {
          "blurb": "<span>“Witchi Tai To,”</span> a Jim Pepper cover, is the only new song the band played. It closed 13 shows.",
          "img": "witchitaito"
        },
        {
          "blurb": "<span>“Fin”</span> closed 7 shows, but also opened 5 shows.",
          "img": "fin"
        }
      ]
    },
    {
      "hed": "Encores",
      "sets": [
        {
          "blurb": "<span>“Range Life”</span> was the most-played song this reunion. It was played at all but 3 shows, usually at the end of the first set or during the encore.",
          "img": "rangelife"
        },
        {
          "blurb": "<span>“Cut Your Hair”</span> was the second-most played song, often during the encore, but also throughout the set, including 5 as the opener.",
          "img": "cutyourhair"
        },
        {
          "blurb": "<span>“Stop Breathin”</span> was played in 19 encores.",
          "img": "stopbreathin"
        }
      ]
    },
    {
      "hed": "Rarities",
      "sets": [
        {
          "blurb": "<span>“Gangsters & Pranksters,”</span> a <em>Wowee</em> b‑side from the <em>Pacific Trim</em> EP, was played for a few months toward the beginning of the reunion.",
          "img": "gangsters&pranksters"
        },
        {
          "blurb": "<span>“Conduit for Sale!”</span> was not played until the later months.",
          "img": "conduitforsale"
        },
        {
          "blurb": "<span>“Loretta’s Scars,”</span> along with several b‑sides from the <em>Westing</em> comp, were only played during the last few shows, including during the band’s four‑night run at Brooklyn Steel.",
          "img": "lorettasscars"
        }
      ]
    }
  ];
  $$result.css.add(css$2);
  innerWidth = 375;
  w = 375;
  desktop = innerWidth > breakpoint$1;
  radius = desktop ? Math.floor(w / maxShows / 2) : Math.floor(w / maxSongs / 2);
  margin = {
    top: desktop ? 0 : 10,
    bottom: desktop ? 0 : 10,
    left: desktop ? 10 : 0,
    right: desktop ? 10 : 0
  };
  h = desktop ? (radius * 2 + 0.5) * maxSongs : (radius * 2 + 0.5) * maxShows;
  width = w - margin.left - margin.right;
  height = h - margin.top - margin.bottom;
  xDomainMax = desktop ? maxShows - 1 : maxSongs + 1;
  yDomainMax = desktop ? maxSongs + 1 : maxShows - 1;
  xScale = scaleLinear().domain([0, xDomainMax]).range([0, width]);
  yScale = scaleLinear().domain([0, yDomainMax]).range([0, height]);
  makeLine = line().defined(function(d) {
    return d[0] > 0;
  }).x(function(d, i) {
    return desktop ? xScale(i) : xScale(d[0]);
  }).y(function(d, i) {
    return desktop ? yScale(d[0]) : yScale(i);
  }).curve(curveBumpX);
  highlightedSong = "Stereo";
  highlightedShow = null;
  return ` <div class="wrap setlists-big-wrap svelte-1str936"><div class="bgcontent svelte-1str936"><div class="select-wrap svelte-1str936"><select class="svelte-1str936">${each(raw, (d) => {
    return `<option${add_attribute("value", d.song, 0)}>${escape(d.song)}${escape(d.song == "Witchi Tai To" ? " (cover)" : "")} </option>`;
  })}</select></div> <p class="prompt svelte-1str936"><span class="svelte-1str936" data-svelte-h="svelte-19ggm9p">☟</span> ${escape(desktop ? "Hover" : "Tap")} on the grid to see the songs on each night</p> <div class="big-wrap svelte-1str936"><div class="dates-wrap svelte-1str936">${each(setlists, (d, i) => {
    return `${!runs[d.eventDate] || d.venue == "3TEN Austin City Limits Live" ? `<p class="${"sdate " + escape(
      i == 0 ? "first" : i == setlists.length - 1 ? "last" : "",
      true
    ) + " " + escape(highlightedShow == i ? "highlight" : "", true) + " svelte-1str936"}" style="${"left:" + escape(desktop ? xScale(i) : 0, true) + "px; top:" + escape(desktop ? "auto" : `${yScale(i) + radius / 2}px`, true) + "; bottom:" + escape(desktop ? "-8px" : "auto", true)}">${escape(d.city)} ${escape(formatTime(parseTime(d.eventDate)))}</p>` : ``}`;
  })} ${each(Object.keys(runs), (d) => {
    return `<p class="${"cdate " + escape(
      highlightedShow && setlists[highlightedShow].eventDate == d && setlists[highlightedShow].venue != "3TEN Austin City Limits Live" ? "highlight" : "",
      true
    ) + " svelte-1str936"}" style="${"left:" + escape(desktop ? xScale(runs[d][0]) : 0, true) + "px; top:" + escape(
      desktop ? "auto" : `${yScale(runs[d][0]) + radius / 2}px`,
      true
    ) + "; bottom:" + escape(desktop ? "-8px" : "auto", true)}">${escape(runs[d][1])} ${escape(formatTime(parseTime(d)))}</p> <div class="runline svelte-1str936" style="${"width:" + escape(desktop ? `${radius * 2 * runs[d][2]}px` : "5px", true) + "; height:" + escape(desktop ? "5px" : `${radius * 2 * runs[d][2]}px`, true) + "; left:" + escape(
      desktop ? `${xScale(runs[d][0]) + radius / 2}px` : "auto",
      true
    ) + "; top:" + escape(desktop ? "auto" : `${yScale(runs[d][0]) + radius}px`, true) + ";"}"></div>`;
  })}</div> <div class="chart-wrap svelte-1str936"><svg${add_attribute("width", width + margin.left + margin.right, 0)}${add_attribute("height", height + margin.top + margin.bottom, 0)}><g transform="${"translate(" + escape(margin.left, true) + "," + escape(margin.top, true) + ")"}">${each(raw, (d) => {
    return `<g class="${"g-song " + escape(d.song == highlightedSong ? "highlight" : "", true) + " svelte-1str936"}"${add_attribute("data-song", d.song, 0)}><path${add_attribute("d", makeLine(d.orders), 0)} class="svelte-1str936"></path></g>`;
  })}</g></svg> <div class="circle-wrap svelte-1str936" style="${"width:" + escape(width + margin.left + margin.right, true) + "px; height:" + escape(height + margin.top + margin.bottom, true) + "px; transform:translate(" + escape(margin.left, true) + "px," + escape(margin.top, true) + "px)"}">${each(raw, (d) => {
    return `<div class="${"g-song " + escape(d.song == highlightedSong ? "highlight" : "", true) + " svelte-1str936"}"${add_attribute("data-song", d.song, 0)}>${each(d.orders, (o, i) => {
      return `${o[0] > 0 ? `<div class="${"c " + escape(o[1] == 2 ? "s2" : o[1] == 3 ? "s3" : "", true) + " svelte-1str936"}" style="${"left:" + escape(desktop ? xScale(i) : xScale(o[0]), true) + "px; top:" + escape(desktop ? yScale(o[0]) : yScale(i), true) + "px; width:" + escape(radius * 2, true) + "px; height:" + escape(radius * 2, true) + "px;"}"></div>` : ``}`;
    })} </div>`;
  })}</div> <div class="label-wrap svelte-1str936"><p style="${"width:" + escape(desktop ? "auto" : "40px", true) + "; left:" + escape(desktop ? 0 : xScale(0), true) + "px; top:" + escape(desktop ? yScale(0) + radius : 0, true) + "px; transform:" + escape(
    desktop ? `translate(-100%,0)` : `translate(calc(-50% + ${radius * 2}px),calc(-100% - 16px))`,
    true
  ) + "; text-align:" + escape(desktop ? "right" : "center", true) + ";"}" class="svelte-1str936">Opener
						<span style="${"position:" + escape(desktop ? "static" : "absolute", true) + "; top:" + escape(desktop ? "auto" : "100%", true) + "; left:" + escape(desktop ? "auto" : "50%", true) + "; transform:" + escape(desktop ? "none" : "translate(-50%,0)", true)}">${escape(desktop ? "→" : "↓")}</span></p> <p style="${"width:" + escape(desktop ? "auto" : "40px", true) + "; left:" + escape(desktop ? 0 : xScale(xDomainMax - 1), true) + "px; top:" + escape(desktop ? "auto" : 0, true) + "; bottom:" + escape(desktop ? `${radius}px` : "auto", true) + "; transform:" + escape(
    desktop ? `translate(-100%,0)` : `translate(-50%,calc(-100% - 16px))`,
    true
  ) + "; text-align:" + escape(desktop ? "right" : "center", true) + ";"}" class="svelte-1str936">Closer
						<span style="${"position:" + escape(desktop ? "static" : "absolute", true) + "; top:" + escape(desktop ? "auto" : "100%", true) + "; left:" + escape(desktop ? "auto" : "50%", true) + "; transform:" + escape(desktop ? "none" : "translate(-50%,0)", true)}">${escape(desktop ? "→" : "↓")}</span></p> <p class="set svelte-1str936" data-svelte-h="svelte-19y4pxh">Set</p> <p class="set encore svelte-1str936" data-svelte-h="svelte-1armcv1">Encore</p></div></div></div> <p class="source" data-svelte-h="svelte-1mwb57r">Note: Shows on May 23, 2022 and Sept. 12, 2023 had a second encore. They are shown in green.</p> <div class="mults-wrap svelte-1str936">${each(mults, (d) => {
    return `<div class="mgroup svelte-1str936"><p class="mhed svelte-1str936">${escape(d.hed)}</p> <div class="msets svelte-1str936">${each(d.sets, (s) => {
      return `<div class="svelte-1str936"><div class="blurb svelte-1str936"><p class="svelte-1str936"><!-- HTML_TAG_START -->${s.blurb}<!-- HTML_TAG_END --></p></div> ${desktop ? `<img src="${escape(base, true) + "/images/set-" + escape(s.img, true) + ".png"}" alt="Graphic of dots showing where a certain song was during setlists throughout the shows" class="svelte-1str936">` : `<img style="max-width:200px;" src="${escape(base, true) + "/images/set-m-" + escape(s.img, true) + ".png"}" alt="Graphic of dots showing where a certain song was during setlists throughout the shows" class="svelte-1str936">`} </div>`;
    })}</div> </div>`;
  })} <div class="malkdiv svelte-1str936" data-svelte-h="svelte-1exo5jt"><div class="border b-left"></div> <div class="border b-right"></div> <div class="border b-top"></div> <div class="border b-bottom"></div> <img class="malk svelte-1str936" src="${escape(base, true) + "/images/malk-2.gif"}" alt="Animation of Malkmus running in place"></div></div></div> </div>`;
});
const data = [
  {
    y: 1993,
    s: "5-4=Unity",
    c: 5,
    l: 0
  },
  {
    y: 1994,
    s: "5-4=Unity",
    c: 26,
    l: 0
  },
  {
    y: 1997,
    s: "5-4=Unity",
    c: 1,
    l: 1
  },
  {
    y: 2010,
    s: "5-4=Unity",
    c: 1,
    l: 0
  },
  {
    y: 1994,
    s: "AT&T",
    c: 7,
    l: 0
  },
  {
    y: 1995,
    s: "AT&T",
    c: 17,
    l: 1
  },
  {
    y: 2010,
    s: "AT&T",
    c: 3,
    l: 0
  },
  {
    y: 2020,
    s: "AT&T",
    c: 6,
    l: 0
  },
  {
    y: 1993,
    s: "All My Friends",
    c: 6,
    l: 0
  },
  {
    y: 1994,
    s: "All My Friends",
    c: 1,
    l: 1
  },
  {
    y: 1989,
    s: "Angel Carver Blues / Mellow Jazz Docent",
    c: 1,
    l: 0
  },
  {
    y: 1990,
    s: "Angel Carver Blues / Mellow Jazz Docent",
    c: 1,
    l: 0
  },
  {
    y: 1991,
    s: "Angel Carver Blues / Mellow Jazz Docent",
    c: 1,
    l: 0
  },
  {
    y: 1992,
    s: "Angel Carver Blues / Mellow Jazz Docent",
    c: 22,
    l: 0
  },
  {
    y: 1993,
    s: "Angel Carver Blues / Mellow Jazz Docent",
    c: 2,
    l: 0
  },
  {
    y: 1994,
    s: "Angel Carver Blues / Mellow Jazz Docent",
    c: 3,
    l: 0
  },
  {
    y: 1996,
    s: "Angel Carver Blues / Mellow Jazz Docent",
    c: 2,
    l: 1
  },
  {
    y: 2020,
    s: "Angel Carver Blues / Mellow Jazz Docent",
    c: 12,
    l: 0
  },
  {
    y: 1999,
    s: "Ann Don't Cry",
    c: 36,
    l: 1
  },
  {
    y: 1992,
    s: "Baby Yeah",
    c: 8,
    l: 1
  },
  {
    y: 1990,
    s: "Baptiss Blacktick",
    c: 2,
    l: 0
  },
  {
    y: 1991,
    s: "Baptiss Blacktick",
    c: 1,
    l: 0
  },
  {
    y: 1992,
    s: "Baptiss Blacktick",
    c: 12,
    l: 0
  },
  {
    y: 1994,
    s: "Baptiss Blacktick",
    c: 1,
    l: 1
  },
  {
    y: 1994,
    s: "Best Friend's Arm",
    c: 18,
    l: 0
  },
  {
    y: 1995,
    s: "Best Friend's Arm",
    c: 15,
    l: 0
  },
  {
    y: 1996,
    s: "Best Friend's Arm",
    c: 12,
    l: 0
  },
  {
    y: 1997,
    s: "Best Friend's Arm",
    c: 11,
    l: 1
  },
  {
    y: 1999,
    s: "Billie",
    c: 63,
    l: 1
  },
  {
    y: 1996,
    s: "Birds in the Majic Industry",
    c: 1,
    l: 1
  },
  {
    y: 1994,
    s: "Black Out",
    c: 26,
    l: 0
  },
  {
    y: 1995,
    s: "Black Out",
    c: 15,
    l: 0
  },
  {
    y: 1996,
    s: "Black Out",
    c: 14,
    l: 0
  },
  {
    y: 1997,
    s: "Black Out",
    c: 16,
    l: 1
  },
  {
    y: 2020,
    s: "Black Out",
    c: 28,
    l: 0
  },
  {
    y: 1996,
    s: "Blue Hawaiian",
    c: 1,
    l: 0
  },
  {
    y: 1997,
    s: "Blue Hawaiian",
    c: 41,
    l: 1
  },
  {
    y: 2020,
    s: "Blue Hawaiian",
    c: 22,
    l: 0
  },
  {
    y: 1989,
    s: "Box Elder",
    c: 1,
    l: 0
  },
  {
    y: 1990,
    s: "Box Elder",
    c: 1,
    l: 0
  },
  {
    y: 1991,
    s: "Box Elder",
    c: 2,
    l: 0
  },
  {
    y: 1992,
    s: "Box Elder",
    c: 14,
    l: 0
  },
  {
    y: 1993,
    s: "Box Elder",
    c: 4,
    l: 0
  },
  {
    y: 1994,
    s: "Box Elder",
    c: 28,
    l: 0
  },
  {
    y: 1995,
    s: "Box Elder",
    c: 6,
    l: 0
  },
  {
    y: 1996,
    s: "Box Elder",
    c: 6,
    l: 0
  },
  {
    y: 1997,
    s: "Box Elder",
    c: 9,
    l: 0
  },
  {
    y: 1999,
    s: "Box Elder",
    c: 20,
    l: 1
  },
  {
    y: 2010,
    s: "Box Elder",
    c: 33,
    l: 0
  },
  {
    y: 2020,
    s: "Box Elder",
    c: 23,
    l: 0
  },
  {
    y: 1994,
    s: "Brink of the Clouds",
    c: 31,
    l: 1
  },
  {
    y: 1994,
    s: "Brinx Job",
    c: 25,
    l: 0
  },
  {
    y: 1995,
    s: "Brinx Job",
    c: 5,
    l: 0
  },
  {
    y: 1996,
    s: "Brinx Job",
    c: 6,
    l: 0
  },
  {
    y: 1999,
    s: "Brinx Job",
    c: 1,
    l: 1
  },
  {
    y: 2010,
    s: "Brinx Job",
    c: 2,
    l: 0
  },
  {
    y: 1994,
    s: "Camera",
    c: 2,
    l: 1
  },
  {
    y: 1999,
    s: "Carrot Rope",
    c: 29,
    l: 1
  },
  {
    y: 1990,
    s: "Chesley's Little Wrists",
    c: 1,
    l: 1
  },
  {
    y: 1992,
    s: "Circa 1762",
    c: 2,
    l: 1
  },
  {
    y: 1991,
    s: "Conduit for Sale!",
    c: 1,
    l: 0
  },
  {
    y: 1992,
    s: "Conduit for Sale!",
    c: 29,
    l: 0
  },
  {
    y: 1993,
    s: "Conduit for Sale!",
    c: 4,
    l: 0
  },
  {
    y: 1994,
    s: "Conduit for Sale!",
    c: 26,
    l: 0
  },
  {
    y: 1995,
    s: "Conduit for Sale!",
    c: 6,
    l: 0
  },
  {
    y: 1996,
    s: "Conduit for Sale!",
    c: 9,
    l: 0
  },
  {
    y: 1997,
    s: "Conduit for Sale!",
    c: 31,
    l: 0
  },
  {
    y: 1999,
    s: "Conduit for Sale!",
    c: 20,
    l: 1
  },
  {
    y: 2010,
    s: "Conduit for Sale!",
    c: 47,
    l: 0
  },
  {
    y: 2020,
    s: "Conduit for Sale!",
    c: 16,
    l: 0
  },
  {
    y: 1995,
    s: "Cream of Gold",
    c: 1,
    l: 0
  },
  {
    y: 1999,
    s: "Cream of Gold",
    c: 62,
    l: 1
  },
  {
    y: 2020,
    s: "Cream of Gold",
    c: 2,
    l: 0
  },
  {
    y: 1993,
    s: "Cut Your Hair",
    c: 4,
    l: 0
  },
  {
    y: 1994,
    s: "Cut Your Hair",
    c: 48,
    l: 0
  },
  {
    y: 1995,
    s: "Cut Your Hair",
    c: 15,
    l: 0
  },
  {
    y: 1996,
    s: "Cut Your Hair",
    c: 12,
    l: 0
  },
  {
    y: 1997,
    s: "Cut Your Hair",
    c: 32,
    l: 0
  },
  {
    y: 1999,
    s: "Cut Your Hair",
    c: 30,
    l: 1
  },
  {
    y: 2010,
    s: "Cut Your Hair",
    c: 69,
    l: 0
  },
  {
    y: 2020,
    s: "Cut Your Hair",
    c: 73,
    l: 0
  },
  {
    y: 1996,
    s: "Date w/ IKEA",
    c: 1,
    l: 0
  },
  {
    y: 1997,
    s: "Date w/ IKEA",
    c: 48,
    l: 0
  },
  {
    y: 1999,
    s: "Date w/ IKEA",
    c: 33,
    l: 1
  },
  {
    y: 2010,
    s: "Date w/ IKEA",
    c: 59,
    l: 0
  },
  {
    y: 2020,
    s: "Date w/ IKEA",
    c: 25,
    l: 0
  },
  {
    y: 1989,
    s: "Debris Slide",
    c: 1,
    l: 0
  },
  {
    y: 1991,
    s: "Debris Slide",
    c: 2,
    l: 0
  },
  {
    y: 1992,
    s: "Debris Slide",
    c: 33,
    l: 0
  },
  {
    y: 1993,
    s: "Debris Slide",
    c: 5,
    l: 0
  },
  {
    y: 1994,
    s: "Debris Slide",
    c: 41,
    l: 0
  },
  {
    y: 1996,
    s: "Debris Slide",
    c: 2,
    l: 0
  },
  {
    y: 1997,
    s: "Debris Slide",
    c: 9,
    l: 0
  },
  {
    y: 1999,
    s: "Debris Slide",
    c: 19,
    l: 1
  },
  {
    y: 2010,
    s: "Debris Slide",
    c: 28,
    l: 0
  },
  {
    y: 2020,
    s: "Debris Slide",
    c: 20,
    l: 0
  },
  {
    y: 1997,
    s: "Destroy Mater Dei",
    c: 1,
    l: 1
  },
  {
    y: 1992,
    s: "Drunks With Guns",
    c: 1,
    l: 1
  },
  {
    y: 1994,
    s: "Easily Fooled",
    c: 24,
    l: 0
  },
  {
    y: 1995,
    s: "Easily Fooled",
    c: 1,
    l: 0
  },
  {
    y: 1997,
    s: "Easily Fooled",
    c: 1,
    l: 1
  },
  {
    y: 1992,
    s: "Ed Ames",
    c: 1,
    l: 1
  },
  {
    y: 1992,
    s: "Elevate Me Later",
    c: 2,
    l: 0
  },
  {
    y: 1993,
    s: "Elevate Me Later",
    c: 5,
    l: 0
  },
  {
    y: 1994,
    s: "Elevate Me Later",
    c: 35,
    l: 0
  },
  {
    y: 1995,
    s: "Elevate Me Later",
    c: 7,
    l: 0
  },
  {
    y: 1996,
    s: "Elevate Me Later",
    c: 3,
    l: 0
  },
  {
    y: 1997,
    s: "Elevate Me Later",
    c: 15,
    l: 1
  },
  {
    y: 2010,
    s: "Elevate Me Later",
    c: 42,
    l: 0
  },
  {
    y: 2020,
    s: "Elevate Me Later",
    c: 1,
    l: 0
  },
  {
    y: 1997,
    s: "Embassy Row",
    c: 26,
    l: 1
  },
  {
    y: 2020,
    s: "Embassy Row",
    c: 43,
    l: 0
  },
  {
    y: 1995,
    s: "Extradition",
    c: 6,
    l: 0
  },
  {
    y: 1996,
    s: "Extradition",
    c: 8,
    l: 1
  },
  {
    y: 1990,
    s: "Fame Throwa",
    c: 1,
    l: 0
  },
  {
    y: 1991,
    s: "Fame Throwa",
    c: 2,
    l: 0
  },
  {
    y: 1992,
    s: "Fame Throwa",
    c: 24,
    l: 0
  },
  {
    y: 1993,
    s: "Fame Throwa",
    c: 5,
    l: 1
  },
  {
    y: 2020,
    s: "Fame Throwa",
    c: 16,
    l: 0
  },
  {
    y: 1995,
    s: "Father to a Sister of Thought",
    c: 19,
    l: 0
  },
  {
    y: 1996,
    s: "Father to a Sister of Thought",
    c: 15,
    l: 0
  },
  {
    y: 1997,
    s: "Father to a Sister of Thought",
    c: 25,
    l: 0
  },
  {
    y: 1999,
    s: "Father to a Sister of Thought",
    c: 26,
    l: 1
  },
  {
    y: 2010,
    s: "Father to a Sister of Thought",
    c: 46,
    l: 0
  },
  {
    y: 2020,
    s: "Father to a Sister of Thought",
    c: 40,
    l: 0
  },
  {
    y: 1992,
    s: "Feed 'em to the (Linden) Lions",
    c: 28,
    l: 0
  },
  {
    y: 1994,
    s: "Feed 'em to the (Linden) Lions",
    c: 1,
    l: 0
  },
  {
    y: 1997,
    s: "Feed 'em to the (Linden) Lions",
    c: 1,
    l: 1
  },
  {
    y: 2010,
    s: "Feed 'em to the (Linden) Lions",
    c: 13,
    l: 0
  },
  {
    y: 2020,
    s: "Feed 'em to the (Linden) Lions",
    c: 26,
    l: 0
  },
  {
    y: 1994,
    s: "Fight This Generation",
    c: 32,
    l: 0
  },
  {
    y: 1995,
    s: "Fight This Generation",
    c: 14,
    l: 0
  },
  {
    y: 1996,
    s: "Fight This Generation",
    c: 11,
    l: 0
  },
  {
    y: 1997,
    s: "Fight This Generation",
    c: 13,
    l: 0
  },
  {
    y: 1999,
    s: "Fight This Generation",
    c: 10,
    l: 1
  },
  {
    y: 2010,
    s: "Fight This Generation",
    c: 52,
    l: 0
  },
  {
    y: 2020,
    s: "Fight This Generation",
    c: 28,
    l: 0
  },
  {
    y: 1993,
    s: "Fillmore Jive",
    c: 5,
    l: 0
  },
  {
    y: 1994,
    s: "Fillmore Jive",
    c: 8,
    l: 1
  },
  {
    y: 2020,
    s: "Fillmore Jive",
    c: 16,
    l: 0
  },
  {
    y: 1994,
    s: "Fin",
    c: 1,
    l: 0
  },
  {
    y: 1997,
    s: "Fin",
    c: 15,
    l: 0
  },
  {
    y: 1999,
    s: "Fin",
    c: 1,
    l: 1
  },
  {
    y: 2010,
    s: "Fin",
    c: 25,
    l: 0
  },
  {
    y: 2020,
    s: "Fin",
    c: 29,
    l: 0
  },
  {
    y: 1995,
    s: "Flux=Rad",
    c: 4,
    l: 1
  },
  {
    y: 1999,
    s: "Folk Jam",
    c: 59,
    l: 1
  },
  {
    y: 2020,
    s: "Folk Jam",
    c: 27,
    l: 0
  },
  {
    y: 1992,
    s: "Forklift",
    c: 1,
    l: 0
  },
  {
    y: 1993,
    s: "Forklift",
    c: 2,
    l: 0
  },
  {
    y: 1994,
    s: "Forklift",
    c: 16,
    l: 0
  },
  {
    y: 1995,
    s: "Forklift",
    c: 1,
    l: 0
  },
  {
    y: 1996,
    s: "Forklift",
    c: 1,
    l: 0
  },
  {
    y: 1999,
    s: "Forklift",
    c: 2,
    l: 1
  },
  {
    y: 1994,
    s: "From Now On",
    c: 1,
    l: 1
  },
  {
    y: 1992,
    s: "Frontwards",
    c: 31,
    l: 0
  },
  {
    y: 1999,
    s: "Frontwards",
    c: 18,
    l: 1
  },
  {
    y: 2010,
    s: "Frontwards",
    c: 46,
    l: 0
  },
  {
    y: 2020,
    s: "Frontwards",
    c: 25,
    l: 0
  },
  {
    y: 1997,
    s: "Gangsters & Pranksters",
    c: 19,
    l: 1
  },
  {
    y: 2020,
    s: "Gangsters & Pranksters",
    c: 6,
    l: 0
  },
  {
    y: 1995,
    s: "Give It a Day",
    c: 2,
    l: 0
  },
  {
    y: 1996,
    s: "Give It a Day",
    c: 13,
    l: 0
  },
  {
    y: 1997,
    s: "Give It a Day",
    c: 12,
    l: 0
  },
  {
    y: 1999,
    s: "Give It a Day",
    c: 11,
    l: 1
  },
  {
    y: 2010,
    s: "Give It a Day",
    c: 8,
    l: 0
  },
  {
    y: 2020,
    s: "Give It a Day",
    c: 17,
    l: 0
  },
  {
    y: 1994,
    s: "Gold Soundz",
    c: 42,
    l: 0
  },
  {
    y: 1995,
    s: "Gold Soundz",
    c: 12,
    l: 0
  },
  {
    y: 1996,
    s: "Gold Soundz",
    c: 5,
    l: 0
  },
  {
    y: 1997,
    s: "Gold Soundz",
    c: 17,
    l: 0
  },
  {
    y: 1999,
    s: "Gold Soundz",
    c: 28,
    l: 1
  },
  {
    y: 2010,
    s: "Gold Soundz",
    c: 69,
    l: 0
  },
  {
    y: 2020,
    s: "Gold Soundz",
    c: 61,
    l: 0
  },
  {
    y: 1994,
    s: "Grave Architecture",
    c: 1,
    l: 0
  },
  {
    y: 1995,
    s: "Grave Architecture",
    c: 21,
    l: 0
  },
  {
    y: 1996,
    s: "Grave Architecture",
    c: 10,
    l: 0
  },
  {
    y: 1997,
    s: "Grave Architecture",
    c: 28,
    l: 0
  },
  {
    y: 1999,
    s: "Grave Architecture",
    c: 6,
    l: 1
  },
  {
    y: 2020,
    s: "Grave Architecture",
    c: 33,
    l: 0
  },
  {
    y: 1992,
    s: "Greenlander",
    c: 17,
    l: 1
  },
  {
    y: 1993,
    s: "Grounded",
    c: 6,
    l: 0
  },
  {
    y: 1994,
    s: "Grounded",
    c: 30,
    l: 0
  },
  {
    y: 1995,
    s: "Grounded",
    c: 25,
    l: 0
  },
  {
    y: 1996,
    s: "Grounded",
    c: 9,
    l: 0
  },
  {
    y: 1997,
    s: "Grounded",
    c: 22,
    l: 0
  },
  {
    y: 1999,
    s: "Grounded",
    c: 35,
    l: 1
  },
  {
    y: 2010,
    s: "Grounded",
    c: 68,
    l: 0
  },
  {
    y: 2020,
    s: "Grounded",
    c: 62,
    l: 0
  },
  {
    y: 1994,
    s: "Half a Canyon",
    c: 15,
    l: 0
  },
  {
    y: 1995,
    s: "Half a Canyon",
    c: 12,
    l: 0
  },
  {
    y: 1996,
    s: "Half a Canyon",
    c: 9,
    l: 1
  },
  {
    y: 2020,
    s: "Half a Canyon",
    c: 8,
    l: 0
  },
  {
    y: 1997,
    s: "Harness Your Hopes",
    c: 1,
    l: 0
  },
  {
    y: 1999,
    s: "Harness Your Hopes",
    c: 1,
    l: 1
  },
  {
    y: 2020,
    s: "Harness Your Hopes",
    c: 71,
    l: 0
  },
  {
    y: 1993,
    s: "Haunt You Down",
    c: 2,
    l: 0
  },
  {
    y: 1994,
    s: "Haunt You Down",
    c: 1,
    l: 0
  },
  {
    y: 1995,
    s: "Haunt You Down",
    c: 1,
    l: 1
  },
  {
    y: 1994,
    s: "Heaven Is a Truck",
    c: 27,
    l: 0
  },
  {
    y: 1995,
    s: "Heaven Is a Truck",
    c: 7,
    l: 0
  },
  {
    y: 1997,
    s: "Heaven Is a Truck",
    c: 2,
    l: 1
  },
  {
    y: 2010,
    s: "Heaven Is a Truck",
    c: 4,
    l: 0
  },
  {
    y: 2020,
    s: "Heaven Is a Truck",
    c: 5,
    l: 0
  },
  {
    y: 1990,
    s: "Heckler Spray",
    c: 1,
    l: 0
  },
  {
    y: 1994,
    s: "Heckler Spray",
    c: 18,
    l: 0
  },
  {
    y: 1996,
    s: "Heckler Spray",
    c: 1,
    l: 1
  },
  {
    y: 2010,
    s: "Heckler Spray",
    c: 18,
    l: 0
  },
  {
    y: 2020,
    s: "Heckler Spray",
    c: 41,
    l: 0
  },
  {
    y: 1990,
    s: "Here",
    c: 1,
    l: 0
  },
  {
    y: 1991,
    s: "Here",
    c: 2,
    l: 0
  },
  {
    y: 1992,
    s: "Here",
    c: 35,
    l: 0
  },
  {
    y: 1993,
    s: "Here",
    c: 2,
    l: 0
  },
  {
    y: 1994,
    s: "Here",
    c: 12,
    l: 0
  },
  {
    y: 1995,
    s: "Here",
    c: 5,
    l: 0
  },
  {
    y: 1996,
    s: "Here",
    c: 6,
    l: 0
  },
  {
    y: 1997,
    s: "Here",
    c: 10,
    l: 0
  },
  {
    y: 1999,
    s: "Here",
    c: 27,
    l: 1
  },
  {
    y: 2010,
    s: "Here",
    c: 49,
    l: 0
  },
  {
    y: 2020,
    s: "Here",
    c: 37,
    l: 0
  },
  {
    y: 1994,
    s: "Hit the Plane Down",
    c: 21,
    l: 0
  },
  {
    y: 1996,
    s: "Hit the Plane Down",
    c: 1,
    l: 0
  },
  {
    y: 1997,
    s: "Hit the Plane Down",
    c: 1,
    l: 1
  },
  {
    y: 1989,
    s: "Home",
    c: 1,
    l: 0
  },
  {
    y: 1990,
    s: "Home",
    c: 1,
    l: 0
  },
  {
    y: 1991,
    s: "Home",
    c: 2,
    l: 0
  },
  {
    y: 1992,
    s: "Home",
    c: 29,
    l: 0
  },
  {
    y: 1993,
    s: "Home",
    c: 2,
    l: 1
  },
  {
    y: 2020,
    s: "Home",
    c: 20,
    l: 0
  },
  {
    y: 1994,
    s: "I Love Perth",
    c: 2,
    l: 0
  },
  {
    y: 1995,
    s: "I Love Perth",
    c: 1,
    l: 1
  },
  {
    y: 2020,
    s: "I Love Perth",
    c: 1,
    l: 0
  },
  {
    y: 1990,
    s: "In the Mouth a Desert",
    c: 2,
    l: 0
  },
  {
    y: 1991,
    s: "In the Mouth a Desert",
    c: 2,
    l: 0
  },
  {
    y: 1992,
    s: "In the Mouth a Desert",
    c: 48,
    l: 0
  },
  {
    y: 1993,
    s: "In the Mouth a Desert",
    c: 5,
    l: 0
  },
  {
    y: 1994,
    s: "In the Mouth a Desert",
    c: 36,
    l: 0
  },
  {
    y: 1995,
    s: "In the Mouth a Desert",
    c: 14,
    l: 0
  },
  {
    y: 1996,
    s: "In the Mouth a Desert",
    c: 6,
    l: 0
  },
  {
    y: 1997,
    s: "In the Mouth a Desert",
    c: 23,
    l: 0
  },
  {
    y: 1999,
    s: "In the Mouth a Desert",
    c: 20,
    l: 1
  },
  {
    y: 2010,
    s: "In the Mouth a Desert",
    c: 63,
    l: 0
  },
  {
    y: 2020,
    s: "In the Mouth a Desert",
    c: 29,
    l: 0
  },
  {
    y: 1990,
    s: "Jackals, False Grails: The Lonesome Era",
    c: 1,
    l: 0
  },
  {
    y: 1991,
    s: "Jackals, False Grails: The Lonesome Era",
    c: 1,
    l: 0
  },
  {
    y: 1992,
    s: "Jackals, False Grails: The Lonesome Era",
    c: 1,
    l: 1
  },
  {
    y: 1994,
    s: "Kennel District",
    c: 6,
    l: 0
  },
  {
    y: 1995,
    s: "Kennel District",
    c: 24,
    l: 0
  },
  {
    y: 1996,
    s: "Kennel District",
    c: 18,
    l: 0
  },
  {
    y: 1997,
    s: "Kennel District",
    c: 33,
    l: 0
  },
  {
    y: 1999,
    s: "Kennel District",
    c: 42,
    l: 1
  },
  {
    y: 2010,
    s: "Kennel District",
    c: 64,
    l: 0
  },
  {
    y: 2020,
    s: "Kennel District",
    c: 58,
    l: 0
  },
  {
    y: 1992,
    s: "Kentucky Cocktail",
    c: 17,
    l: 1
  },
  {
    y: 1993,
    s: "Kris Kraft",
    c: 1,
    l: 0
  },
  {
    y: 1995,
    s: "Kris Kraft",
    c: 4,
    l: 0
  },
  {
    y: 1996,
    s: "Kris Kraft",
    c: 3,
    l: 0
  },
  {
    y: 1997,
    s: "Kris Kraft",
    c: 1,
    l: 1
  },
  {
    y: 1992,
    s: "Loretta's Scars",
    c: 39,
    l: 0
  },
  {
    y: 1994,
    s: "Loretta's Scars",
    c: 3,
    l: 0
  },
  {
    y: 1995,
    s: "Loretta's Scars",
    c: 3,
    l: 0
  },
  {
    y: 1996,
    s: "Loretta's Scars",
    c: 6,
    l: 0
  },
  {
    y: 1997,
    s: "Loretta's Scars",
    c: 4,
    l: 0
  },
  {
    y: 1999,
    s: "Loretta's Scars",
    c: 4,
    l: 1
  },
  {
    y: 2010,
    s: "Loretta's Scars",
    c: 10,
    l: 0
  },
  {
    y: 2020,
    s: "Loretta's Scars",
    c: 3,
    l: 0
  },
  {
    y: 1999,
    s: "Major Leagues",
    c: 48,
    l: 1
  },
  {
    y: 2020,
    s: "Major Leagues",
    c: 34,
    l: 0
  },
  {
    y: 1989,
    s: "Maybe Maybe",
    c: 1,
    l: 0
  },
  {
    y: 1994,
    s: "Maybe Maybe",
    c: 3,
    l: 0
  },
  {
    y: 1995,
    s: "Maybe Maybe",
    c: 3,
    l: 0
  },
  {
    y: 1996,
    s: "Maybe Maybe",
    c: 1,
    l: 0
  },
  {
    y: 1997,
    s: "Maybe Maybe",
    c: 1,
    l: 1
  },
  {
    y: 2020,
    s: "Maybe Maybe",
    c: 2,
    l: 0
  },
  {
    y: 1990,
    s: "Mercy Snack",
    c: 1,
    l: 1
  },
  {
    y: 1995,
    s: "Motion Suggests",
    c: 17,
    l: 0
  },
  {
    y: 1996,
    s: "Motion Suggests",
    c: 5,
    l: 1
  },
  {
    y: 2020,
    s: "Motion Suggests",
    c: 17,
    l: 0
  },
  {
    y: 1990,
    s: "My First Mine",
    c: 1,
    l: 1
  },
  {
    y: 2020,
    s: "My First Mine",
    c: 2,
    l: 0
  },
  {
    y: 1989,
    s: "My Radio",
    c: 1,
    l: 0
  },
  {
    y: 1990,
    s: "My Radio",
    c: 1,
    l: 1
  },
  {
    y: 1997,
    s: "Neil Haggerty vs. Jon Spencer",
    c: 1,
    l: 1
  },
  {
    y: 1993,
    s: "Newark Wilder",
    c: 4,
    l: 0
  },
  {
    y: 1994,
    s: "Newark Wilder",
    c: 23,
    l: 1
  },
  {
    y: 1996,
    s: "Nigel",
    c: 1,
    l: 1
  },
  {
    y: 1990,
    s: "No Life Singed Her",
    c: 1,
    l: 0
  },
  {
    y: 1991,
    s: "No Life Singed Her",
    c: 2,
    l: 0
  },
  {
    y: 1992,
    s: "No Life Singed Her",
    c: 37,
    l: 0
  },
  {
    y: 1993,
    s: "No Life Singed Her",
    c: 2,
    l: 0
  },
  {
    y: 1995,
    s: "No Life Singed Her",
    c: 2,
    l: 1
  },
  {
    y: 2010,
    s: "No Life Singed Her",
    c: 18,
    l: 0
  },
  {
    y: 2020,
    s: "No Life Singed Her",
    c: 2,
    l: 0
  },
  {
    y: 1995,
    s: "No More Kings",
    c: 1,
    l: 0
  },
  {
    y: 1996,
    s: "No More Kings",
    c: 2,
    l: 1
  },
  {
    y: 1996,
    s: "No Tan Lines",
    c: 1,
    l: 1
  },
  {
    y: 1990,
    s: "Nothing Ever Happens",
    c: 1,
    l: 0
  },
  {
    y: 1991,
    s: "Nothing Ever Happens",
    c: 1,
    l: 0
  },
  {
    y: 1992,
    s: "Nothing Ever Happens",
    c: 1,
    l: 1
  },
  {
    y: 1996,
    s: "Old to Begin",
    c: 1,
    l: 0
  },
  {
    y: 1997,
    s: "Old to Begin",
    c: 31,
    l: 1
  },
  {
    y: 2010,
    s: "Old to Begin",
    c: 1,
    l: 0
  },
  {
    y: 2020,
    s: "Old to Begin",
    c: 1,
    l: 0
  },
  {
    y: 1991,
    s: "Our Singer",
    c: 1,
    l: 0
  },
  {
    y: 1992,
    s: "Our Singer",
    c: 16,
    l: 0
  },
  {
    y: 1994,
    s: "Our Singer",
    c: 1,
    l: 1
  },
  {
    y: 2010,
    s: "Our Singer",
    c: 4,
    l: 0
  },
  {
    y: 2020,
    s: "Our Singer",
    c: 12,
    l: 0
  },
  {
    y: 1995,
    s: "Painted Soldiers",
    c: 1,
    l: 0
  },
  {
    y: 1996,
    s: "Painted Soldiers",
    c: 6,
    l: 0
  },
  {
    y: 1997,
    s: "Painted Soldiers",
    c: 11,
    l: 1
  },
  {
    y: 2020,
    s: "Painted Soldiers",
    c: 29,
    l: 0
  },
  {
    y: 1997,
    s: "Passat Dream",
    c: 34,
    l: 1
  },
  {
    y: 1989,
    s: "Perfect Depth",
    c: 1,
    l: 0
  },
  {
    y: 1990,
    s: "Perfect Depth",
    c: 1,
    l: 0
  },
  {
    y: 1992,
    s: "Perfect Depth",
    c: 10,
    l: 0
  },
  {
    y: 1993,
    s: "Perfect Depth",
    c: 1,
    l: 0
  },
  {
    y: 1994,
    s: "Perfect Depth",
    c: 2,
    l: 0
  },
  {
    y: 1995,
    s: "Perfect Depth",
    c: 2,
    l: 0
  },
  {
    y: 1996,
    s: "Perfect Depth",
    c: 1,
    l: 0
  },
  {
    y: 1997,
    s: "Perfect Depth",
    c: 2,
    l: 1
  },
  {
    y: 2010,
    s: "Perfect Depth",
    c: 2,
    l: 0
  },
  {
    y: 1990,
    s: "Perfume-V",
    c: 1,
    l: 0
  },
  {
    y: 1991,
    s: "Perfume-V",
    c: 1,
    l: 0
  },
  {
    y: 1992,
    s: "Perfume-V",
    c: 37,
    l: 0
  },
  {
    y: 1993,
    s: "Perfume-V",
    c: 5,
    l: 0
  },
  {
    y: 1997,
    s: "Perfume-V",
    c: 24,
    l: 1
  },
  {
    y: 2010,
    s: "Perfume-V",
    c: 54,
    l: 0
  },
  {
    y: 2020,
    s: "Perfume-V",
    c: 36,
    l: 0
  },
  {
    y: 1999,
    s: "Platform Blues",
    c: 50,
    l: 1
  },
  {
    y: 1989,
    s: "Price Yeah!",
    c: 1,
    l: 1
  },
  {
    y: 1994,
    s: "Pueblo",
    c: 7,
    l: 0
  },
  {
    y: 1995,
    s: "Pueblo",
    c: 6,
    l: 0
  },
  {
    y: 1996,
    s: "Pueblo",
    c: 11,
    l: 1
  },
  {
    y: 2020,
    s: "Pueblo",
    c: 21,
    l: 0
  },
  {
    y: 1992,
    s: "Rain Ammunition",
    c: 5,
    l: 1
  },
  {
    y: 1992,
    s: "Range Life",
    c: 1,
    l: 0
  },
  {
    y: 1993,
    s: "Range Life",
    c: 1,
    l: 0
  },
  {
    y: 1994,
    s: "Range Life",
    c: 29,
    l: 0
  },
  {
    y: 1995,
    s: "Range Life",
    c: 10,
    l: 0
  },
  {
    y: 1996,
    s: "Range Life",
    c: 4,
    l: 0
  },
  {
    y: 1997,
    s: "Range Life",
    c: 16,
    l: 0
  },
  {
    y: 1999,
    s: "Range Life",
    c: 25,
    l: 1
  },
  {
    y: 2010,
    s: "Range Life",
    c: 68,
    l: 0
  },
  {
    y: 2020,
    s: "Range Life",
    c: 74,
    l: 0
  },
  {
    y: 1994,
    s: "Rattled by the Rush",
    c: 1,
    l: 0
  },
  {
    y: 1995,
    s: "Rattled by the Rush",
    c: 12,
    l: 0
  },
  {
    y: 1996,
    s: "Rattled by the Rush",
    c: 5,
    l: 0
  },
  {
    y: 1999,
    s: "Rattled by the Rush",
    c: 22,
    l: 1
  },
  {
    y: 2010,
    s: "Rattled by the Rush",
    c: 50,
    l: 0
  },
  {
    y: 1996,
    s: "Roll With the Wind",
    c: 1,
    l: 0
  },
  {
    y: 1997,
    s: "Roll With the Wind",
    c: 1,
    l: 1
  },
  {
    y: 1996,
    s: "Saganaw",
    c: 7,
    l: 1
  },
  {
    y: 1992,
    s: "Secret Knowledge of Backroads",
    c: 8,
    l: 1
  },
  {
    y: 1995,
    s: "Serpentine Pad",
    c: 12,
    l: 1
  },
  {
    y: 2020,
    s: "Serpentine Pad",
    c: 34,
    l: 0
  },
  {
    y: 1996,
    s: "Shady Lane",
    c: 6,
    l: 0
  },
  {
    y: 1997,
    s: "Shady Lane",
    c: 65,
    l: 0
  },
  {
    y: 1999,
    s: "Shady Lane",
    c: 48,
    l: 1
  },
  {
    y: 2010,
    s: "Shady Lane",
    c: 66,
    l: 0
  },
  {
    y: 2020,
    s: "Shady Lane",
    c: 52,
    l: 0
  },
  {
    y: 1989,
    s: "She Believes",
    c: 1,
    l: 0
  },
  {
    y: 1990,
    s: "She Believes",
    c: 1,
    l: 0
  },
  {
    y: 1991,
    s: "She Believes",
    c: 1,
    l: 0
  },
  {
    y: 1992,
    s: "She Believes",
    c: 13,
    l: 0
  },
  {
    y: 1993,
    s: "She Believes",
    c: 2,
    l: 0
  },
  {
    y: 1994,
    s: "She Believes",
    c: 18,
    l: 0
  },
  {
    y: 1995,
    s: "She Believes",
    c: 2,
    l: 0
  },
  {
    y: 1997,
    s: "She Believes",
    c: 2,
    l: 0
  },
  {
    y: 1999,
    s: "She Believes",
    c: 1,
    l: 1
  },
  {
    y: 2010,
    s: "She Believes",
    c: 6,
    l: 0
  },
  {
    y: 2020,
    s: "She Believes",
    c: 2,
    l: 0
  },
  {
    y: 1992,
    s: "Shoot the Singer (1 Sick Verse)",
    c: 4,
    l: 0
  },
  {
    y: 1994,
    s: "Shoot the Singer (1 Sick Verse)",
    c: 9,
    l: 0
  },
  {
    y: 1995,
    s: "Shoot the Singer (1 Sick Verse)",
    c: 10,
    l: 0
  },
  {
    y: 1996,
    s: "Shoot the Singer (1 Sick Verse)",
    c: 5,
    l: 0
  },
  {
    y: 1997,
    s: "Shoot the Singer (1 Sick Verse)",
    c: 9,
    l: 0
  },
  {
    y: 1999,
    s: "Shoot the Singer (1 Sick Verse)",
    c: 7,
    l: 1
  },
  {
    y: 2010,
    s: "Shoot the Singer (1 Sick Verse)",
    c: 17,
    l: 0
  },
  {
    y: 2020,
    s: "Shoot the Singer (1 Sick Verse)",
    c: 29,
    l: 0
  },
  {
    y: 1994,
    s: "Silence Kid",
    c: 46,
    l: 0
  },
  {
    y: 1995,
    s: "Silence Kid",
    c: 13,
    l: 0
  },
  {
    y: 1996,
    s: "Silence Kid",
    c: 8,
    l: 0
  },
  {
    y: 1997,
    s: "Silence Kid",
    c: 18,
    l: 1
  },
  {
    y: 2010,
    s: "Silence Kid",
    c: 65,
    l: 0
  },
  {
    y: 2020,
    s: "Silence Kid",
    c: 39,
    l: 0
  },
  {
    y: 1992,
    s: "So Stark (You're a Skyscraper)",
    c: 22,
    l: 0
  },
  {
    y: 1993,
    s: "So Stark (You're a Skyscraper)",
    c: 4,
    l: 1
  },
  {
    y: 1993,
    s: "Soiled Little Filly",
    c: 4,
    l: 1
  },
  {
    y: 1999,
    s: "Speak, See, Remember",
    c: 23,
    l: 1
  },
  {
    y: 1999,
    s: "Spit on a Stranger",
    c: 67,
    l: 1
  },
  {
    y: 2010,
    s: "Spit on a Stranger",
    c: 56,
    l: 0
  },
  {
    y: 2020,
    s: "Spit on a Stranger",
    c: 68,
    l: 0
  },
  {
    y: 1991,
    s: "Spizzle Trunk",
    c: 1,
    l: 0
  },
  {
    y: 1992,
    s: "Spizzle Trunk",
    c: 15,
    l: 0
  },
  {
    y: 1997,
    s: "Spizzle Trunk",
    c: 5,
    l: 1
  },
  {
    y: 2010,
    s: "Spizzle Trunk",
    c: 4,
    l: 0
  },
  {
    y: 2020,
    s: "Spizzle Trunk",
    c: 9,
    l: 0
  },
  {
    y: 1992,
    s: "Starlings of the Slipstream",
    c: 2,
    l: 0
  },
  {
    y: 1996,
    s: "Starlings of the Slipstream",
    c: 4,
    l: 0
  },
  {
    y: 1997,
    s: "Starlings of the Slipstream",
    c: 38,
    l: 1
  },
  {
    y: 2010,
    s: "Starlings of the Slipstream",
    c: 52,
    l: 0
  },
  {
    y: 2020,
    s: "Starlings of the Slipstream",
    c: 35,
    l: 0
  },
  {
    y: 1995,
    s: "Stereo",
    c: 1,
    l: 0
  },
  {
    y: 1996,
    s: "Stereo",
    c: 16,
    l: 0
  },
  {
    y: 1997,
    s: "Stereo",
    c: 61,
    l: 0
  },
  {
    y: 1999,
    s: "Stereo",
    c: 65,
    l: 1
  },
  {
    y: 2010,
    s: "Stereo",
    c: 69,
    l: 0
  },
  {
    y: 2020,
    s: "Stereo",
    c: 71,
    l: 0
  },
  {
    y: 1994,
    s: "Stop Breathin",
    c: 27,
    l: 0
  },
  {
    y: 1995,
    s: "Stop Breathin",
    c: 9,
    l: 0
  },
  {
    y: 1996,
    s: "Stop Breathin",
    c: 6,
    l: 0
  },
  {
    y: 1997,
    s: "Stop Breathin",
    c: 22,
    l: 0
  },
  {
    y: 1999,
    s: "Stop Breathin",
    c: 18,
    l: 1
  },
  {
    y: 2010,
    s: "Stop Breathin",
    c: 65,
    l: 0
  },
  {
    y: 2020,
    s: "Stop Breathin",
    c: 41,
    l: 0
  },
  {
    y: 1994,
    s: "Strings of Nashville",
    c: 1,
    l: 1
  },
  {
    y: 1992,
    s: "Sue Me Jack",
    c: 1,
    l: 0
  },
  {
    y: 1997,
    s: "Sue Me Jack",
    c: 10,
    l: 1
  },
  {
    y: 1990,
    s: "Summer Babe",
    c: 1,
    l: 0
  },
  {
    y: 1991,
    s: "Summer Babe",
    c: 2,
    l: 0
  },
  {
    y: 1992,
    s: "Summer Babe",
    c: 43,
    l: 0
  },
  {
    y: 1993,
    s: "Summer Babe",
    c: 5,
    l: 0
  },
  {
    y: 1994,
    s: "Summer Babe",
    c: 44,
    l: 0
  },
  {
    y: 1995,
    s: "Summer Babe",
    c: 6,
    l: 0
  },
  {
    y: 1996,
    s: "Summer Babe",
    c: 11,
    l: 0
  },
  {
    y: 1997,
    s: "Summer Babe",
    c: 18,
    l: 0
  },
  {
    y: 1999,
    s: "Summer Babe",
    c: 32,
    l: 1
  },
  {
    y: 2010,
    s: "Summer Babe",
    c: 52,
    l: 0
  },
  {
    y: 2020,
    s: "Summer Babe",
    c: 53,
    l: 0
  },
  {
    y: 1994,
    s: "Tarter Martyr",
    c: 1,
    l: 1
  },
  {
    y: 1992,
    s: "Texas Never Whispers",
    c: 18,
    l: 0
  },
  {
    y: 1993,
    s: "Texas Never Whispers",
    c: 3,
    l: 0
  },
  {
    y: 1995,
    s: "Texas Never Whispers",
    c: 1,
    l: 0
  },
  {
    y: 1997,
    s: "Texas Never Whispers",
    c: 1,
    l: 1
  },
  {
    y: 1996,
    s: "The Classical",
    c: 2,
    l: 0
  },
  {
    y: 1997,
    s: "The Classical",
    c: 1,
    l: 1
  },
  {
    y: 1996,
    s: "The Hexx",
    c: 1,
    l: 0
  },
  {
    y: 1997,
    s: "The Hexx",
    c: 40,
    l: 0
  },
  {
    y: 1999,
    s: "The Hexx",
    c: 72,
    l: 1
  },
  {
    y: 2010,
    s: "The Hexx",
    c: 34,
    l: 0
  },
  {
    y: 2020,
    s: "The Hexx",
    c: 57,
    l: 0
  },
  {
    y: 1996,
    s: "The Killing Moon",
    c: 1,
    l: 0
  },
  {
    y: 1997,
    s: "The Killing Moon",
    c: 11,
    l: 0
  },
  {
    y: 1999,
    s: "The Killing Moon",
    c: 9,
    l: 1
  },
  {
    y: 1992,
    s: "The List of Dorms",
    c: 1,
    l: 1
  },
  {
    y: 1999,
    s: "The Porpoise and the Hand Grenade",
    c: 1,
    l: 1
  },
  {
    y: 1994,
    s: "The Sutcliffe Catering Song",
    c: 3,
    l: 1
  },
  {
    y: 1996,
    s: "Transport Is Arranged",
    c: 1,
    l: 0
  },
  {
    y: 1997,
    s: "Transport Is Arranged",
    c: 55,
    l: 1
  },
  {
    y: 2020,
    s: "Transport Is Arranged",
    c: 37,
    l: 0
  },
  {
    y: 1991,
    s: "Trigger Cut",
    c: 3,
    l: 0
  },
  {
    y: 1992,
    s: "Trigger Cut",
    c: 45,
    l: 0
  },
  {
    y: 1993,
    s: "Trigger Cut",
    c: 5,
    l: 0
  },
  {
    y: 1994,
    s: "Trigger Cut",
    c: 10,
    l: 0
  },
  {
    y: 1995,
    s: "Trigger Cut",
    c: 1,
    l: 0
  },
  {
    y: 1996,
    s: "Trigger Cut",
    c: 1,
    l: 0
  },
  {
    y: 1997,
    s: "Trigger Cut",
    c: 1,
    l: 0
  },
  {
    y: 1999,
    s: "Trigger Cut",
    c: 26,
    l: 1
  },
  {
    y: 2010,
    s: "Trigger Cut",
    c: 59,
    l: 0
  },
  {
    y: 2020,
    s: "Trigger Cut",
    c: 48,
    l: 0
  },
  {
    y: 1989,
    s: "Two States",
    c: 1,
    l: 0
  },
  {
    y: 1990,
    s: "Two States",
    c: 1,
    l: 0
  },
  {
    y: 1992,
    s: "Two States",
    c: 35,
    l: 0
  },
  {
    y: 1993,
    s: "Two States",
    c: 4,
    l: 0
  },
  {
    y: 1994,
    s: "Two States",
    c: 35,
    l: 0
  },
  {
    y: 1995,
    s: "Two States",
    c: 10,
    l: 0
  },
  {
    y: 1996,
    s: "Two States",
    c: 8,
    l: 0
  },
  {
    y: 1997,
    s: "Two States",
    c: 9,
    l: 0
  },
  {
    y: 1999,
    s: "Two States",
    c: 11,
    l: 1
  },
  {
    y: 2010,
    s: "Two States",
    c: 55,
    l: 0
  },
  {
    y: 2020,
    s: "Two States",
    c: 60,
    l: 0
  },
  {
    y: 1997,
    s: "Type Slowly",
    c: 51,
    l: 1
  },
  {
    y: 2020,
    s: "Type Slowly",
    c: 56,
    l: 0
  },
  {
    y: 1994,
    s: "Unfair",
    c: 51,
    l: 0
  },
  {
    y: 1995,
    s: "Unfair",
    c: 20,
    l: 0
  },
  {
    y: 1996,
    s: "Unfair",
    c: 11,
    l: 0
  },
  {
    y: 1997,
    s: "Unfair",
    c: 14,
    l: 0
  },
  {
    y: 1999,
    s: "Unfair",
    c: 24,
    l: 1
  },
  {
    y: 2010,
    s: "Unfair",
    c: 70,
    l: 0
  },
  {
    y: 2020,
    s: "Unfair",
    c: 55,
    l: 0
  },
  {
    y: 1994,
    s: "Unseen Power of the Picket Fence",
    c: 1,
    l: 1
  },
  {
    y: 1996,
    s: "We Are Underused",
    c: 1,
    l: 0
  },
  {
    y: 1997,
    s: "We Are Underused",
    c: 34,
    l: 1
  },
  {
    y: 1994,
    s: "We Dance",
    c: 1,
    l: 0
  },
  {
    y: 1995,
    s: "We Dance",
    c: 8,
    l: 0
  },
  {
    y: 1996,
    s: "We Dance",
    c: 3,
    l: 0
  },
  {
    y: 1997,
    s: "We Dance",
    c: 11,
    l: 0
  },
  {
    y: 1999,
    s: "We Dance",
    c: 13,
    l: 1
  },
  {
    y: 2010,
    s: "We Dance",
    c: 40,
    l: 0
  },
  {
    y: 2020,
    s: "We Dance",
    c: 27,
    l: 0
  },
  {
    y: 1997,
    s: "Western Homes",
    c: 1,
    l: 1
  },
  {
    y: 2010,
    s: "Western Homes",
    c: 1,
    l: 0
  },
  {
    y: 1996,
    s: "Westie Can Drum",
    c: 1,
    l: 0
  },
  {
    y: 1997,
    s: "Westie Can Drum",
    c: 33,
    l: 1
  },
  {
    y: 1997,
    s: "Winner of the",
    c: 1,
    l: 1
  },
  {
    y: 1997,
    s: "You Are a Light",
    c: 1,
    l: 0
  },
  {
    y: 1999,
    s: "You Are a Light",
    c: 68,
    l: 1
  },
  {
    y: 1989,
    s: "You're Killing Me",
    c: 1,
    l: 0
  },
  {
    y: 1990,
    s: "You're Killing Me",
    c: 1,
    l: 0
  },
  {
    y: 1995,
    s: "You're Killing Me",
    c: 1,
    l: 0
  },
  {
    y: 1996,
    s: "You're Killing Me",
    c: 1,
    l: 0
  },
  {
    y: 1999,
    s: "You're Killing Me",
    c: 1,
    l: 1
  },
  {
    y: 2020,
    s: "You're Killing Me",
    c: 1,
    l: 0
  },
  {
    y: 1991,
    s: "Zurich Is Stained",
    c: 1,
    l: 0
  },
  {
    y: 1992,
    s: "Zurich Is Stained",
    c: 31,
    l: 0
  },
  {
    y: 1993,
    s: "Zurich Is Stained",
    c: 3,
    l: 0
  },
  {
    y: 1994,
    s: "Zurich Is Stained",
    c: 1,
    l: 0
  },
  {
    y: 1995,
    s: "Zurich Is Stained",
    c: 6,
    l: 0
  },
  {
    y: 1997,
    s: "Zurich Is Stained",
    c: 7,
    l: 0
  },
  {
    y: 1999,
    s: "Zurich Is Stained",
    c: 8,
    l: 1
  },
  {
    y: 2010,
    s: "Zurich Is Stained",
    c: 19,
    l: 0
  },
  {
    y: 2020,
    s: "Zurich Is Stained",
    c: 27,
    l: 0
  }
];
const Timeline_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: `.wrap.svelte-v2b2rd.svelte-v2b2rd{max-width:895px;margin-left:auto;margin-right:auto}.key-wrap.svelte-v2b2rd.svelte-v2b2rd{display:flex;align-items:flex-end;font-family:var(--font-sans);font-size:18px;max-width:230px;margin:10px auto 100px auto}.key-wrap.svelte-v2b2rd .key.svelte-v2b2rd{display:flex;flex-wrap:wrap;justify-content:center;margin:0 5px}.key-wrap.svelte-v2b2rd .key p.svelte-v2b2rd{margin-top:3px;width:100%;text-align:center}.key-wrap.svelte-v2b2rd p.svelte-v2b2rd{margin:0}.key-wrap.svelte-v2b2rd div.c.svelte-v2b2rd{border-radius:50%;border:1px solid black;background-color:#ccc}.key-wrap.svelte-v2b2rd div.c.cloud.svelte-v2b2rd{background-image:url('images/cloud.svg');background-repeat:no-repeat;background-position:center;background-size:90%}[data-mode="prod"] .timeline-big-wrap .key-wrap div.c.cloud{background-image:url('/sandbox/pavement-1933-2023/images/cloud.svg')}.xaxis-wrap.svelte-v2b2rd.svelte-v2b2rd{display:flex}.xaxis.svelte-v2b2rd.svelte-v2b2rd,.timeline.svelte-v2b2rd.svelte-v2b2rd,.xticklines.svelte-v2b2rd.svelte-v2b2rd{width:calc(100% - 215px);max-width:var(--body-width)}.xaxis.svelte-v2b2rd.svelte-v2b2rd{position:relative}.track.svelte-v2b2rd.svelte-v2b2rd,p.album.svelte-v2b2rd.svelte-v2b2rd,.xaxis-space.svelte-v2b2rd.svelte-v2b2rd{width:200px;margin-right:15px}.xtick.svelte-v2b2rd.svelte-v2b2rd{position:absolute}.xtick.svelte-v2b2rd p.svelte-v2b2rd{position:absolute;top:8px;left:7px;transform-origin:top left;transform:rotate(300deg);font-family:var(--font-sans);margin:0;font-size:12px;white-space:nowrap}.xaxis-wrap.ai-0.svelte-v2b2rd .xtick p.svelte-v2b2rd{top:19px}.xaxis-lines.svelte-v2b2rd.svelte-v2b2rd{display:flex;position:absolute;width:100%;bottom:0;height:calc(100% - 25px)}.xticklines.svelte-v2b2rd.svelte-v2b2rd{position:relative;height:100%}.xtickline.svelte-v2b2rd.svelte-v2b2rd{position:absolute;height:100%;border-left:1px solid #ccc}.xticklines.svelte-v2b2rd p.svelte-v2b2rd{position:absolute;z-index:3;background:var(--bg);margin:0}.xticklines.svelte-v2b2rd p.svelte-v2b2rd,p.anno.svelte-v2b2rd.svelte-v2b2rd{font-family:var(--font-sans);font-size:16px;line-height:18px;text-align:left}.anno-wrap.svelte-v2b2rd.svelte-v2b2rd{margin-bottom:20px
	}p.anno.svelte-v2b2rd.svelte-v2b2rd{margin:0 auto 5px auto;max-width:var(--body-width);font-size:16px;line-height:20px}p.anno span{font-weight:700}.xticklines.svelte-v2b2rd p span.svelte-v2b2rd{position:absolute;border-left:1.5px solid black;top:100%}.xticklines.svelte-v2b2rd p span.svelte-v2b2rd:after{content:"↓";position:absolute;top:100%;left:-0.6px;transform:translate(-50%,-5px)}.xticklines.svelte-v2b2rd p.a-top.svelte-v2b2rd:after{content:"↑";position:absolute;top:0;transform:translate(0,-100%);left:3px}.xticklines.svelte-v2b2rd p.a-down.svelte-v2b2rd:after{content:"↓";position:absolute;top:100%;left:3px}.xticklines.svelte-v2b2rd p.a-down-right.svelte-v2b2rd:after{content:"↓";position:absolute;top:100%;right:3px}.xticklines.svelte-v2b2rd p.a-right.svelte-v2b2rd,p.a-right-bottom.svelte-v2b2rd.svelte-v2b2rd{text-align:right}.xticklines.svelte-v2b2rd p.a-right.svelte-v2b2rd:after{content:"→";position:absolute;top:0%;left:calc(100% + 3px)}.xticklines.svelte-v2b2rd p.a-right-bottom.svelte-v2b2rd:after{content:"→";position:absolute;bottom:0;left:calc(100% + 3px)}.album-wrap.svelte-v2b2rd.svelte-v2b2rd{margin-bottom:30px;text-align:right;position:relative}.tracklist.svelte-v2b2rd.svelte-v2b2rd{position:relative}p.album.svelte-v2b2rd.svelte-v2b2rd{font-family:var(--font-sans);font-weight:700;margin:0;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-size:18px}p.album.mobile.svelte-v2b2rd.svelte-v2b2rd{width:auto;text-align:left;margin-bottom:5px;max-width:var(--body-width);margin-left:auto;margin-right:auto}.track.separator.svelte-v2b2rd.svelte-v2b2rd{margin-top:8px;position:relative}.track.separator.svelte-v2b2rd.svelte-v2b2rd:before{content:"";position:absolute;width:100%;height:8px;top:0;left:0;background-image:url('images/border-h.png');background-repeat:repeat-x;background-size:cover;transform:translate(0,-80%);background-position:-16% 0}[data-mode="prod"] .timeline-big-wrap .track.separator:before{background-image:url('/sandbox/pavement-1933-2023/images/border-h.png')}.track.separator.svelte-v2b2rd p.svelte-v2b2rd{position:absolute;border-top:none;top:0;left:0}.timeline-wrap.svelte-v2b2rd.svelte-v2b2rd{display:flex;justify-content:flex-start;max-width:695px;margin-bottom:5px}.timeline-wrap.svelte-v2b2rd.svelte-v2b2rd:hover{background-color:#fff}.track.svelte-v2b2rd.svelte-v2b2rd{display:flex;justify-content:flex-end}.track.svelte-v2b2rd p.svelte-v2b2rd{margin:0 0 2px 0;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:calc(100% - 65px);font-size:16px}.timeline.svelte-v2b2rd.svelte-v2b2rd{position:relative}.timeline.svelte-v2b2rd div.line.svelte-v2b2rd{position:absolute;top:50%;transform:translate(0,-50%);border-top:3px solid var(--d1990s)}.timeline.svelte-v2b2rd div.line.d2020s.svelte-v2b2rd{border-top:3px solid var(--d2020s)}.timeline.svelte-v2b2rd div.line.d2010s.svelte-v2b2rd{border-top:3px solid var(--d2010s)}.timeline.svelte-v2b2rd div.c.svelte-v2b2rd{position:absolute;border-radius:50%;top:50%;transform:translate(-50%,-50%);background-color:var(--d1990s);border:1px solid #000;background-repeat:no-repeat;background-position:center;background-size:90%}.timeline.svelte-v2b2rd div.c.cloud.svelte-v2b2rd{background-image:url('images/cloud-1990s.svg')}.timeline.svelte-v2b2rd div.c.cloud.d2020s.svelte-v2b2rd{background-image:url('images/cloud-2020s.svg')}.timeline.svelte-v2b2rd div.c.cloud.d2010s.svelte-v2b2rd{background-image:url('images/cloud-2010s.svg')}[data-mode="prod"] .timeline-big-wrap .timeline div.c.cloud{background-image:url('/sandbox/pavement-1933-2023/images/cloud-1990s.svg')}[data-mode="prod"] .timeline-big-wrap .timeline div.c.cloud.d2020s{background-image:url('/sandbox/pavement-1933-2023/images/cloud-2020s.svg')}[data-mode="prod"] .timeline-big-wrap .timeline div.c.cloud.d2010s{background-image:url('/sandbox/pavement-1933-2023/images/cloud-2010s.svg')}.timeline.svelte-v2b2rd div.c.d2020s.svelte-v2b2rd{background-color:var(--d2020s)}.timeline.svelte-v2b2rd div.c.d2010s.svelte-v2b2rd{background-color:var(--d2010s)}.malkdiv.svelte-v2b2rd.svelte-v2b2rd{max-width:var(--malk-width);right:-11%;top:29%;position:absolute}img.malk.svelte-v2b2rd.svelte-v2b2rd{width:100%;mix-blend-mode:multiply}@media(max-width:910px){.wrap.svelte-v2b2rd.svelte-v2b2rd{margin-top:50px}.key-wrap.svelte-v2b2rd.svelte-v2b2rd{margin:10px auto 20px auto}.xticklines.svelte-v2b2rd p.svelte-v2b2rd{display:none}.xaxis-lines.svelte-v2b2rd.svelte-v2b2rd{height:calc(100% - 20px)}.xtick.svelte-v2b2rd p.svelte-v2b2rd{left:-7px}p.album.svelte-v2b2rd.svelte-v2b2rd{font-size:18px}.track.svelte-v2b2rd.svelte-v2b2rd,p.album.svelte-v2b2rd.svelte-v2b2rd,.xaxis-space.svelte-v2b2rd.svelte-v2b2rd{width:130px;margin-right:10px}.xaxis.svelte-v2b2rd.svelte-v2b2rd,.timeline.svelte-v2b2rd.svelte-v2b2rd,.xticklines.svelte-v2b2rd.svelte-v2b2rd{width:calc(100% - 140px)}.track.svelte-v2b2rd p.svelte-v2b2rd{font-size:13px;max-width:calc(100% - 52px)}.tracklist.svelte-v2b2rd p.album.svelte-v2b2rd{opacity:0}}@media(max-width:870px){.malkdiv.svelte-v2b2rd.svelte-v2b2rd{display:none}}@media(max-width:480px){.wrap.svelte-v2b2rd.svelte-v2b2rd{margin-top:30px}}`,
  map: null
};
const breakpoint = 910;
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let innerWidth;
  let desktop;
  let rRangeMax;
  let rScale;
  const years = [
    1989,
    1990,
    1991,
    1992,
    1993,
    1994,
    1995,
    1996,
    1997,
    1998,
    1999,
    2e3,
    2001,
    2002,
    2010,
    2020
  ];
  const discogs = raw$1.filter((f) => {
    return f["decade-1990s"];
  }).sort((a, b) => {
    return a.track - b.track;
  });
  const albumOrder = [
    {
      "album": "Westing (By Musket And Sextant)"
    },
    { "album": "Slanted and Enchanted" },
    { "album": "Crooked Rain, Crooked Rain" },
    { "album": "Wowee Zowee" },
    { "album": "Brighten the Corners" },
    { "album": "Terror Twilight" }
  ];
  const annos = [
    [
      "<span>“Box Elder”</span> is the only song played every year Pavement toured.",
      "<span>“My First Mine”</span> was last played in 1990. It was only played twice in 2023."
    ],
    [
      "Among <em>Slanted</em> b‑sides, only those on the <em>Watery, Domestic</em> EP are revived year after year."
    ],
    [
      "<span>“Fillmore Jive”</span> was last played in 1994 when <em>Crooked Rain</em> came out. It was played 16 times in 2022‑3."
    ],
    [
      "Several songs on <em>Wowee</em> were skipped on the 2010 tour but reappeared in 2022‑3.",
      "Spiral’s <span>“Painted Soldiers,”</span> only released on the <em>Wowee</em> reissue, was played 29 times in 2022‑3."
    ],
    [
      "<span>“Stereo”</span> ties with <span>“Cut Your Hair”</span> as the most played songs ever.",
      "An early version of <span>“Starlings”</span> was first played in ’92. <a href='https://www.youtube.com/watch?v=Mirzrb0G1jg&t=1413s' target='_blank'>In the recording</a>, Bob says he’s never heard the song before.",
      "Because of some <a href='https://www.stereogum.com/2105993/pavement-harness-your-hopes-spotify/columns/sounding-board/' target='_blank'>weird algorithm</a>, <span>“Harness Your Hopes”</span> went from two plays in the ’90s to being tied with <span>“Stereo”</span> as the third most-played song in 2022‑3."
    ],
    [
      "Songs from <em>Terror Twilight</em> remain the most elusive non‑b‑sides live, with many songs only played on the ’99 tour."
    ]
  ];
  const byAlbum = group(discogs, (d) => {
    if (d.comp) {
      if (albumOrder.includes(d.comp)) {
        return d.comp;
      } else {
        return d.comp.split(":")[0];
      }
    } else {
      return d.album;
    }
  });
  const bySong = group(data, (d) => {
    return d.s;
  });
  const xScale = scaleBand().domain(years).range([0, 100]);
  const keys = [1, 10, 20, 50];
  $$result.css.add(css$1);
  innerWidth = 375;
  desktop = innerWidth > breakpoint;
  rRangeMax = desktop ? 23 : 15;
  rScale = scaleSqrt().domain([0, 74]).range([0, rRangeMax]);
  return ` <div class="wrap timeline-big-wrap svelte-v2b2rd"><div class="key-wrap svelte-v2b2rd"><p class="svelte-v2b2rd" data-svelte-h="svelte-1qvsis5">Played</p> ${each(keys, (key) => {
    return `<div class="key svelte-v2b2rd" style="${"width:" + escape(rScale(key) * 2 + 10, true) + "px; min-width:20px;"}"><div class="${"c " + escape(key >= 20 ? "cloud" : "", true) + " svelte-v2b2rd"}" style="${"width:" + escape(rScale(key) * 2, true) + "px; height:" + escape(rScale(key) * 2, true) + "px;"}"></div> <p class="svelte-v2b2rd">${escape(key)}x</p> </div>`;
  })}</div> ${each(albumOrder, (a, ai) => {
    let tracks = byAlbum.get(a.album);
    return ` <div class="album-wrap svelte-v2b2rd">${!desktop ? `<p class="album mobile svelte-v2b2rd"><em>${escape(a.album)}</em></p> <div class="anno-wrap svelte-v2b2rd">${each(annos[ai], (anno) => {
      return `<p class="anno svelte-v2b2rd"><!-- HTML_TAG_START -->${anno}<!-- HTML_TAG_END --></p>`;
    })} </div>` : ``} ${ai == 2 ? `<div class="malkdiv svelte-v2b2rd" data-svelte-h="svelte-1s6hnlg"><div class="border b-left"></div> <div class="border b-right"></div> <div class="border b-top"></div> <div class="border b-bottom"></div> <img class="malk svelte-v2b2rd" src="${escape(base, true) + "/images/malk-5.gif"}" alt="Animation of Malkmus kicking his leg probably while playing Unfair"> </div>` : ``} <div class="tracklist svelte-v2b2rd"><div class="${"xaxis-wrap ai-" + escape(ai, true) + " svelte-v2b2rd"}"><p class="album svelte-v2b2rd"><em>${escape(a.album)}</em></p> <div class="xaxis svelte-v2b2rd">${each(years, (year) => {
      let ticktext = year < 2e3 && year != 1998 ? year : year == 2020 ? "2022‑3" : year == 2010 ? "2010" : "";
      return ` <div class="xtick svelte-v2b2rd" style="${"left:" + escape(xScale(year), true) + "%;"}"><p class="svelte-v2b2rd">${escape(ticktext)}</p> </div>`;
    })} </div></div> <div class="xaxis-lines svelte-v2b2rd"><div class="xaxis-space svelte-v2b2rd"></div> <div class="xticklines svelte-v2b2rd">${each(years, (year) => {
      return `${year < 2e3 && year != 1998 || year == 2010 || year == 2020 ? `<div class="xtickline svelte-v2b2rd" style="${"left:" + escape(xScale(year), true) + "%;"}"></div>` : ``}`;
    })}  ${ai == 0 ? `<p style="left:78%; top:-9%; width:180px; transform:translate(-100%,-100%); text-align:right;" class="svelte-v2b2rd"><!-- HTML_TAG_START -->${annos[ai][0]}<!-- HTML_TAG_END --><span class="a-down svelte-v2b2rd" style="right:7px; height:62px;"></span></p> <p class="a-down svelte-v2b2rd" style="${"left:34%; bottom:5%; transform:translate(0,-100%); width:" + escape(desktop ? 295 : 225, true) + "px;"}"><!-- HTML_TAG_START -->${annos[ai][1]}<!-- HTML_TAG_END --></p>` : ``}  ${ai == 1 ? `<p class="a-down svelte-v2b2rd" style="${"left:" + escape(xScale(1998), true) + "%; top:51%; width:200px;"}"><!-- HTML_TAG_START -->${annos[ai][0]}<!-- HTML_TAG_END --></p>` : ``}  ${ai == 2 ? `<p class="a-top svelte-v2b2rd" style="${"left:" + escape(xScale(1996), true) + "%; top:57%; width:200px;"}"><!-- HTML_TAG_START -->${annos[ai][0]}<!-- HTML_TAG_END --></p>` : ``}  ${ai == 3 ? `<p style="text-align:right; left:2px; top:18%; width:130px;" class="svelte-v2b2rd"><!-- HTML_TAG_START -->${annos[ai][0]}<!-- HTML_TAG_END --></p> <p class="a-right-bottom svelte-v2b2rd" style="left:2px; bottom:0; width:130px;"><!-- HTML_TAG_START -->${annos[ai][1]}<!-- HTML_TAG_END --></p>` : ``}  ${ai == 4 ? `<p class="a-right svelte-v2b2rd" style="left:2px; top:-1px; width:150px;"><!-- HTML_TAG_START -->${annos[ai][0]}<!-- HTML_TAG_END --></p> <p class="a-down-right svelte-v2b2rd" style="text-align:right; left:2px; bottom:40.5%; transform:translate(0,-100%); width:165px;"><!-- HTML_TAG_START -->${annos[ai][1]}<!-- HTML_TAG_END --></p> <p class="a-right svelte-v2b2rd" style="left:2%; top:66%; width:160px;"><!-- HTML_TAG_START -->${annos[ai][2]}<!-- HTML_TAG_END --></p>` : ``}  ${ai == 5 ? `<p style="text-align:right; left:2px; top:32%; width:160px;" class="svelte-v2b2rd"><!-- HTML_TAG_START -->${annos[ai][0]}<!-- HTML_TAG_END --></p>` : ``} </div></div> ${each(tracks, (track, i) => {
      let ydata = bySong.get(track.song), l1990 = ydata.find((f) => {
        return f.l;
      }).y;
      return `  ${ai == 0 && i == 0 || i > 0 && track.comp && !tracks[i - 1].comp ? `<div class="track separator svelte-v2b2rd" data-svelte-h="svelte-10gks2q"><p class="svelte-v2b2rd">B‑SIDES↓</p></div>` : ``} <div class="timeline-wrap svelte-v2b2rd"><div class="track svelte-v2b2rd"><p class="svelte-v2b2rd">${escape(track.song)}</p></div> <div class="timeline svelte-v2b2rd"><div class="line svelte-v2b2rd" style="${"left:" + escape(xScale(ydata[0].y), true) + "%; width:" + escape(xScale(l1990) - xScale(ydata[0].y), true) + "%;"}"></div> ${ydata.find((f) => {
        return f.y == 2010;
      }) ? `<div class="line d2010s svelte-v2b2rd" style="${"left:" + escape(xScale(l1990), true) + "%; width:" + escape(xScale(2010) - xScale(l1990), true) + "%;"}"></div> ${ydata.find((f) => {
        return f.y == 2020;
      }) ? `<div class="line d2020s svelte-v2b2rd" style="${"left:" + escape(xScale(2010), true) + "%; width:" + escape(xScale(2020) - xScale(2010), true) + "%;"}"></div>` : ``}` : `${ydata.find((f) => {
        return f.y == 2020;
      }) ? `<div class="line d2020s svelte-v2b2rd" style="${"left:" + escape(xScale(l1990), true) + "%; width:" + escape(xScale(2020) - xScale(l1990), true) + "%;"}"></div>` : ``}`} ${each(ydata, (y) => {
        y.y == 2020 ? "2020s" : y.y == 2010 ? "2010s" : "1990s";
        return ` <div class="${"c " + escape(y.c >= 20 ? `cloud` : "", true) + " " + escape(y.y == 2020 ? "d2020s" : y.y == 2010 ? "d2010s" : "", true) + " svelte-v2b2rd"}" style="${"left:" + escape(xScale(y.y), true) + "%; width:" + escape(rScale(y.c) * 2, true) + "px; height:" + escape(rScale(y.c) * 2, true) + "px;"}"></div>`;
      })}</div> </div>`;
    })}</div> </div>`;
  })} </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".malk-container.svelte-ee8amn{position:relative;max-width:1080px;margin-left:auto;margin-right:auto}.malkdiv.svelte-ee8amn{position:relative;max-width:var(--malk-width)}.malkdiv.left.svelte-ee8amn{float:left;margin-left:-10px}.malkdiv.right.svelte-ee8amn{float:right;margin-right:-10px}img.malk.svelte-ee8amn{width:100%;mix-blend-mode:multiply}@media(max-width:1080px){.malkdiv.left.svelte-ee8amn{margin:0 10px 10px 0}.malkdiv.right.svelte-ee8amn{margin:0 0 10px 10px}}@media(max-width:480px){.malkdiv.svelte-ee8amn{max-width:var(--malk-width-mobile)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const mode = base == "" ? "dev" : "prod";
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1owevsa_START --><meta charset="utf-8">${$$result.title = `<title>PAVEMENT 1933-2023</title>`, ""}<meta property="og:title" content="PAVEMENT 1933-2023"><meta name="description" content="A visual look at setlist data from Pavement's 2022-2023 reunion and touring history."><meta property="og:description" content="A visual look at setlist data from Pavement's 2022-2023 reunion and touring history."><meta property="og:image" content="https://www.deniselu.com/sandbox/pavement-1933-2023/images/pavement-1933-2023-setlists-promo-twitter.png"><meta property="og:url" content="https://www.deniselu.com/sandbox/pavement-1933-2023/"><meta property="og:type" content="article"><meta property="twitter:url" content="https://www.deniselu.com/sandbox/pavement-1933-2023/"><meta property="twitter:title" content="PAVEMENT 1933-2023"><meta property="twitter:description" content="A visual look at setlist data from Pavement's 2022-2023 reunion and touring history."><meta property="twitter:image" content="https://www.deniselu.com/sandbox/pavement-1933-2023/images/pavement-1933-2023-setlists-promo-twitter.png"><meta name="image" content="https://www.deniselu.com/sandbox/pavement-1933-2023/images/pavement-1933-2023-setlists-promo-twitter.png"><meta property="article:published_time" content="2023-10-16T14:00:00.000Z"><meta name="news_keywords" content="Pavement,Stephen Malkmus,Pavement reunion,Pavement setlist,Pavement concert,Pavement shows,setlist,setlist fm,Slanted and Enchanted,Crooked Rain,Wowee Zowee,Brighten the Corners,Terror Twilight,Westing By Musket and Sextant,Spiral Stairs,Harness Your Hopes,Range Life,Cut Your Hair,Summer Babe,Brooklyn Steel,Pavement b-sides,datavis,interactive,graphics,charts"><meta name="robots" content="noarchive, max-image-preview:large"><meta name="viewport" content="width=device-width, initial-scale=1"><!-- HEAD_svelte-1owevsa_END -->`, ""} <section${add_attribute("data-mode", mode, 0)}>${validate_component(Topper, "Topper").$$render($$result, {}, {}, {})} <p class="body" data-svelte-h="svelte-14g3ev">I don’t like a lot of things. One thing I unabashedly like—with a fervor that has been described as an obsession at best and an illness at worst—is Pavement.</p> <div class="malk-container svelte-ee8amn" data-svelte-h="svelte-8ax5n"><div class="malkdiv left svelte-ee8amn"><div class="border b-left"></div> <div class="border b-right"></div> <div class="border b-top"></div> <div class="border b-bottom"></div> <img class="malk svelte-ee8amn" src="${escape(base, true) + "/images/malk-1.gif"}" alt="Animation of Malkmus swinging his guitar"></div> <p class="body">An injury confined me to my apartment the weekend after my very last Pavement show. The band had put the nail in the coffin for any more shows in the near future. With all my plans cancelled and left to mope in my Pavement-less depression, I looked back at some setlist data for kicks.</p></div> <p class="body" data-svelte-h="svelte-17pycy">The ’90s are alive and well 30 years on. During the 2022‑3 Pavement reunion, the band played more diverse sets than they did in the 2010 reunion, pulling more from the lesser-known bits of their backlog. (Note: I use “b‑side” throughout to refer to any songs that were not part of an LP proper, including those on EPs and singles.)</p> ${validate_component(Discography, "Discography").$$render($$result, {}, {}, {})} <p class="body" data-svelte-h="svelte-4rfj0t">Admittedly arriving at the Pavement cult later than most in life, I hadn’t seen them during the 2010 reunion. Before that, I was six when the band played its last show in 1999 before disbanding. My first Pavement show was on Oct. 1, 2022.</p> <div class="malk-container svelte-ee8amn" data-svelte-h="svelte-olbqfd"><div class="malkdiv right svelte-ee8amn"><div class="border b-left"></div> <div class="border b-right"></div> <div class="border b-top"></div> <div class="border b-bottom"></div> <img class="malk svelte-ee8amn" src="${escape(base, true) + "/images/malk-4.gif"}" alt="Animation of Malkmus swinging his guitar"></div> <p class="body">The sound at Kings Theatre sucks. But to no one’s surprise, Pavement still exceeded my expectations. I went in thinking they would stick to just the hits and play them poorly. I did not expect “Heckler Spray,” a pre‑<em>Slanted</em> b‑side, to be played, and I did not expect several songs to be updated with fun flourishes. (A review of one of the reunion shows joked that the band finally learned to play their instruments.)</p></div> <p class="body" data-svelte-h="svelte-1eidji1">I returned for two more nights at Kings and the band put on a different show every time, from a changing setlist to different riffs on solos to Malkmus forgetting and making up lyrics. The charm of Pavement is that they’re physically incapable of playing the same song the same way twice.</p> <p class="body" data-svelte-h="svelte-pdwns2">In the past two years, Pavement played 77 shows with a different setlist every night. In addition to the 66 songs from their own catalog, they added a cover of a Jim Pepper song, “<a href="https://www.youtube.com/watch?v=S2YeEUlyhQw" target="_blank">Witchi Tai To</a>,” to their canon. Here’s a look at where each song landed on setlists throughout the tour.</p> ${validate_component(Setlists, "Setlists").$$render($$result, {}, {}, {})} <p class="body" data-svelte-h="svelte-1e0cbvc">After Kings, I went on to see the band six more times on two other continents. (Each time could have been the last, right?)</p> <div class="malk-container svelte-ee8amn" data-svelte-h="svelte-1jkmt34"><div class="malkdiv left svelte-ee8amn"><div class="border b-left"></div> <div class="border b-right"></div> <div class="border b-top"></div> <div class="border b-bottom"></div> <img class="malk svelte-ee8amn" src="${escape(base, true) + "/images/malk-3.gif"}" alt="Animation of Malkmus jumping"></div> <p class="body">Three months later, Pavement announced a four‑night residency at Brooklyn Steel in September. Much to my delight and my friends’ and bank account’s dismay, I got tickets to all four shows. It soon became clear that this would be one of Pavement’s last hurrahs for a while, likely for the decade, possibly for good.</p></div> <p class="body" data-svelte-h="svelte-pbt4fl">The Brooklyn Steel shows were special. The band packed several songs that were played fewer than five times during the reunion into the four nights. “Elevate Me Later,” “Maybe Maybe” and “Loretta’s Scars” were played for the first time during the reunion at Brooklyn Steel. Hearing the opening riffs to the latter of the group (a whole step higher live than on the album version!) was one of my favorite moments of all the shows.</p> <p class="body" data-svelte-h="svelte-nvg29v">Looking back at Pavement’s entire tour history reveals just how long some songs played during the 2022‑3 reunion hadn’t seen the light of day since the ’90s.</p> ${validate_component(Timeline, "Timeline").$$render($$result, {}, {}, {})} <p class="body" data-svelte-h="svelte-d74sr8">Yes, every show I went to was worth it. No, I will not be taking questions at this time. I caught the 2020s rendition of nearly every song the band played this decade. I heard that “Cut Your Hair” solo 10 times and Malkmus managed to pull a different move for each one.</p> <p class="body" data-svelte-h="svelte-1cmoiia">Someone once remarked that I had gone to a lifetime’s worth of Pavement shows. All I can say is, here’s to Pavement 2030 (?).</p></section> <section id="methodology" data-svelte-h="svelte-btnbbx"><p>Published Oct. 16, 2023.</p> <p>Sources: Setlist.fm, Discogs.com, Bandcamp.com. Setlist data as of Sept. 17, 2023. Setlist items that are medleys are not included. B‑sides of the same name are grouped with the first compilation they are released on.</p> <p>By <a href="https://www.deniselu.com/">Denise Lu</a>. Get in touch if you have an original pressing of <em>Slay Tracks</em> you want to sell me.</p> </section>`;
});
export {
  Page as default
};
