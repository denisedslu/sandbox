<script>
	import { base } from '$app/paths';
</script>

<div class="wrap">
	<div class="bgcontent">
		<div class="pvmt-wrap">
			<img class="pvmt" src="{base}/images/pvmt.png" alt="Stylized lettering spelling PAVEMENT"/>
			<p class="dek year" style="left:10%; bottom:0;">1933</p>
			<div class="dek expand">
				<div class="border b-top"></div>
			</div>
			<p class="dek year" style="right:10%; bottom:0;">2023</p>
		</div>

		<div class="banner-wrap">
			<div class="banner">
				<img style="animation-delay:{Math.random()}s; transform:rotate(10deg);" src="{base}/images/banner-1.png" alt="banner from a Pavement show in 2022" />
			</div>
			<div class="banner">
				<img style="animation-delay:{Math.random()}s; transform:rotate(-20deg);" src="{base}/images/banner-2.png" alt="banner from a Pavement show in 2022" />
			</div>
			<div class="banner">
				<img style="animation-delay:{Math.random()}s; transform:rotate(30deg);" src="{base}/images/banner-3.png" alt="banner from a Pavement show in 2022" />
			</div>
			<div class="banner">
				<img style="animation-delay:{Math.random()}s; transform:rotate(15deg);" src="{base}/images/banner-4.png" alt="banner from a Pavement show in 2022" />
			</div>
			<div class="banner">
				<img style="animation-delay:{Math.random()}s; transform:rotate(-15deg);" src="{base}/images/banner-5.png" alt="banner from a Pavement show in 2022" />
			</div>
		</div>
	</div>
</div>




<style>
	.wrap {
		max-width:980px;
		margin-left:auto;
		margin-right:auto;
		margin-top:0;
	}

	.wrap img {
		width:100%;
	}

	.pvmt {
		margin-bottom: 40px;
	}

	.pvmt-wrap {
		position:relative;
	}

	.dek {
		margin:0 auto;
		position:absolute;
	}

	p.dek {
		font-family:var(--font-body);
		font-size: 40px;
		letter-spacing: 20px;
	}

	.dek.expand {
		left:50%;
		bottom:6%;
		transform:translate(-50%,0);
		width: 40%;
		height: 8px;
	}

	.banner-wrap {
		position:relative;
		display:flex;
		justify-content: space-around;
		max-width:700px;
		margin-left:auto;
		margin-right:auto;
		margin-top:20px;
	}

	.banner {
		max-width:100px;
		position:relative;
		width:20%;
	}

	.banner:after {
		content:"";
		position:absolute;
		top:0;
		left:50%;
		transform:translate(-50%,0);
		width:10px;
		height:10px;
		border-radius:50%;
		background-color:var(--color-text);
		border:1px solid var(--d2020s);
	}

	@keyframes wave {
	  0% {
	    transform:rotate(10deg);
	  }
	  50% {
	    transform:rotate(-10deg);
	  }
	  100% {
	  	transform:rotate(10deg);
	  }
	}

	.banner-wrap img {
		height:100%;
		animation-name: wave;
		animation-duration: 5s;
		animation-timing-function: ease-in;
		animation-iteration-count: infinite;
		transform-origin:top center;
	}

	@media (max-width: 900px) {
		.dek.expand {
			width: 30%;
		}
	}

	@media (max-width: 768px) {
		.wrap {
			height:100vh;
			position:relative;
		}

		.bgcontent {
			position:absolute;
			top:50%;
			left:0;
			transform:translate(0,-50%);
		}

		p.dek {
			font-size:27px;
			letter-spacing: 11px;
		}

		.banner-wrap {
			margin-top:30px;
			width:88%;
		}
	}

	@media (max-width: 480px) {
		.pvmt {
			margin-bottom: 28px;
		}

		p.dek {
			font-size:23px;
			letter-spacing:7px;
		}

		.banner {
			width:19%;
		}
	}

</style>
