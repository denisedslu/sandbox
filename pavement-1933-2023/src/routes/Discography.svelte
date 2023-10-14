<script>
	import { base } from '$app/paths';
	import raw from '$lib/data/discography-decades.json';
	import Scroller from "@sveltejs/svelte-scroller";
	import {group} from 'd3-array';

	let index, offset, progress;
	let threshold = 0.6;
	$: innerHeight = 660; // bound to client
	$: innerWidth = 375; // bound to client
	$: top = innerHeight > 600 ? '50%' : '0.02%';
	$: translateX = innerWidth <= 930 ? '-50%' : '0';
	$: translateY = innerHeight > 600 ? '-50%' : '0';

	// $:{console.log(innerWidth,translateX,translateY)}

	const data = raw.filter((f)=>{return f['decade-1990s']}).sort((a,b)=>{return a.track - b.track})

	const albumOrder = [
		{"album":"Westing (By Musket And Sextant)","img":"westing"},
		{"album":"Slanted and Enchanted","img":"slanted"},
		{"album":"Crooked Rain, Crooked Rain","img":"crooked"},
		{"album":"Wowee Zowee","img":"wowee"},
		{"album":"Brighten the Corners","img":"brighten"},
		{"album":"Terror Twilight","img":"terror"},
	]

	const byAlbum = group(data, (d)=>{
		if (d.comp) {
			if (albumOrder.includes(d.comp)) {
				return d.comp
			} else {
				return d.comp.split(":")[0]
			}
		} else {
			return d.album
		}
	});

</script>

