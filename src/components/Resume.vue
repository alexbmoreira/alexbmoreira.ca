<template>
  <div id="experience" class="bg-white flex">
    <div class="m-auto">
      <div class="flex flex-col p-8 px-64 xl:px-24 md:px-12 sm:px-6">
        <div class="mx-auto mb-8">
          <span class="font-bold text-3xl border-b-2 border-gray-400"
            >Experience</span
          >
        </div>
        <div class="pl-6 md:px-6 md:mx-auto">
          <Term
            org="Superior Glove"
            role="Software Developer Co-op (.NET)"
            time="May. 2020 – Aug. 2020"
            image="superior_glove.png"
            :notes="[
              'Took the lead on a 4-month project creating a custom MRP solution in C# using WPF and other .NET libraries and frameworks.',
              'Wrote complex SQL procedures with Microsoft SQL Server.',
              'Managed help desk tickets for over 200 employees using Jira.',
              'Engaged in daily scrum meetings with a development team of 7 people to discuss project development.'
            ]"
          />
          <Term
            org="Welbilt Inc."
            role="Buyer/Planner Intern"
            time="May. 2019 – Aug. 2019"
            image="welbilt.png"
            :notes="[
              'Automated supplier scheduling and increased efficiency of the purchasing department by 20%.',
              'Communicated daily with suppliers about expediting orders and advising on past-dues, as well as sending out steel and cardboard consignment releases.',
              'Scheduled welding and production lines using QAD and Excel.'
            ]"
          />
          <Term
            org="kubik"
            role="Warehouse Associate"
            time="May. 2018 – Jul. 2018"
            image="kubik.png"
            :notes="[
              'Worked with a team constructing displays for retail environments, trade shows, and exhibits.',
              'Assisted in fulfilling the visions of clients such as Best Buy Canada, Mars Wrigley, and the Royal Alberta Museum.',
              'Gained valuable experience in a professional work environment, where teamwork was a top focus.'
            ]"
          />
        </div>
        <div id="education" class="mx-auto py-8">
          <span class="font-bold text-3xl border-b-2 border-gray-400">Education</span>
        </div>
        <div class="pl-6 md:px-6 md:mx-auto">
          <Term
            org="University of Guelph"
            role="Bachelor of Computer Science, Honors"
            time="Graduating Apr. 2021"
            image="uoguelph.jpg"
            :notes="['Emphasis in Mathematical Science']"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Term from "./Term";

export default {
  name: "Resume",
  components: {
    Term
  },
  data() {
    return {};
  }
};
</script>

<style></style>
