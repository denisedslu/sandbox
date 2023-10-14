<script>
	import { base } from '$app/paths';
	import data from '$lib/data/allyears.json';
	import raw from '$lib/data/discography-decades.json';
	import {group} from 'd3-array';
	import {scaleBand, scaleSqrt} from 'd3-scale';

	const years = [1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2010,2020]

	const discogs = raw.filter((f)=>{return f['decade-1990s']}).sort((a,b)=>{return a.track - b.track})

	const albumOrder = [
		{"album":"Westing (By Musket And Sextant)"},
		{"album":"Slanted and Enchanted"},
		{"album":"Crooked Rain, Crooked Rain"},
		{"album":"Wowee Zowee"},
		{"album":"Brighten the Corners"},
		{"album":"Terror Twilight"},
	]

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
	]

	const byAlbum = group(discogs, (d)=>{
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

	const bySong = group(data, (d)=>{return d.s});

	const xScale = scaleBand()
		.domain(years)
		.range([0,100])

	const breakpoint = 910;
	$: innerWidth = 375 // bound to window_w
	$: desktop = innerWidth > breakpoint

	$: rRangeMax = desktop ? 23 : 15
	$: rScale = scaleSqrt()
		.domain([0,74])
		.range([0,rRangeMax]);

	const keys = [1,10,20,50];

</script>


<svelte:window bind:innerWidth/>

<div class="wrap timeline-big-wrap">
	<div class="key-wrap">
		<p>Played</p>
		{#each keys as key}
			<div class="key" style="width:{rScale(key)*2+10}px; min-width:20px;">
				<div class="c {key>=20 ? 'cloud' : ''}" style="
				width:{rScale(key)*2}px;
				height:{rScale(key)*2}px;
				"></div>
				<p>{key}x</p>
			</div>
		{/each}
	</div>

	{#each albumOrder as a,ai}
		{@const tracks = byAlbum.get(a.album)}
		<div class="album-wrap">
			{#if !desktop}
				<p class="album mobile"><em>{a.album}</em></p>

				<div class="anno-wrap">
					{#each annos[ai] as anno}
						<p class="anno">{@html anno}</p>
					{/each}
				</div>
			{/if}

			{#if ai==2}
				<div class="malkdiv">
					<div class="border b-left"></div>
					<div class="border b-right"></div>
					<div class="border b-top"></div>
					<div class="border b-bottom"></div>
					<img class="malk" src="{base}/images/malk-5.gif" alt="Animation of Malkmus kicking his leg probably while playing Unfair"/>
				</div>
			{/if}

			<div class="tracklist">
				<div class="xaxis-wrap ai-{ai}">
					<p class="album"><em>{a.album}</em></p>
					<div class="xaxis">
						{#each years as year}
							{@const ticktext = (year<2000 && year!=1998) ? year : year==2020? '2022‑3' : year==2010? '2010' : ''}
							<div class="xtick" style="left:{xScale(year)}%;">
								<p>{ticktext}</p>
							</div>
						{/each}
					</div>
				</div>

				<div class="xaxis-lines">
					<div class="xaxis-space"></div>
					<div class="xticklines">
						{#each years as year}
							{#if (year<2000 && year!=1998) || year==2010 || year==2020}
							<div class="xtickline" style="left:{xScale(year)}%;">
							</div>
							{/if}
						{/each}

						<!-- westing -->
						{#if ai==0}
							<p style="left:78%; top:-9%; width:180px; transform:translate(-100%,-100%); text-align:right;">{@html annos[ai][0]}<span class="a-down" style="right:7px; height:62px;"></span></p>

							<p class="a-down" style="left:34%; bottom:5%; transform:translate(0,-100%); width:{desktop ? 295 : 225}px;">{@html annos[ai][1]}</p>
						{/if}

						<!-- slanted -->
						{#if ai==1}
							<p class="a-down" style="left:{xScale(1998)}%; top:51%; width:200px;">{@html annos[ai][0]}</p>
						{/if}

						<!-- crooked -->
						{#if ai==2}
							<p class="a-top" style="left:{xScale(1996)}%; top:57%; width:200px;">{@html annos[ai][0]}</p>
						{/if}

						<!-- wowee -->
						{#if ai==3}
							<p style="text-align:right; left:2px; top:18%; width:130px;">{@html annos[ai][0]}</p>

							<p class="a-right-bottom" style="left:2px; bottom:0; width:130px;">{@html annos[ai][1]}</p>
						{/if}

						<!-- brighten -->
						{#if ai==4}
							<p class="a-right" style="left:2px; top:-1px; width:150px;">{@html annos[ai][0]}</p>

							<p class="a-down-right" style="text-align:right; left:2px; bottom:40.5%; transform:translate(0,-100%); width:165px;">{@html annos[ai][1]}</p>

							<p class="a-right" style="left:2%; top:66%; width:160px;">{@html annos[ai][2]}</p>
						{/if}

						<!-- terror -->
						{#if ai==5}
							<p style="text-align:right; left:2px; top:32%; width:160px;">{@html annos[ai][0]}</p>
						{/if}
					</div>
				</div>

				{#each tracks as track,i}
					{@const ydata = bySong.get(track.song)}
					{@const l1990 = ydata.find((f)=>{return f.l}).y }
					{#if (ai==0 && i==0) || (i>0 && track.comp && !tracks[i-1].comp)}
					<div class="track separator"><p>B‑SIDES↓</p></div>
					{/if}
					
					<div class="timeline-wrap">

						<div class="track">
							<p>{track.song}</p>
						</div>

						<div class="timeline">
							<div class="line" style="left:{xScale(ydata[0].y)}%; width:{xScale(l1990) - xScale(ydata[0].y)}%;"></div>

							{#if ydata.find((f)=>{return f.y==2010}) }
								<div class="line d2010s" style="left:{xScale(l1990)}%; width:{xScale(2010) - xScale(l1990)}%;"></div>

								{#if ydata.find((f)=>{return f.y==2020}) }
									<div class="line d2020s" style="left:{xScale(2010)}%; width:{xScale(2020) - xScale(2010)}%;"></div>
								{/if}
							{:else if ydata.find((f)=>{return f.y==2020}) }
								<div class="line d2020s" style="left:{xScale(l1990)}%; width:{xScale(2020) - xScale(l1990)}%;"></div>
							{/if}

							{#each ydata as y}
								{@const yvar = y.y==2020 ? '2020s' : y.y == 2010 ? '2010s' : '1990s'}
								<div class="c {y.c>=20 ? `cloud` : ''} {y.y==2020 ? 'd2020s' : y.y==2010 ? 'd2010s' : ''}" style="
								left:{xScale(y.y)}%;
								width:{rScale(y.c)*2}px;
								height:{rScale(y.c)*2}px;
								"></div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>




<style>
	.wrap {
		max-width: 895px;
		margin-left: auto;
		margin-right: auto;

/*		overflow:hidden;*/
	}

	.key-wrap {
		display:flex;
		align-items: flex-end;
		font-family:var(--font-sans);
		font-size:18px;
		max-width: 230px;
		margin: 10px auto 100px auto;
	}

	.key-wrap .key {
		display:flex;
		flex-wrap:wrap;
		justify-content: center;
		margin: 0 5px;
	}

	.key-wrap .key p {
		margin-top: 3px;
		width:100%;
		text-align:center;
	}

	.key-wrap p {
		margin: 0;
	}

	.key-wrap div.c {
		border-radius:50%;
		border: 1px solid black;
		background-color:#ccc;
	}

	.key-wrap div.c.cloud {
		background-image:url('images/cloud.svg');
		background-repeat:no-repeat;
		background-position:center;
		background-size:90%;
	}
	:global([data-mode="prod"] .timeline-big-wrap .key-wrap div.c.cloud) { background-image:url('/sandbox/pavement-1933-2023/images/cloud.svg');}

	.xaxis-wrap {
		display:flex;
	}

	.xaxis, .timeline, .xticklines {
		width: calc(100% - 215px);
		max-width: var(--body-width);
	}

	.xaxis {
		position:relative;
	}

	.track, p.album, .xaxis-space {
		width: 200px;
		margin-right: 15px;
	}

	.xtick {
		position:absolute;
	}

	.xtick p {
		position:absolute;
		top:8px;
		left:7px;
		transform-origin: top left;
		transform:rotate(300deg);
		font-family: var(--font-sans);
		margin:0;
		font-size:12px;
		white-space: nowrap;
	}

	.xaxis-wrap.ai-0 .xtick p {top:19px;}

	.xaxis-lines {
		display:flex;
		position:absolute;
		width:100%;
		bottom:0;
		height:calc(100% - 25px);
	}

	.xticklines {
		position:relative;
		height:100%;
	}

	.xtickline {
		position:absolute;
		height:100%;
		border-left:1px solid #ccc;
	}

	.xticklines p {
		position:absolute;
		z-index:3;
		background:var(--bg);
		margin:0;

/*		outline:1px solid red;*/
	}

	.xticklines p, p.anno {
		font-family:var(--font-sans);
		font-size:16px;
		line-height:18px;
		text-align:left;
	}

	.anno-wrap {
		margin-bottom:20px
	}

	p.anno {
		margin: 0 auto 5px auto;
		max-width:var(--body-width);
		font-size:16px;
		line-height:20px;
	}

	:global(p.anno span) {
		font-weight:700;
	}

	.xticklines p span {
		position:absolute;
		border-left:1.5px solid black;
		top:100%;
	}

	.xticklines p span:after {
		content:"↓";
		position:absolute;
		top:100%;
		left:-0.6px;
		transform:translate(-50%,-5px);
	}

	.xticklines p.a-top:after {
		content:"↑";
		position:absolute;
		top:0;
		transform:translate(0,-100%);
		left:3px;
	}

	.xticklines p.a-down:after {
		content:"↓";
		position:absolute;
		top:100%;
		left:3px;
	}

	.xticklines p.a-down-right:after {
		content:"↓";
		position:absolute;
		top:100%;
		right:3px;
	}

	.xticklines p.a-right, p.a-right-bottom {
		text-align:right;
	}

	.xticklines p.a-right:after {
		content:"→";
		position:absolute;
		top:0%;
		left:calc(100% + 3px);
	}

	.xticklines p.a-right-bottom:after {
		content:"→";
		position:absolute;
		bottom:0;
		left:calc(100% + 3px);
	}

	.album-wrap {
		margin-bottom:30px;
		text-align: right;
		position:relative;
	}

	.tracklist {
		position:relative;
	}

	p.album {
		font-family: var(--font-sans);
		font-weight:700;
		margin: 0;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		font-size:18px;
	}

	p.album.mobile {
		width:auto;
		text-align:left;
		margin-bottom:5px;
		max-width:var(--body-width);
		margin-left:auto;
		margin-right:auto;
	}

	.track.separator {
		margin-top: 8px;
		position:relative;
	}

	.track.separator:before {
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
		background-position:-16% 0;
	}
	:global([data-mode="prod"] .timeline-big-wrap .track.separator:before) { background-image:url('/sandbox/pavement-1933-2023/images/border-h.png');}

	.track.separator p {
		position:absolute;
		border-top: none;
		top: 0;
		left: 0;
	}

	.timeline-wrap {
		display: flex;
		justify-content: flex-start;
		max-width:695px;
		margin-bottom:5px;
	}

	.timeline-wrap:hover {
		background-color:#fff;
	}

	.track {
		display: flex;
		justify-content: flex-end;
	}

	.track p {
		margin: 0 0 2px 0;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		max-width: calc(100% - 65px);
		font-size:16px;
	}

	.timeline {
		position: relative;		
	}

	.timeline div.line {
		position: absolute;
		top:50%;
		transform:translate(0,-50%);
		border-top:3px solid var(--d1990s);
	}

	.timeline div.line.d2020s {
		border-top:3px solid var(--d2020s);
	}

	.timeline div.line.d2010s {
		border-top:3px solid var(--d2010s);
	}

	.timeline div.c {
		position: absolute;
		border-radius:50%;
		top:50%;
		transform:translate(-50%,-50%);
		background-color:var(--d1990s);
		border: 1px solid #000;
/*		opacity:0.7;*/

		background-repeat:no-repeat;
		background-position:center;
		background-size:90%;
	}

	.timeline div.c.cloud { background-image:url('images/cloud-1990s.svg');}
	.timeline div.c.cloud.d2020s { background-image:url('images/cloud-2020s.svg');}
	.timeline div.c.cloud.d2010s { background-image:url('images/cloud-2010s.svg');}

	:global([data-mode="prod"] .timeline-big-wrap .timeline div.c.cloud) { background-image:url('/sandbox/pavement-1933-2023/images/cloud-1990s.svg');}
	:global([data-mode="prod"] .timeline-big-wrap .timeline div.c.cloud.d2020s) { background-image:url('/sandbox/pavement-1933-2023/images/cloud-2020s.svg');}
	:global([data-mode="prod"] .timeline-big-wrap .timeline div.c.cloud.d2010s) { background-image:url('/sandbox/pavement-1933-2023/images/cloud-2010s.svg');}

	.timeline div.c.d2020s {background-color: var(--d2020s);}
	.timeline div.c.d2010s {background-color: var(--d2010s);}

	.malkdiv {
		max-width:var(--malk-width);
		right:-11%;
		top:29%;
		position:absolute;
	}

	img.malk {
		width:100%;
		mix-blend-mode: multiply;
	}


	@media (max-width:910px) {

		.wrap {
			margin-top:50px;
		}

		.key-wrap {
			margin: 10px auto 20px auto;
		}

		.xticklines p {
			display:none;
		}

		.xaxis-lines {
			height:calc(100% - 20px);
		}

		.xtick p {
			left:-7px;
		}

		p.album {
			font-size:18px;
		}

		.track, p.album, .xaxis-space {
			width: 130px;
			margin-right: 10px;
		}

		.xaxis, .timeline, .xticklines {
			width: calc(100% - 140px);
		}

		.track p {
			font-size:13px;
			max-width: calc(100% - 52px);
		}

		.tracklist p.album {
			opacity:0;
		}
	}

	@media (max-width:870px) {
		.malkdiv {
			display:none;
		}
	}

	@media (max-width:480px) {
		.wrap {
			margin-top:30px;
		}
	}
	

</style>