<svelte:window bind:innerHeight bind:innerWidth/>
<div class="wrap discography-big-wrap">
<Scroller top="0" bottom="1" bind:index bind:offset bind:progress bind:threshold>
  	<div slot="background">
	  	<div class="bgcontent" style="top:{top}; transform:translate({translateX},{translateY})">
			<div class="discography-wrap" data-index={index}>
				{#each albumOrder as a,ai}
					{@const tracks = byAlbum.get(a.album)}
					<div class="album-wrap">
						<div class="img-wrap">
							<img src="{base}/images/album-{a.img}.jpg" alt="{a.album} album cover"/>
						</div>
						<div class="tracklist">
							{#each tracks as track,i}
								{#if (ai==0 && i==0) || (i>0 && track.comp && !tracks[i-1].comp)}
								<div class="track separator"><p>B‑SIDES↓</p></div>
								{/if}
								<div class="track {track['decade-2020s'] ? 'd2020s' : ''} {track['decade-2010s'] ? 'd2010s' : ''}">
									<p>{track.song}</p>
								</div>
							{/each}
						</div>
					</div>
				{/each}
		    </div>
		    <p class="source">Note: Songs that were released but not in setlists before 2000 are not included (those songs, all b‑sides, were also not played during reunions).</p>

		    <!-- {#if innerWidth <= 480} -->
		    	<!-- <div class="prompt">More ↓</div> -->
		    <!-- {/if} -->
	  	</div>
  	</div>

  	<div slot="foreground">
	    <section class="spacer"></section>
	    
	    <section>
	    	<p>Pavement played 66 songs from their catalog for the <span class="d2020s">2022‑3</span> reunion.</p>
	    </section>
	    
	    <section>
	    	<p>Of these, a majority were <span class="d2010s d2020s">also played</span> during the <span class="d2010s">2010</span> reunion.</p>
	    </section>
	    
	    <section>
	    	<p>Five songs had been played in 2010 but not the 2020s, including one of my favorite b‑sides, “<a href="https://www.youtube.com/watch?v=3KsYdKwUQvI" target="_blank">Perfect Depth</a>.” The band has also said in interviews that “Rattled by the Rush” was hard to play live.</p>
	    </section>
	    
	    <section>
	    	<p>About two dozen songs during the 2022‑3 reunion haven’t been played since the ’90s, including songs on later albums and several b‑sides.</p>
	    </section>
  	</div>
</Scroller>



</div>




<style>
	.wrap {
		max-width: var(--widest);
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 0;
	}

	div[slot="background"] {
		position:relative;
		height:100vh;
	}

	.bgcontent {
		max-width:800px;
		position:absolute;
		width:100%;
		right:0;

		/*outline:1px solid red;*/
	}

	section {
	    height: 100vh;
	    width: calc(100% - 815px);
	}

	section.spacer {
		height:30vh;
	}

	section p {
		font-size:16px;
		line-height:20px;
		font-family:var(--font-sans);
		text-align:right;
/*		background-color:var(--bg);*/
		max-width:190px;
		margin-right:0;
		margin-left:auto;

		/*outline:1px solid blue;*/
	}

	section p span {font-weight:700; display:inline-block;}
	section p span.d2020s {background-color:var(--d2020s-light);}
	section p span.d2010s {background-color:var(--d2010s-light);}
	section p span.d2020s.d2010s {background-color:var(--d2020s-d2010s);}

	p.source {
		margin-left:0;
	}

	.album-wrap {
		display:flex;
	}

	.album-wrap img {
		max-width:90px;
		width:100%;
	}

	.tracklist {
		display:flex;
		align-items:flex-end;
	}

	.track {
		transform: rotate(300deg);
		transform-origin: top left;
		width: 20px;
		height:20px;
		margin-right:2px;
	}

	.track.separator {
		margin-left:3px;
	}

	.tracklist .track.separator p {
		overflow:visible !important;
	}

	.tracklist .track.separator p:before {
		content:"";
		position:absolute;
		width:100%;
		height:8px;
		top:0;
		left:0;
		background-image:url('images/border-h.png');
		background-repeat: repeat-x;
		background-size:cover;
		transform:translate(0,-80%);
		background-position:30% 0;
	}
	:global([data-mode="prod"] .discography-big-wrap .tracklist .track.separator p:before) { background-image:url('/sandbox/pavement-1933-2023/images/border-h.png');}

	.tracklist .track p {
		margin:0;
		width:90px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		font-size:14px;
		position:relative;
	}


	@keyframes anim {
	  from {
	    background-position: -500% 0;
	  }
	  to {
	    background-position: 0 0;
	  }
	}

	.track p {
		background-repeat:no-repeat;
		background-position:-500% 0px;
		background-size:contain;
	}


	[data-index="1"] .track.d2020s p {background-image:url('images/highlight-d2020s.png');animation: anim 0.3s linear 1 forwards;}
	[data-index="2"] .track.d2020s p {background-image:url('images/highlight-d2020s.png');animation: anim 0.3s linear 1 forwards;}
	[data-index="2"] .track.d2020s.d2010s p {background-image:url('images/highlight-d2020s-d2010s.png');animation: anim 0.3s linear 1 forwards;}
	[data-index="2"] .track.d2010s p {background-image:url('images/highlight-d2010s.png');animation: anim 0.3s linear 1 forwards;}
	[data-index="3"] .track.d2010s p {background-image:url('images/highlight-d2010s.png');animation: anim 0.3s linear 1 forwards;}
	[data-index="3"] .track.d2020s.d2010s p {background-image:none}
	[data-index="4"] .track.d2020s p {background-image:url('images/highlight-d2020s.png');animation: anim 0.3s linear 1 forwards;}
	[data-index="4"] .track.d2020s.d2010s p {background-image:none;}

	:global([data-mode="prod"] .discography-big-wrap [data-index="1"] .track.d2020s p) {background-image:url('/sandbox/pavement-1933-2023/images/highlight-d2020s.png');}
	:global([data-mode="prod"] .discography-big-wrap [data-index="2"] .track.d2020s p) {background-image:url('/sandbox/pavement-1933-2023/images/highlight-d2020s.png');}
	:global([data-mode="prod"] .discography-big-wrap [data-index="2"] .track.d2020s.d2010s p) {background-image:url('/sandbox/pavement-1933-2023/images/highlight-d2020s-d2010s.png');}
	:global([data-mode="prod"] .discography-big-wrap [data-index="2"] .track.d2010s p) {background-image:url('/sandbox/pavement-1933-2023/images/highlight-d2010s.png');}
	:global([data-mode="prod"] .discography-big-wrap [data-index="3"] .track.d2010s p) {background-image:url('/sandbox/pavement-1933-2023/images/highlight-d2010s.png');}
	:global([data-mode="prod"] .discography-big-wrap [data-index="4"] .track.d2020s p) {background-image:url('/sandbox/pavement-1933-2023/images/highlight-d2020s.png');}
	

	@media (max-width:930px) {
		section {
			width:100%;
		}

		section p {
			margin-left:auto;
			margin-right:auto;
			width:calc(100% - 20px);
			text-align:left;
			max-width:460px;
			padding:10px;
			outline:2px solid black;
/*			background-color:var(--bg);*/
			background-color: white;
		}

		.bgcontent {
			max-width:100%;
			max-width:540px;
			left:50%;
		}

		.discography-wrap {
			display:flex;
			justify-content: space-between;
		}

		.album-wrap, .tracklist {
			display:block;
		}

		.album-wrap {
			width:16%;
		}

		.track {
			transform:none;
			width:100%;
			height:auto;
			margin-right:0;
			margin-bottom:1px;
		}

		.track.separator {
			margin-left:0;
			margin-top:7px;
		}

		.tracklist .track p {
			width:100%;
			font-size:13px;
		}

		.track.separator p {
			border-top: 1px dashed #999;
		}
	}

</style>
