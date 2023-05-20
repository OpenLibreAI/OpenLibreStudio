<script>
    import Authenticate from "../../components/Authenticate.svelte";
</script>

<Authenticate />

<div id="authContainer" class="container h-full mx-auto flex justify-center items-center">
	<form>
		<div class="space-y-10 text-center flex flex-col items-center">
			<h2 class="h2 pt-4">Please Login</h2>

            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" placeholder="Enter your email">
            <input id="email-address" name="password" type="password" required class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" placeholder="Enter your email">
			<a class="btn variant-filled" href="#" target="_blank" rel="noreferrer"> Login </a>

			<div class="space-y-2" />
		</div>
	</form>
	
</div>

<style lang="postcss">
    #authContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        padding: 24px
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 400px;
        max-width: 100%;
        margin: 0 auto;
    }
</style>
