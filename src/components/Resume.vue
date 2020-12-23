<template>
	<div class="bg-white flex">
		<div class="m-auto">
            <div class="flex p-8 px-64">
                <div class="">
                    <span class="font-bold text-xl border-b-4 border-gray-400">Experience</span>
                </div>
                <div class="pl-6">
                    <Work
                    company="Superior Glove"
                    role="Software Developer (.NET) - Co-op"
                    time="May. 2020 – Aug. 2020" 
                    :duties="['Took the lead on creating a custom MRP solution in C# using WPF and other .NET libraries and frameworks.',
                    'Wrote complex SQL procedures with Microsoft SQL Server.',
                    'Managed help desk tickets using Jira.',
                    'Worked in a corporate environment for a fast-moving organization requiring agile thinking and the ability to adapt to a multitude of scenarios.']" />
                </div>
            </div>
        </div>
	</div>
</template>

<script>
    import Work from "./Work";

	export default {
		name: "Resume",
        components: {
            Work
        },
		data() {
			return {};
		},
	};
</script>

<style></style>
