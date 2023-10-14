<script>
	import { base } from '$app/paths';
	import Topper from './Topper.svelte';
	import Discography from './Discography.svelte';
	import Setlists from './Setlists.svelte';
	import Timeline from './Timeline.svelte';

	const mode = base == '' ? 'dev' : 'prod';

</script>

<svelte:head>
	<meta charset="utf-8">
	<title>PAVEMENT 1933-2023</title>
	<meta property="og:title" content="PAVEMENT 1933-2023">
	<meta name="description" content="A visual look at setlist data from Pavement's 2022-2023 reunion and touring history.">
	<meta property="og:description" content="A visual look at setlist data from Pavement's 2022-2023 reunion and touring history.">
	<meta property="og:image" content="">
	<meta property="og:url" content="">
	<meta property="og:type" content="article">
	<meta property="twitter:url" content="">
	<meta property="twitter:title" content="PAVEMENT 1933-2023">
	<meta property="twitter:description" content="A visual look at setlist data from Pavement's 2022-2023 reunion and touring history.">
	<meta property="twitter:image" content="">
	<meta name="image" content="">
	<meta property="article:published_time" content="2023-10-09T00:00:00.000Z">
	<meta name="news_keywords" content="Pavement,Stephen Malkmus,Pavement reunion,Pavement setlist,Pavement concert,Pavement shows,setlist,setlist fm,Slanted and Enchanted,Crooked Rain,Wowee Zowee,Brighten the Corners,Terror Twilight,Westing By Musket and Sextant,Spiral Stairs,Harness Your Hopes,Range Life,Cut Your Hair,Summer Babe,Brooklyn Steel,Pavement b-sides,datavis,interactive,graphics,charts">
	<meta name="robots" content="noarchive, max-image-preview:large">
	<meta name="viewport" content="width=device-width, initial-scale=1">
</svelte:head>


<section data-mode="{mode}">
	<Topper />

	<p class="body">I don’t like a lot of things. One thing I unabashedly like—with a fervor that has been described as an obsession at best and an illness at worst—is Pavement.</p>

	<div class="malk-container">
		<div class="malkdiv left">
			<div class="border b-left"></div>
			<div class="border b-right"></div>
			<div class="border b-top"></div>
			<div class="border b-bottom"></div>
			<img class="malk" src="{base}/images/malk-1.gif" alt="Animation of Malkmus swinging his guitar"/>
		</div>
		<p class="body">An injury confined me to my apartment the weekend after my very last Pavement show. The band had put the nail in the coffin for any more shows in the near future. With all my plans cancelled and left to mope in my Pavement-less depression, I looked back at some setlist data for kicks.</p>
	</div>


	<p class="body">The ’90s are alive and well 30 years on. During the 2022‑3 Pavement reunion, the band played more diverse sets than they did in the 2010 reunion, pulling more from the lesser-known bits of their backlog. (Note: I use “b‑side” throughout to refer to any songs that were not part of an LP proper, including those on EPs and singles.)</p>

	<Discography />

	<p class="body">Admittedly arriving at the Pavement cult later than most in life, I hadn’t seen them during the 2010 reunion. Before that, I was six when the band played its last show in 1999 before disbanding. My first Pavement show was on Oct. 1, 2022.</p>

	<div class="malk-container">
		<div class="malkdiv right">
			<div class="border b-left"></div>
			<div class="border b-right"></div>
			<div class="border b-top"></div>
			<div class="border b-bottom"></div>
			<img class="malk" src="{base}/images/malk-4.gif" alt="Animation of Malkmus swinging his guitar"/>
		</div>
		<p class="body">The sound at Kings Theatre sucks. But to no one’s surprise, Pavement still exceeded my expectations. I went in thinking they would stick to just the hits and play them poorly. I did not expect “Heckler Spray,” a pre‑<em>Slanted</em> b‑side, to be played, and I did not expect several songs to be updated with fun flourishes. (A review of one of the reunion shows joked that the band finally learned to play their instruments.)</p>
	</div>

	<p class="body">I returned for two more nights at Kings and the band put on a different show every time, from a changing setlist to different riffs on solos to Malkmus forgetting and making up lyrics. The charm of Pavement is that they’re physically incapable of playing the same song the same way twice.</p>

	<p class="body">In the past two years, Pavement played 77 shows with a different setlist every night. In addition to the 66 songs from their own catalog, they added a cover of a Jim Pepper song, “<a href="https://www.youtube.com/watch?v=S2YeEUlyhQw" target="_blank">Witchi Tai To</a>,” to their canon. Here’s a look at where each song landed on setlists throughout the tour.</p>

	<Setlists />

	<p class="body">After Kings, I went on to see the band six more times on two other continents. (Each time could have been the last, right?)</p>

	<div class="malk-container">
		<div class="malkdiv left">
			<div class="border b-left"></div>
			<div class="border b-right"></div>
			<div class="border b-top"></div>
			<div class="border b-bottom"></div>
			<img class="malk" src="{base}/images/malk-3.gif" alt="Animation of Malkmus jumping"/>
		</div>
		<p class="body">Three months later, Pavement announced a four‑night residency at Brooklyn Steel in September. Much to my delight and my friends’ and bank account’s dismay, I got tickets to all four shows. It soon became clear that this would be one of Pavement’s last hurrahs for a while, likely for the decade, possibly for good.</p>
	</div>

	<p class="body">The Brooklyn Steel shows were special. The band packed several songs that were played fewer than five times during the reunion into the four nights. “Elevate Me Later,” “Maybe Maybe” and “Loretta’s Scars” were played for the first time during the reunion at Brooklyn Steel. Hearing the opening riffs to the latter of the group (a whole step higher live than on the album version!) was one of my favorite moments of all the shows.</p>

	<p class="body">Looking back at Pavement’s entire tour history reveals just how long some songs played during the 2022‑3 reunion hadn’t seen the light of day since the ’90s.</p>

	<Timeline />
	
	<p class="body">Yes, every show I went to was worth it. No, I will not be taking questions at this time. I caught the 2020s rendition of nearly every song the band played this decade. I heard that “Cut Your Hair” solo 10 times and Malkmus managed to pull a different move for each one.</p>
	
	<p class="body">Someone once remarked that I had gone to a lifetime’s worth of Pavement shows. All I can say is, here’s to Pavement 2030 (?).</p>
</section>

<section id="methodology">
	<p>Published Oct. 16, 2023.</p>
	
	<p>Sources: Setlist.fm, Discogs.com, Bandcamp.com. Setlist data as of Sept. 17, 2023. Setlist items that are medleys are not included. B‑sides of the same name are grouped with the first compilation they are released on.
	</p>

	<p>By <a href="https://www.deniselu.com/">Denise Lu</a>. Get in touch if you have an original pressing of <em>Slay Tracks</em> you want to sell me.</p>
</section>

<style>

	.malk-container {
		position:relative;
		max-width:1080px;
		margin-left:auto;
		margin-right:auto;
	}

	.malkdiv {
		position:relative;
		max-width:var(--malk-width);
	}

	.malkdiv.left {
		float:left;
		margin-left:-10px;
	}

	.malkdiv.right {
		float:right;
		margin-right:-10px;
	}

	img.malk {
		width:100%;
		mix-blend-mode: multiply;
	}

	@media (max-width:1080px) {
		.malkdiv.left {
			margin: 0 10px 10px 0;
		}

		.malkdiv.right {
			margin: 0 0 10px 10px;
		}
	}

	@media (max-width:480px) {
		.malkdiv {
			max-width:var(--malk-width-mobile);
		}
	}
</style>
