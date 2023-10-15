<script>
	import { base } from '$app/paths';
	import raw from '$lib/data/d2020s-orders.json';
	import setlists from '$lib/data/d2020s-setlists.json';
	import {select, selectAll} from 'd3-selection';
	import {scaleLinear, scaleBand} from 'd3-scale';
	import {line, curveBumpX} from 'd3-shape';
	import {timeParse, timeFormat} from 'd3-time-format';

	const parseTime = timeParse("%Y-%m-%d");
	const formatTime = timeFormat("%-m/%-d");

	// multinights
	const runs = {
		'2023-09-11': [72,'Brooklyn',4],
		'2023-07-27': [68,'Reykjavik',3],
		'2023-02-15': [51,'Tokyo',2],
		'2022-11-10': [49,'Dublin',2],
		'2022-10-22': [36,'London',4],
		'2022-10-10': [29,'Austin',3],
		'2022-10-08': [27,'Atlanta',2],
		'2022-09-30': [21,'Brooklyn',4],
		'2022-09-26': [18,'Toronto',2],
		'2022-09-22': [15,'Chicago',2],
		'2022-09-12': [7,'San Francisco',3],
		'2022-09-08': [4,'Los Angeles',3]
	}

	const mults = [
		{
			'hed':'Openers',
			'sets': [
				{
					'blurb': "<span>“Our Singer”</span> opened 10 shows.",
					'img':"oursinger",
				},
				{
					'blurb': "<span>“Grounded”</span> opened 24 shows and was also played throughout the set.",
					'img':"grounded",
				},
			]
		},
		{
			'hed':'Closers',
			'sets': [
				{
					'blurb': "<span>“Fillmore Jive”</span> was a consistent closer, always played at the end of the first set or the encore, closing 13 shows.",
					'img':"fillmorejive",
				},
				{
					'blurb': "<span>“Witchi Tai To,”</span> a Jim Pepper cover, is the only new song the band played. It closed 13 shows.",
					'img':"witchitaito",
				},
				{
					'blurb': "<span>“Fin”</span> closed 7 shows, but also opened 5 shows.",
					'img':"fin",
				},
			]
		},
		{
			'hed':'Encores',
			'sets': [
				{
					'blurb': "<span>“Range Life”</span> was the most-played song this reunion. It was played at all but 3 shows, usually at the end of the first set or during the encore.",
					'img':"rangelife",
				},
				{
					'blurb': "<span>“Cut Your Hair”</span> was the second-most played song, often during the encore, but also throughout the set, including 5 as the opener.",
					'img':"cutyourhair",
				},
				{
					'blurb': "<span>“Stop Breathin”</span> was played in 19 encores.",
					'img':"stopbreathin",
				},
			]
		},
		{
			'hed':'Rarities',
			'sets': [
				{
					'blurb': "<span>“Gangsters & Pranksters,”</span> a <em>Wowee</em> b‑side from the <em>Pacific Trim</em> EP, was played for a few months toward the beginning of the reunion.",
					'img':"gangsters&pranksters",
				},
				{
					'blurb': "<span>“Conduit for Sale!”</span> was not played until the later months.",
					'img':"conduitforsale",
				},
				{
					'blurb': "<span>“Loretta’s Scars,”</span> along with several b‑sides from the <em>Westing</em> comp, were only played during the last few shows, including during the band’s four‑night run at Brooklyn Steel.",
					'img':"lorettasscars",
				},
			]
		}
	]



	const maxShows = 77;
	const maxSongs = 30;

	const breakpoint = 720;
	$: innerWidth = 375; // bound to window_w
	$: w = 375; // bound to client
	// $: {console.log(w)}

	$: desktop = innerWidth > breakpoint

	$: radius = desktop ? Math.floor(w/maxShows/2) : Math.floor(w/maxSongs/2);
	$: margin = {
		top: desktop ? 0 : 10,
		bottom: desktop ? 0 : 10,
		left: desktop ? 10 : 0,
		right: desktop ? 10 : 0
	}

	$: h = desktop ? (radius*2+0.5) * maxSongs : (radius*2+0.5) * maxShows;

	$: width = w - margin.left - margin.right;
	$: height = h - margin.top - margin.bottom;

	$: xDomainMax = desktop ? maxShows-1 : maxSongs+1;
	$: yDomainMax = desktop ? maxSongs+1 : maxShows-1;

	$: xScale = scaleLinear()
		.domain([0,xDomainMax])
		.range([0,width])

	$: yScale = scaleLinear()
		.domain([0,yDomainMax])
		.range([0,height])

	$: makeLine = line()
        .defined(function(d) { return d[0] > 0; })
        .x(function(d,i) { return desktop ? xScale(i) : xScale(d[0]) })
        .y(function(d,i) { return desktop ? yScale(d[0]) : yScale(i) })
        .curve(curveBumpX)

    $: selectedSong = "Stereo"
    $: highlightedSong = "Stereo"
    $: highlightedShow = null;

    $: freezeTimeout = null;
    $: freezeHover = false;

    function handleMouseEnter(e,song,i) {
    	if (song!=highlightedSong && !freezeHover) {
    		select(e.target).classed('hover',true)
			select(`.g-song[data-song="${song}"]`).classed('highlight',true)
			highlightedSong = song
			highlightedShow = i
    	}
    }

    function handleMouseLeave(e,song,i) {
    	if (!freezeHover) {
    		selectAll('.g-song').classed('highlight',false)
    		selectAll('.c').classed('hover',false)
    		highlightedShow = null
    		reset();
    	}
    }

    function handleSelected() {
    	selectedSong = highlightedSong;
    	freeze();
    }

    function reset() {
    	highlightedSong = selectedSong;
    }

    function resetFreeze() {
    	if (freezeHover) {
    		freezeHover = false;
    	}
    }

    function freeze() {
    	if (!freezeHover) {
    		freezeHover = true;

    		if (freezeTimeout) {
    			clearTimeout(freezeTimeout)
    		}

    		freezeTimeout = setTimeout(resetFreeze,500);
    	}
    }

