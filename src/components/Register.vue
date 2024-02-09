<template>
	<div class="text-center">
		<main class="form-signin w-50 m-auto">
			<form>
				<h1>Sammi</h1>
				<br />
				<h2 class="h3 mb-3 fw-normal">Please sign in</h2>

				<div class="form-floating mb-3">
					<input
						type="email"
						class="form-control"
						id="floatingInput"
						placeholder="name@example.com"
					/>
					<label for="floatingInput">Name</label>
				</div>

				<div class="form-floating">
					<input
						type="email"
						class="form-control"
						id="floatingInput"
						placeholder="Your name"
					/>
					<label for="floatingInput">Email address</label>
				</div>
				<div class="form-floating mt-3">
					<input
						type="password"
						class="form-control"
						id="floatingPassword"
						placeholder="Password"
					/>
					<label for="floatingPassword">Password</label>
				</div>

				<div class="checkbox my-3"></div>
				<button class="w-100 btn btn-lg btn-primary" type="submit">
					Sign in
				</button>
			</form>
		</main>
	</div>
</template>

<script setup></script>

<style scoped></style>
