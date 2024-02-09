<template>
	<div>
		<div
			class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom"
		>
			<a
				href="/"
				class="d-flex align-items-center text-dark text-decoration-none"
			>
				<h1>Sammi</h1>
			</a>

			<nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
				<RouterLink
					:to="{ name: 'login' }"
					class="me-3 py-2 text-dark text-decoration-none"
					>Login</RouterLink
				>

				<RouterLink
					class="me-3 py-2 text-dark text-decoration-none"
					:to="{ name: 'register' }"
					>Register</RouterLink
				>
			</nav>
		</div>
	</div>
</template>

<script setup></script>

<style scoped></style>