</script>

<svelte:window bind:innerWidth/>
<div class="wrap setlists-big-wrap">
	<div class="bgcontent">
		<div class="select-wrap">
			<select bind:value={highlightedSong} on:change={() => handleSelected()}>
				{#each raw as d}
					<option value={d.song}>
						{d.song}{d.song=="Witchi Tai To" ? " (cover)" : ""}
					</option>
				{/each}
			</select>
		</div>
		<p class="prompt"><span>☟</span> {desktop ? "Hover" : "Tap"} on the grid to see the songs on each night</p>


		<div class="big-wrap">

			<div class="dates-wrap">
				{#each setlists as d,i}
					{#if !runs[d.eventDate] || d.venue=="3TEN Austin City Limits Live"}
						<p class="sdate {i==0 ? 'first' : i==setlists.length-1 ? 'last' : ''} {highlightedShow==i ? 'highlight' : ''}" style="
						left:{desktop ? xScale(i) : 0}px;
						top:{desktop? 'auto' : `${yScale(i)+radius/2}px`};
						bottom:{desktop ? '-8px' : 'auto'}
						">{d.city} {formatTime(parseTime(d.eventDate))}</p>
					{/if}
				{/each}
				
				{#each Object.keys(runs) as d}
					<p class="cdate {highlightedShow&&setlists[highlightedShow].eventDate==d && setlists[highlightedShow].venue!='3TEN Austin City Limits Live' ? 'highlight' : ''}" style="
					left:{desktop ? xScale(runs[d][0]) : 0}px;
					top:{desktop ? 'auto' : `${yScale(runs[d][0])+radius/2}px`};
					bottom:{desktop ? '-8px' : 'auto'}
					">{runs[d][1]} {formatTime(parseTime(d))}</p>
					
					<div class="runline" style="
						width:{desktop ? `${radius*2*runs[d][2]}px` : '5px'};
						height:{desktop ? '5px' : `${radius*2*runs[d][2]}px`};
						left:{desktop ? `${xScale(runs[d][0])+radius/2}px` : 'auto'};
						top:{desktop ? 'auto' : `${yScale(runs[d][0])+radius}px`};
					"></div>
				{/each}
			</div>

			<div class="chart-wrap" bind:clientWidth={w} >
				<svg width={width + margin.left + margin.right} height={height + margin.top + margin.bottom} >
					<g transform="translate({margin.left},{margin.top})">
						{#each raw as d}
							<g class="g-song {d.song==highlightedSong ? 'highlight' : ''}" data-song="{d.song}" >
								<path
									d={makeLine(d.orders)}
								/>
							</g>
						{/each}
					</g>
				</svg>

				<div class="circle-wrap" style="
					width:{width + margin.left + margin.right}px;
					height:{height + margin.top + margin.bottom}px;
					transform:translate({margin.left}px,{margin.top}px)">
					{#each raw as d}
						<div class="g-song {d.song==highlightedSong ? 'highlight' : ''}" data-song="{d.song}" >
							{#each d.orders as o,i}
								{#if o[0]>0}
									<div
										class="c {o[1]==2 ? 's2' : o[1]==3 ? 's3' : ''}"
										style="
										left:{ desktop ? xScale(i) : xScale(o[0]) }px;
										top:{ desktop ? yScale(o[0]) : yScale(i)}px;
										width:{radius*2}px;
										height:{radius*2}px;
										"

										on:mouseenter={e => handleMouseEnter(e,d.song,i)}
										on:mouseleave={e => handleMouseLeave(e,d.song,i)}
									></div>
								{/if}
							{/each}
						</div>
					{/each}
				</div>

				<div class="label-wrap" >
					<p style="
						width:{desktop ? 'auto' : '40px'};
						left:{desktop ? 0 : xScale(0)}px;
						top:{desktop ? yScale(0)+radius : 0}px;
						transform:{desktop ? `translate(-100%,0)` : `translate(calc(-50% + ${radius*2}px),calc(-100% - 16px))`};
						text-align:{desktop ? 'right' : 'center'};
						">
						Opener
						<span style="
						position:{desktop ? 'static' : 'absolute'};
						top:{desktop? 'auto' : '100%'};
						left:{desktop ? 'auto' : '50%'};
						transform:{desktop? 'none' : 'translate(-50%,0)'}">
						{desktop? '→' : '↓'}
						</span>
					</p>
					<p style="
						width:{desktop ? 'auto' : '40px'};
						left:{desktop ? 0 : xScale(xDomainMax-1)}px;
						top:{desktop ? 'auto' : 0};
						bottom:{desktop ? `${radius}px` : 'auto'};
						transform:{desktop ? `translate(-100%,0)` : `translate(-50%,calc(-100% - 16px))`};
						text-align:{desktop ? 'right' : 'center'};
						">
						Closer
						<span style="
						position:{desktop ? 'static' : 'absolute'};
						top:{desktop? 'auto' : '100%'};
						left:{desktop ? 'auto' : '50%'};
						transform:{desktop? 'none' : 'translate(-50%,0)'}">
						{desktop? '→' : '↓'}
						</span>
					</p>
					<p class="set">Set</p>
					<p class="set encore">Encore</p>
				</div>
			</div>
		</div>

	    <p class="source">Note: Shows on May 23, 2022 and Sept. 12, 2023 had a second encore. They are shown in green.</p>

	    <div class="mults-wrap">
	    	{#each mults as d}
	    		<div class="mgroup">
	    			<p class="mhed">{d.hed}</p>
	    			<div class="msets">
	    				{#each d.sets as s}
	    					<div>
	    						<div class="blurb">
	    							<p>{@html s.blurb}</p>
	    						</div>
	    						{#if desktop}
	    							<img src="{base}/images/set-{s.img}.png" alt="Graphic of dots showing where a certain song was during setlists throughout the shows"/>
	    						{:else}
	    							<img style="max-width:200px;" src="{base}/images/set-m-{s.img}.png" alt="Graphic of dots showing where a certain song was during setlists throughout the shows"/>
	    						{/if}
	    					</div>
	    				{/each}
	    			</div>
	    		</div>
	    	{/each}
	    	<div class="malkdiv">
	    		<div class="border b-left"></div>
	    		<div class="border b-right"></div>
	    		<div class="border b-top"></div>
	    		<div class="border b-bottom"></div>
	    		<img class="malk" src="{base}/images/malk-2.gif" alt="Animation of Malkmus running in place"/>
	    	</div>
	    </div>
	</div>
</div>






<style>
	@media (min-width:481px) {
		.select-wrap select {
		    background-color: transparent;
		    background-image:url('images/highlight-d2020s.png');
		    background-repeat:no-repeat;
			background-size:contain;
		}
		:global([data-mode="prod"] .setlists-big-wrap .select-wrap select) {background-image:url('/sandbox/pavement-1933-2023/images/highlight-d2020s.png')}
	}

	.wrap {
		max-width: calc(90px + var(--widest));
		width:100%;
		margin-left:auto;
		margin-right:auto;
	
/*		outline:1px solid black;*/
	}

	.bgcontent {
		max-width:var(--widest);
		width: calc(100% - 90px);
		margin-left:auto;
		margin-right:auto;
	}

	.select-wrap {
		text-align:center;
	}

	.select-wrap select {
		font-size: 18px;
	    font-family: var(--font-sans);
	    font-weight:700;
	    color:black;
	    border: none;
	    border-bottom: 1px solid #000;
	    width:100%;
	    max-width:var(--body-width);
	    padding:3px 5px;
	    position:relative;
	}

	p.prompt {
		font-family: var(--font-sans);
		margin: 0;
		font-size:16px;
		text-align:center;
	}

	p.prompt span {
		font-size:20px;
	}

	.dates-wrap {
		position:relative;
		height: 75px;
	}

	.dates-wrap p {
		position:absolute;
		font-family:var(--font-condensed);
		font-size:12px;
		line-height:12px;
		/*bottom:-8px;*/
		margin:0;
		transform-origin: top left;
		transform:translate(2px,0) rotate(300deg);
		white-space: nowrap;
		background-color: var(--bg);
		background-repeat:no-repeat;
		background-position:center;
		background-size:100%;
	}

	.dates-wrap p.sdate {
		opacity:0;
/*		background-color:var(--d2020s);*/
		background-image:url('images/highlight-d2020s.png');
	}
	:global([data-mode="prod"] .setlists-big-wrap .dates-wrap p.sdate) {background-image:url('/sandbox/pavement-1933-2023/images/highlight-d2020s.png')}


	.dates-wrap p.sdate.highlight {
		opacity:1;
	}

	.dates-wrap p.cdate {
		background-color: var(--bg);
	}

	.dates-wrap p.cdate.highlight {
		background-image:url('images/highlight-d2020s.png');
	}
	:global([data-mode="prod"] .setlists-big-wrap .dates-wrap p.cdate.highlight) {background-image:url('/sandbox/pavement-1933-2023/images/highlight-d2020s.png')}


	.dates-wrap .runline {
		position:absolute;
		border-top:1px solid black;
		border-left:1px solid black;
		border-right:1px solid black;
		height:5px;
		bottom:-10px;
	}

	.dates-wrap .runline:before {
		content:"";
		position:absolute;
		width:100%;
		height:5px;
		top:0;
		left:0;
		background-image:url('images/border-h.png');
		background-repeat: repeat-x;
		background-size:cover;
		transform:translate(0,-80%);
		background-position:13% 0;
	}
	:global([data-mode="prod"] .setlists-big-wrap .dates-wrap .runline:before) {background-image:url('/sandbox/pavement-1933-2023/images/border-h.png')}


	.chart-wrap {
		position:relative;
	}

	.label-wrap {
		position:absolute;
		width:100%;
		height:100%;
		left:0;
		top:0;
		pointer-events: none;
	}

	.label-wrap p {
		position:absolute;
		margin:0;
		font-family:var(--font-condensed);
		font-size:12px;
		background-color: var(--bg);
	}

	.label-wrap p.set {
		transform:rotate(90deg);
		transform-origin:top left;
		left: 0;
		top:35%;
		text-transform:uppercase;
		color:var(--d2020s);
		font-weight:700;
		letter-spacing: 2px;
		font-size:14px;
	}

	.label-wrap p.set.encore {
		top:76%;
		color:var(--d2010s);
	}

	g.g-song path {
		fill:none;
		/*stroke:var(--d2020s);*/
		stroke:var(--d2020s);
		stroke-width:2;
		stroke-linecap: round;
		opacity:0;
	}

	.circle-wrap {
		position:absolute;
		width:100%;
		height:100%;
		top:0;
		left:0;
	}

	.g-song .c {
		position:absolute;
		border-radius:50%;
		transform:translate(-50%,-50%);
		background-color: var(--d2020s);
		opacity:0.4;
	}

	.g-song .c.s2 {
		background-color: var(--d2010s-light);
		opacity:0.35;
	}

	.g-song .c.s3 {
		background-color: var(--d1990s);
	}

	:global(g.g-song.highlight path) {
		opacity:1 !important;
	}

	:global(.g-song.highlight .c) {
		opacity:1 !important;
	}

	:global(.g-song.highlight .c:after) {
		content:'';
		position:absolute;
		left:50%;
		top:50%;
		width:200%;
		height:200%;
		transform: translate(-50%,-50%);
		background-image:url('images/star-yellow.png');
		background-repeat:no-repeat;
		background-position:center;
		background-size:100%;
	}
	:global([data-mode="prod"] .g-song.highlight .c:after) {background-image:url('/sandbox/pavement-1933-2023/images/star-yellow.png')}


	:global(.g-song.highlight .c.s2:after, .g-song.highlight .c.s3:after) {
		background-image:url('images/star-blue.png');
	}
	:global([data-mode="prod"] .g-song.highlight .c.s2:after, [data-mode="prod"] .g-song.highlight .c.s3:after) {background-image:url('/sandbox/pavement-1933-2023/images/star-blue.png')}

	:global(.g-song.highlight .c.hover) {
		border:2px solid black;
	}

	.mults-wrap {
		margin-top:20px;
		position:relative;
	}

	.mgroup {
		margin-bottom:20px;
	}

	.mgroup .mhed {
		font-family:var(--font-sans);
		font-weight:700;
		margin:0 auto 10px auto;
		font-size:18px;
		max-width:var(--body-width);
	}

	.msets {
		/*max-width:var(--body-width);*/
		margin: 0 auto;
	}

	.msets > div {
		margin-bottom: 15px;
		display:flex;
		justify-content: flex-start;
	}

	.msets .blurb {
		width: calc((100% - var(--body-width))/2);
		display:flex;
		justify-content: flex-end;
	}

	.msets p {
		font-size:16px;
		line-height:20px;
		font-family:var(--font-sans);
		max-width:190px;
		width:100%;
		text-align:right;
		margin:0 15px 0 0;
	}

	:global(.msets p span) {
		font-weight:700;
	}

	.msets img {
		width:100%;
		height:100%;
		display:inline;
		max-width:var(--body-width);
		mix-blend-mode: multiply;
	}

	.malkdiv {
		max-width:var(--malk-width);
		position:absolute;
		right:0;
		top:40%;
	}

	img.malk {
		width:100%;
		mix-blend-mode: multiply;
	}

	@media (max-width:1180px) {
		.malkdiv {
			display:none;
		}
	}

	@media (max-width:720px) {
		p.prompt {
			font-size:14px;
		}

		p.prompt span {
			font-size:18px;
		}

		.dates-wrap {
			height: 100%;
			width:80px;
		}

		.dates-wrap p {
/*			position:absolute;*/
			transform:none;
			text-align:right;
			left:auto;
			right:0;
		}

		.dates-wrap p.cdate {
			opacity:1;
		}

		.dates-wrap .runline {
			opacity:1;
			border-top:1px solid black;
			border-left:1px solid black;
			border-bottom:1px solid black;
			border-right:none;
			height:auto;
			bottom:auto;
			right:-9px;
		}

		.dates-wrap .runline:before {
			content:"";
			position:absolute;
			width:6px;
			height:100%;
			top:0;
			left:0;
			background-image:url('images/border-v.png');
			background-repeat: repeat-y;
			background-size:cover;
			transform:translate(-80%,0);
			background-position:0 51%;
		}
		:global([data-mode="prod"] .setlists-big-wrap .dates-wrap .runline:before) {background-image:url('/sandbox/pavement-1933-2023/images/border-v.png')}


		.dates-wrap, .chart-wrap {
			margin-top:40px;
		}

		.chart-wrap {
			width:calc(100% - 80px);
		}

		.wrap {
			max-width: var(--widest);
		}

		.bgcontent {
			width:100%;
		}

		.big-wrap {
			display:flex;
		}

		.label-wrap p.set {
			transform:none;
			left: 20%;
			top:0;
			transform:translate(0,-100%);
			letter-spacing: 0px;
		}

		.label-wrap p.set.encore {
			top:0;
			transform:translate(0,-100%);
			left:77%;
		}

		.msets {
			max-width:var(--body-width);
		}

		.msets .blurb {
			width:150px;
			display:block;
			margin-left:15px;
			order:2;
		}

		.msets .blurb p {
			text-align:left;
		}
	}

</style>
