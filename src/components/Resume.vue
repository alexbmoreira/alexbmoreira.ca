<template>
	<div class="bg-white flex">
		<div class="m-auto">
            <div class="flex p-8 px-64 xl:px-24 md:px-12 flex-col sm:px-6">
                <div class="mx-auto mb-8">
                    <span class="font-bold text-3xl border-b-2 border-gray-400">Experience</span>
                </div>
                <div class="pl-6">
                    <Work
                    company="Superior Glove"
                    role="Software Developer (.NET)"
                    time="May. 2020 – Aug. 2020" 
                    image="superior_glove.png"
                    :duties="['Took the lead on creating a custom MRP solution in C# using WPF and other .NET libraries and frameworks.',
                    'Wrote complex SQL procedures with Microsoft SQL Server.',
                    'Managed help desk tickets using Jira.',
                    'Worked in a corporate environment for a fast-moving organization requiring agile thinking and the ability to adapt to a multitude of scenarios.']" />
                    <Work
                    company="Welbilt Inc."
                    role="Buyer / Planner Intern"
                    time="May. 2019 – Aug. 2019" 
                    image="welbilt.png"
                    :duties="['Worked in QAD to manage supplier schedules and set firm days and lead times for parts.',
                    'Communicated with suppliers about expediting orders and advising on past-dues, as well as sending out steel and cardboard consignment releases.',
                    'Used QAD and Excel to schedule welding and production lines.']" />
                    <Work
                    company="kubik"
                    role="Warehouse Associate"
                    time="May. 2018 – Jul. 2018"
                    image="kubik.png"
                    :duties="['Worked with a team constructing displays for retail environments, trade shows, and exhibits.',
                    'Assisted in fulfilling the visions of clients such as Best Buy Canada, Mars Wrigley, and the Royal Alberta Museum.',
                    'Gained valuable experience in a professional work environment, where teamwork was a top focus.']" />
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
