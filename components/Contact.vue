<template>
  <div class="bg-blue-50 dark:bg-gray-900" id="contact">
    <div
      class="max-w-screen-2xl py-10 mx-auto px-4 sm:py-12 sm:px-6 md:py-16 lg:py-20 lg:px-8 xl:py-28"
    >
      <div class="sm:text-center lg:text-left z-0">
        <span
          class="before:block before:absolute before:left-0 before:-bottom-3 before:h-2 before:w-10 before:bg-gray-500 dark:before:bg-indigo-100 before:rounded-full relative inline-block"
        >
          <span
            class="relative text-4xl font-bold text-sky-600 my-3 font-title"
          >
            Contact
          </span>
        </span>
      </div>
      <figure
        class="rounded-xl items-center p-8 md:p-0 md:max-w-screen-sm m-auto md:flex"
      >
        <!-- <img class="w-2/5 h-full md:rounded-none rounded-full mx-auto pt-5 md:pt-8 items-center" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" > -->
        <img
          class="w-32 h-32 md:w-52 md:h-52 md:rounded-none rounded-full mx-auto items-center hover:scale-110 duration-200"
          src="~/assets/img/contact.png"
          alt=""
        />
        <div class="w-full pt-6 md:p-8 text-center md:text-left space-y-4">
          <div class="text-left mb-10">
            <h3
              class="text-3xl text-center md:text-left font-semibold text-teal-500 my-3 font-mono"
            >
              <span>Find me more</span>
            </h3>
            <div class="w-full py-2">
              <p
                class="text-center md:text-left text-gray-500 dark:text-blue-50 leading-8 text-xl flex items-center"
              >
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span class="ml-2">
                  <a :href="'mailto:' + about.email" target="_blank">{{
                    about.email
                  }}</a>
                </span>
              </p>
              <div
                class="w-full md:w-1/3 h-1 mt-2 rounded-full bg-teal-500"
              ></div>
            </div>

            <div class="w-full py-2">
              <p
                class="text-center md:text-left text-gray-500 dark:text-blue-50 leading-8 text-xl flex items-center"
              >
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span class="ml-2">
                  <a :href="'https://wa.me/' + about.phone" target="_blank"
                    >+{{ about.phone }}</a
                  >
                </span>
              </p>
              <div
                class="w-full md:w-1/3 h-1 mt-2 rounded-full bg-teal-500"
              ></div>
            </div>

            <div class="w-full py-2">
              <p
                class="text-center md:text-left text-gray-500 dark:text-blue-50 leading-8 text-xl flex items-center"
              >
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  class="h-6 w-6"
                >
                  <path
                    fill="currentColor"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  ></path>
                </svg>
                <span class="ml-2">
                  <a :href="about.secialMedia.linkedin.url" target="_blank">{{
                    about.secialMedia.linkedin.name
                  }}</a>
                </span>
              </p>
              <div
                class="w-full md:w-1/3 h-1 mt-2 rounded-full bg-teal-500"
              ></div>
            </div>
          </div>
        </div>
      </figure>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Contact",
  data() {
    return {
      age: 0,
      about: {
        name: "",
        email: "",
        phone: "",
        secialMedia: {
          linkedin: {
            name: "",
            url: "",
          },
        },
      },
    };
  },
  async fetch() {
    const [about] = await Promise.all([
      axios.get(`${process.env.apiUrl}about`),
    ]);
    this.about = about.data[0];
  },
};
</script>
