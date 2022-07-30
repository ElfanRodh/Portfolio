<template>
  <div class="bg-blue-100 dark:bg-gray-800" id="portfolio">
    <div
      class="max-w-screen-2xl mx-auto pt-28 pb-10 px-4 sm:pt-24 sm:px-6 md:pt-16 md:pb-16 lg:pt-28 lg:px-8 xl:pt-28"
    >
      <div class="sm:text-center lg:text-left z-0">
        <span
          class="before:block before:absolute before:left-0 before:-bottom-3 before:h-2 before:w-10 before:bg-gray-500 dark:before:bg-indigo-100 before:rounded-full relative inline-block"
        >
          <span
            class="relative text-4xl font-bold text-sky-600 my-3 font-title"
          >
            Portfolio
          </span>
        </span>
      </div>
      <div
        class="justify-center justify-items-center place-content-center flex flex-wrap"
      >
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="w-full md:w-1/2 pt-24 mx-auto px-10"
        >
          <img
            :src="require('~/assets/portfolio/' + project.image)"
            :alt="project.name"
            class="w-10/12 h-auto m-auto transition duration-200 hover:scale-110"
          />
          <h3
            :class="'text-' + project.color"
            class="text-center text-3xl font-semibold h-20 min-h-full my-3 font-mono"
          >
            <span>{{ project.name }}</span>
          </h3>
          <p
            class="text-center text-gray-500 dark:text-blue-50 leading-8 text-xl"
          >
            <span>
              {{ project.description }}
            </span>
          </p>
          <div
            :class="'bg-' + project.color"
            class="w-full md:w-1/2 h-1 mt-2 mx-auto rounded-full"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Portfolio",
  data() {
    return {
      projects: [],
      loading: true,
    };
  },
  async fetch() {
    const data = await Promise.all([
      axios.get(`${process.env.apiUrl}portfolio?sortBy=order&order=asc`),
    ]);
    this.projects = data[0].data;
  },
};
</script>
