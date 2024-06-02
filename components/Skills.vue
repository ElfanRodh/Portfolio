<template>
  <div class="bg-blue-50 dark:bg-gray-900" id="skills">
    <div
      class="max-w-screen-2xl mx-auto pt-28 pb-10 px-4 sm:pt-24 sm:px-6 md:pt-16 md:pb-16 lg:pt-28 lg:px-8 xl:pt-28"
    >
      <div class="sm:text-center lg:text-left z-0">
        <span
          class="before:block before:absolute before:left-0 before:-bottom-3 before:h-2 before:w-10 before:bg-gray-500 dark:before:bg-indigo-100 before:rounded-full relative inline-block"
        >
          <span
            class="relative text-4xl lg:text-6xl font-bold text-teal-500 my-3 font-title"
            >Skills</span
          >
        </span>
      </div>
      <!-- <div
        class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2 text-center"
      >
        <div class="bg-sky-600 h-2.5 rounded-full" style="width: 95%">
          <span class="text-center text-xs">95%</span>
        </div>
      </div> -->
      <div
        class="flex flex-wrap items-center justify-center md:justify-center font-semibold text-white text-center pt-6 md:p-8"
      >
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="p-2 m-4 bg-blue-50 shadow-neo-light active:shadow-neo-light-focus dark:shadow-neo-dark dark:active:shadow-neo-dark-focus dark:bg-gray-900 rounded-2xl transition duration-200 hover:scale-110 w-32"
        >
          <img
            :src="require('~/assets/skills/' + skill.image)"
            alt="HTML 5"
            class="w-12 h-12 m-auto p-1 rounded-xl active:scale-95"
          />
          <div
            class="pt-4 text-xs md:text-sm text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400"
          >
            {{ skill.name }}
          </div>
        </div>
        <!-- <div
          class="p-2 m-4 bg-blue-50 shadow-neo-light active:shadow-neo-light-focus dark:shadow-neo-dark dark:active:shadow-neo-dark-focus dark:bg-gray-900 rounded-2xl transition duration-200 hover:scale-110 w-32"
        >
          <img
            src="~assets/skills/css.png"
            alt="CSS"
            class="w-12 h-12 m-auto p-1 rounded-xl"
          />
          <div
            class="pt-4 text-xs md:text-sm text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400"
          >
            CSS
          </div>
        </div>
        <div
          class="p-2 m-4 bg-blue-50 shadow-neo-light active:shadow-neo-light-focus dark:shadow-neo-dark dark:active:shadow-neo-dark-focus dark:bg-gray-900 rounded-2xl transition duration-200 hover:scale-110 w-32"
        >
          <img
            src="~assets/skills/js.png"
            alt="Javascript"
            class="w-12 h-12 m-auto p-1 rounded-xl"
          />
          <div
            class="pt-4 text-xs md:text-sm text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400"
          >
            Javascript
          </div>
        </div>
        <div
          class="p-2 m-4 bg-blue-50 shadow-neo-light active:shadow-neo-light-focus dark:shadow-neo-dark dark:active:shadow-neo-dark-focus dark:bg-gray-900 rounded-2xl transition duration-200 hover:scale-110 w-32"
        >
          <img
            src="~assets/skills/mysql.png"
            alt="MySQL"
            class="w-12 h-12 m-auto p-1 rounded-xl"
          />
          <div
            class="pt-4 text-xs md:text-sm text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400"
          >
            MySQL
          </div>
        </div>
        <div
          class="p-2 m-4 bg-blue-50 shadow-neo-light active:shadow-neo-light-focus dark:shadow-neo-dark dark:active:shadow-neo-dark-focus dark:bg-gray-900 rounded-2xl transition duration-200 hover:scale-110 w-32"
        >
          <img
            src="~assets/skills/postgress.png"
            alt="Postgress"
            class="w-12 h-12 m-auto p-1 rounded-xl"
          />
          <div
            class="pt-4 text-xs md:text-sm text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400"
          >
            PostgresSQL
          </div>
        </div>
        <div
          class="p-2 m-4 bg-blue-50 shadow-neo-light active:shadow-neo-light-focus dark:shadow-neo-dark dark:active:shadow-neo-dark-focus dark:bg-gray-900 rounded-2xl transition duration-200 hover:scale-110 w-32"
        >
          <img
            src="~assets/skills/codeigniter.png"
            alt="Codeigniter"
            class="w-12 h-12 m-auto p-1 rounded-xl"
          />
          <div
            class="pt-4 text-xs md:text-sm text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400"
          >
            CodeIgniter
          </div>
        </div>
        <div
          class="p-2 m-4 bg-blue-50 shadow-neo-light active:shadow-neo-light-focus dark:shadow-neo-dark dark:active:shadow-neo-dark-focus dark:bg-gray-900 rounded-2xl transition duration-200 hover:scale-110 w-32"
        >
          <img
            src="~assets/skills/laravel.png"
            alt="Laravel"
            class="w-12 h-12 m-auto p-1 rounded-xl"
          />
          <div
            class="pt-4 text-xs md:text-sm text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400"
          >
            Laravel
          </div>
        </div>
        <div
          class="p-2 m-4 bg-blue-50 shadow-neo-light active:shadow-neo-light-focus dark:shadow-neo-dark dark:active:shadow-neo-dark-focus dark:bg-gray-900 rounded-2xl transition duration-200 hover:scale-110 w-32"
        >
          <img
            src="~assets/skills/flutter.png"
            alt="Flutter"
            class="w-12 h-12 m-auto p-1 rounded-xl"
          />
          <div
            class="pt-4 text-xs md:text-sm text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400"
          >
            Flutter
          </div>
        </div>
        <div
          class="p-2 m-4 bg-blue-50 shadow-neo-light active:shadow-neo-light-focus dark:shadow-neo-dark dark:active:shadow-neo-dark-focus dark:bg-gray-900 rounded-2xl transition duration-200 hover:scale-110 w-32"
        >
          <img
            src="~assets/skills/vue.png"
            alt="Vue"
            class="w-12 h-12 m-auto p-1 rounded-xl"
          />
          <div
            class="pt-4 text-xs md:text-sm text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400"
          >
            Vue
          </div>
        </div>
        <div
          class="p-2 m-4 bg-blue-50 shadow-neo-light active:shadow-neo-light-focus dark:shadow-neo-dark dark:active:shadow-neo-dark-focus dark:bg-gray-900 rounded-2xl transition duration-200 hover:scale-110 w-32"
        >
          <img
            src="~assets/skills/bootstrap.png"
            alt="Bootstrap"
            class="w-12 h-12 m-auto p-1 rounded-xl"
          />
          <div
            class="pt-4 text-xs md:text-sm text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400"
          >
            Bootstrap
          </div>
        </div>
        <div
          class="p-2 m-4 bg-blue-50 shadow-neo-light active:shadow-neo-light-focus dark:shadow-neo-dark dark:active:shadow-neo-dark-focus dark:bg-gray-900 rounded-2xl transition duration-200 hover:scale-110 w-32"
        >
          <img
            src="~assets/skills/tailwind.png"
            alt="Tailwind"
            class="w-12 h-12 m-auto p-1 rounded-xl"
          />
          <div
            class="pt-4 text-xs md:text-sm text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400"
          >
            Tailwind
          </div>
        </div>
        <div
          class="p-2 m-4 bg-blue-50 shadow-neo-light active:shadow-neo-light-focus dark:shadow-neo-dark dark:active:shadow-neo-dark-focus dark:bg-gray-900 rounded-2xl transition duration-200 hover:scale-110 w-32"
        >
          <img
            src="~assets/skills/figma.png"
            alt="Figma"
            class="w-12 h-12 m-auto p-1 rounded-xl"
          />
          <div
            class="pt-4 text-xs md:text-sm text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400"
          >
            Figma
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Skills",
  data() {
    return {
      age: 0,
      skills: [],
    };
  },
  async fetch() {
    const data = await Promise.all([
      axios.get(`${process.env.apiUrl}skills?sortBy=order&order=asc`),
    ]);
    this.skills = data[0].data;
  },
  methods: {
    getAge() {
      const today = new Date();
      const birthDate = new Date("1993-10-10");
      const age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        this.age = age - 1;
      } else {
        this.age = age;
      }
    },
  },
  mounted() {
    this.getAge();
  },
};
</script>
