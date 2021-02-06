<template>
	<div class="flex mb-16 sm:flex-col">
		<div class="w-1/3 mr-6 md:w-1/2 md:mb-2 sm:w-full">
			<img v-if="image" class="shadow-lg" :src="getProjectImage()" alt="" />
			<div v-else class="flex">
				<span class="m-auto md:mb-16">No Image Yet.</span>
			</div>
		</div>
		<div class="flex flex-col w-2/3 md:w-1/2 sm:w-full">
			<div class="flex items-center justify-between">
				<span class="text-2xl font-bold mb-3">{{ name }}</span>
				<div class="flex space-x-3">
					<a v-if="devpost" :href="devpost" class="text-2xl">
						<img src="@/assets/images/devpost.png" class="h-6 align-middle" />
					</a>
					<a v-if="website" :href="website" class="text-2xl transition duration-400 ease-in-out hover:text-blue-600">
						<i class="fas fa-link align-top"></i>
					</a>
					<a :href="getGithubLink()" class="text-2xl transition duration-400 ease-in-out hover:text-blue-600">
						<i class="fab fa-github align-top"></i>
					</a>
				</div>
			</div>
			<p class="text-justify mb-3">{{ desc }}</p>
			<div class="flex justify-between sm:flex-col sm:justify-start">
				<div class="flex space-x-3 text-3xl">
					<div v-for="(tech, index) in stack" :key="index">
						<span :class="`icon-${tech.name}`">
							<span v-for="index in tech.paths" :key="index" :class="`path${index}`"></span>
						</span>
					</div>
				</div>
				<div class="flex space-x-3 text-3xl">
					<div v-for="(host, index) in deploy" :key="index">
						<span :class="`icon-${host.name}`">
							<span v-for="index in host.paths" :key="index" :class="`path${index}`"></span>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Project",
		data() {
			return {};
		},
		props: {
			name: String,
			desc: String,
            github_link: String,
            website: String,
			stack: Array,
			deploy: Array,
			devpost: String,
			image: String,
		},
		methods: {
			getGithubLink() {
				return `https://github.com/alexbmoreira/${this.github_link}`;
			},
			getProjectImage() {
				return require(`@/assets/images/project_images/${this.image}`);
			},
		},
	};
</script>

<style></style>
