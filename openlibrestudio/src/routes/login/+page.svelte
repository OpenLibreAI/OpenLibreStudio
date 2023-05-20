<script>
    import Authenticate from "../../components/Authenticate.svelte";
</script>

<Authenticate />

<div class="container w-full max-w-xs mx-auto flex justify-center items-center">
	<form>
		<div class="space-y-10 text-center flex flex-col items-center">
			<h2 class="h2 pt-4">Please Login</h2>

			<div class="flex justify-center space-x-2">
				<input class="input variant-form-material" type="text" placeholder="Email" />
			</div>
			<div class="flex justify-center space-x-2">
				<input class="input variant-form-material" type="text" placeholder="Password" />
			</div>
			<a class="btn variant-filled" href="#" target="_blank" rel="noreferrer"> Login </a>

			<div class="space-y-2" />
		</div>
	</form>
	
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite, glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
