<template>
  <div class="bg-blue-100 dark:bg-gray-800" id="about">
    <div
      class="max-w-screen-2xl mx-auto pt-28 pb-10 px-4 sm:pt-24 sm:px-6 md:pt-16 md:pb-16 lg:pt-28 lg:px-8 xl:pt-28"
    >
      <div class="sm:text-center lg:text-left z-0">
        <span
          class="before:block before:absolute before:left-0 before:-bottom-3 before:h-2 before:w-10 before:bg-gray-500 dark:before:bg-indigo-100 before:rounded-full relative inline-block"
        >
          <span class="relative text-4xl font-bold text-sky-600 my-3 font-title"
            >About Me</span
          >
        </span>
      </div>
      <figure class="md:flex rounded-xl p-8 md:p-0">
        <img
          class="w-3/5 md:w-2/5 h-full md:rounded-none rounded-full mx-auto align-middle hover:scale-110 duration-200"
          src="~/assets/img/about.png"
          alt=""
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <div class="text-left mb-10">
            <h3
              class="text-center md:text-left text-3xl font-semibold text-teal-500 my-3 font-mono"
            >
              <span>{{ about.name }}</span>
            </h3>
            <p
              class="text-center md:text-left text-gray-500 dark:text-blue-50 leading-8 text-xl"
            >
              <span>
                {{ about.bio }}
              </span>
            </p>
            <div
              class="w-full md:w-1/2 h-1 mt-2 rounded-full bg-teal-500"
            ></div>
          </div>

          <div class="text-center md:text-left mb-10">
            <span class="font-bold text-blue-500">Region: </span>
            <span
              class="font-medium text-xl text-gray-500 dark:text-blue-50 block mb-2"
              >{{ about.region }}</span
            >

            <span class="font-bold text-blue-500">City: </span>
            <span
              class="font-medium text-xl text-gray-500 dark:text-blue-50 block mb-2"
              >{{ about.city }}</span
            >

            <span class="font-bold text-blue-500">Age: </span>
            <span
              class="font-medium text-xl text-gray-500 dark:text-blue-50 block mb-2"
              >{{ age }}</span
            >

            <span class="font-bold text-blue-500">Address: </span>
            <span
              class="font-medium text-xl text-gray-500 dark:text-blue-50 block mb-2"
            >
              {{ about.address }}
            </span>
          </div>

          <div class="mt-8 sm:mt-28 sm:flex sm:justify-center lg:justify-start">
            <div class="">
              <!-- <a href="#" class="font-bold w-full flex items-center justify-center px-8 py-3 border border-transparent text-base rounded-2xl bg-blue-100 shadow-neo-light-soft active:shadow-neo-light-soft-focus dark:shadow-neo-dark-soft dark:active:shadow-neo-dark-soft-focus dark:bg-gray-800 text-indigo-700 md:py-4 md:text-lg md:px-10">
                DOWNLOAD CV
              </a> -->
            </div>
          </div>
        </div>
      </figure>
      <div class="md:flex">
        <!-- Educations -->
        <div class="w-full md:w-4/12 px-3">
          <div class="pt-6 text-center md:text-left space-y-4">
            <div class="text-left mb-10">
              <h3
                class="text-3xl font-semibold text-teal-500 my-3 font-mono inline-flex"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </span>
                <span class="ml-2"> Education </span>
              </h3>
              <div
                v-for="(education, index) in educations"
                :key="index"
                class="py-2 min-h-6"
              >
                <p
                  class="text-center md:text-left text-gray-500 dark:text-blue-50 leading-8 text-xl"
                >
                  <span>
                    {{ education.yearEnd }} - {{ education.name }} ({{
                      education.subtext
                    }})
                  </span>
                </p>
                <div
                  class="w-full md:w-1/2 h-1 mt-2 rounded-full bg-teal-500"
                ></div>
              </div>
              <!-- <div class="py-2 min-h-6">
                <p
                  class="text-center md:text-left text-gray-500 dark:text-blue-50 leading-8 text-xl"
                >
                  <span>
                    2016 - Community Academy of Bojonegoro (Bachelor of
                    Informatics Engineering)
                  </span>
                </p>
                <div
                  class="w-full md:w-1/2 h-1 mt-2 rounded-full bg-teal-500"
                ></div>
              </div> -->
            </div>
          </div>
        </div>
        <!-- Publications -->
        <div class="w-full md:w-4/12 px-3">
          <div class="pt-6 text-center md:text-left space-y-4">
            <div class="text-left mb-10">
              <h3
                class="text-3xl font-semibold text-indigo-500 my-3 font-mono inline-flex"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
                <span class="ml-2"> Publication </span>
              </h3>
              <div
                v-for="(publication, index) in publications"
                :key="index"
                class="py-2"
              >
                <p
                  class="text-center md:text-left text-gray-500 dark:text-blue-50 leading-8 text-xl flex"
                >
                  <span class="w-5/5 md:w-4/5">
                    {{ publication.yearEnd }} - {{ publication.name }}
                  </span>
                  <span v-if="publication.url != ''" class="w-5/5 md:w-1/5">
                    <a :href="publication.url" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </span>
                </p>
                <div
                  class="w-full md:w-1/2 h-1 mt-2 rounded-full bg-indigo-500"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <!-- Certificates -->
        <div class="w-full md:w-4/12 px-3">
          <div class="pt-6 text-center md:text-left space-y-4">
            <div class="text-left mb-10">
              <h3
                class="text-3xl font-semibold text-blue-500 my-3 font-mono inline-flex"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </span>
                <span class="ml-2"> Certificates </span>
              </h3>
              <div
                v-for="(certificate, index) in certificates"
                :key="index"
                class="py-2"
              >
                <p
                  class="text-gray-500 dark:text-blue-50 leading-8 text-xl flex"
                >
                  <span class="w-5/5 md:w-4/5">
                    {{ certificate.yearEnd }} - {{ certificate.name }}
                  </span>
                </p>
                <div
                  class="w-full md:w-1/2 h-1 mt-2 rounded-full bg-blue-500"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "About",
  data() {
    return {
      age: 0,
      about: [],
      educations: [],
      publications: [],
      certificates: [],
    };
  },
  async fetch() {
    const [about, achievements] = await Promise.all([
      axios.get(`${process.env.apiUrl}about`),
      axios.get(`${process.env.apiUrl}achievements?sortby=yearEnd&order=desc`),
    ]);
    this.about = about.data[0];
    const achievement = achievements.data;
    // group achievement by category
    const groupedAchievement = {
      education: [],
      publication: [],
      certificate: [],
    };
    achievement.forEach((item) => {
      groupedAchievement[item.category].push(item);
    });
    this.educations = groupedAchievement.education;
    this.publications = groupedAchievement.publication;
    this.certificates = groupedAchievement.certificate;
  },
  methods: {
    getAge() {
      const today = new Date();
      // const birthDate = new Date("1996-03-24T00:00:00.000Z");
      const birthDate = new Date(this.about.dateOfBirth);
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
