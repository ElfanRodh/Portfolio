<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative bg-blue-50 dark:bg-gray-900 overflow-hidden h-screen">
      <div class="max-w-screen-2xl mx-auto">
        <div class="relative z-10 pb-8 bg-blue-50 dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-full lg:pb-28 xl:pb-32">
          <!-- <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2 fill-blue-50 dark:fill-gray-900" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg> -->

          <div>
            <div class="relative py-6 px-4 sm:px-6 lg:px-8 rounded-b-3xl">
              <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div class="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span class="sr-only">Workflow</span>
                      <!-- <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"> -->
                      <!-- <img class="h-10 w-auto sm:h-16 rounded-full shadow-neo-light dark:shadow-neo-dark p-1" src="~/assets/img/icon.png"> -->
                      <span class="font-bold text-xl pt-5 text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400">
                        Elfan Rodhian
                      </span>
                    </a>
                    <div class="-mr-2 flex items-center md:hidden">
                      <button @click="toggle" type="button" class="bg-blue-50 dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-600" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <!-- Heroicon name: outline/menu -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  <a href="#" class="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400">Home</a>

                  <a href="#" class="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400">About Me</a>

                  <a href="#" class="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400">Skills</a>

                  <a href="#" class="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400">Portfolio</a>

                  <a @click="changeTheme" class="font-medium text-indigo-600 hover:text-sky-600">
                    <div class="inline-flex m-auto rounded-full shadow-neo-light dark:shadow-neo-dark p-2" v-if="!isDark">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    </div>
                    <div class="inline-flex m-auto rounded-full shadow-neo-light dark:shadow-neo-dark p-2" v-else>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </nav>
            </div>

            <!--
              Mobile menu, show/hide based on menu open state.

              Entering: "duration-150 ease-out"
                From: "opacity-0 scale-95"
                To: "opacity-100 scale-100"
              Leaving: "duration-100 ease-in"
                From: "opacity-100 scale-100"
                To: "opacity-0 scale-95"
            -->
            <div :class="[isOpen ? 'hidden' : 'block']">
            <!-- <div class="hidden"> -->
              <div class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div class="rounded-lg shadow-md bg-blue-50 dark:bg-gray-900 ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="">
                    </div>
                    <div class="-mr-2">
                      <button @click="toggle" type="button" class="bg-blue-50 dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-600">
                        <span class="sr-only">Close main menu</span>
                        <!-- Heroicon name: outline/x -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="px-2 pt-2 pb-3 space-y-1">
                    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</a>

                    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About Me</a>

                    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Skills</a>

                    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Portfolio</a>
                  </div>
                  <a @click="changeTheme" class="inline-flex px-5 py-3 text-center font-medium text-indigo-600 dark:bg-gray-900">
                    <div v-if="!isDark" class="rounded-full shadow-neo-light dark:shadow-neo-dark p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    </div>
                    <div v-else class="rounded-full shadow-neo-light dark:shadow-neo-dark p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <h3 class="text-3xl font-semibold text-sky-600 my-3 font-mono">
                <!-- <span class="italic">&lt;h3&gt;</span> -->
                <span>Hello World</span>
                <!-- <span class="italic">&lt;/h3&gt;</span> -->
              </h3>
              <h4 class="tracking-tight text-teal-900 font-bold font-mono italic dark:text-indigo-100 text-md sm:text-xl md:text-2xl">
                <!-- <span class="block xl:inline">I am</span> -->
              </h4>
              <h1 class="text-4xl sm:text-5xl md:text-6xl tracking-tight font-bold text-gray-900 dark:text-indigo-100">
                <!-- <span class="block xl:inline">M. Elfa Rodhian Putra</span> -->
                <span class="block xl:inline">Discover My Space!</span>
              </h1>
              <p class="text-sm sm:text-md md:text-xl my-5 block italic font-mono">
                <span class="text-red-500 xl:inline">&lt;code&gt;</span> <br>
                <span class="ml-10 text-teal-500 xl:inline">Front-End</span>
                <span class="text-gray-900 dark:text-indigo-100 xl:inline">&</span>
                <span class="text-sky-600 xl:inline">Back-End</span> <br>
                <span class="ml-10 text-gray-900 dark:text-indigo-100 xl:inline">Web Developer</span> <br>
                <span class="text-red-500 xl:inline">&lt;/code&gt;</span>
              </p>
              <!-- <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
              </p> -->
              <div class="mt-8 sm:mt-28 sm:flex sm:justify-center lg:justify-start">
                <div class="">
                  <a href="#" class="font-bold w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-2xl bg-blue-50 shadow-lg shadow-neo-light active:shadow-neo-light-focus dark:shadow-neo-dark dark:active:shadow-neo-dark-focus dark:bg-gray-900 text-indigo-700 md:py-4 md:text-lg md:px-10">
                    EXPLORE NOW
                  </a>
                </div>
              </div>
            </div>

            <div class="sm:text-center lg:text-left">
              <h3 class="text-3xl font-semibold text-sky-600 my-3 font-mono">
                <!-- <span class="italic">&lt;h3&gt;</span> -->
                <span>Hello World</span>
                <!-- <span class="italic">&lt;/h3&gt;</span> -->
              </h3>
              <h4 class="tracking-tight text-teal-900 font-bold font-mono italic dark:text-indigo-100 text-md sm:text-xl md:text-2xl">
                <!-- <span class="block xl:inline">I am</span> -->
              </h4>
              <h1 class="text-4xl sm:text-5xl md:text-6xl tracking-tight font-bold text-gray-900 dark:text-indigo-100">
                <!-- <span class="block xl:inline">M. Elfa Rodhian Putra</span> -->
                <span class="block xl:inline">Discover My Space!</span>
              </h1>
              <p class="text-sm sm:text-md md:text-xl my-5 block italic font-mono">
                <span class="text-red-500 xl:inline">&lt;code&gt;</span> <br>
                <span class="ml-10 text-teal-500 xl:inline">Front-End</span>
                <span class="text-gray-900 dark:text-indigo-100 xl:inline">&</span>
                <span class="text-sky-600 xl:inline">Back-End</span> <br>
                <span class="ml-10 text-gray-900 dark:text-indigo-100 xl:inline">Web Developer</span> <br>
                <span class="text-red-500 xl:inline">&lt;/code&gt;</span>
              </p>
              <!-- <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
              </p> -->
              <div class="mt-8 sm:mt-28 sm:flex sm:justify-center lg:justify-start">
                <div class="">
                  <a href="#" class="font-bold w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-2xl bg-blue-50 shadow-lg shadow-neo-light active:shadow-neo-light-focus dark:shadow-neo-dark dark:active:shadow-neo-dark-focus dark:bg-gray-900 text-indigo-700 md:py-4 md:text-lg md:px-10">
                    EXPLORE NOW
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <!-- <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""> -->
        <img class="w-full object-cover sm:h-72 md:h-96 lg:w-fit lg:h-fit" src="~/assets/img/hero.png" alt="">
      </div>
      <div class="max-w-screen-2xl mx-auto">
        <h1 class="text-xl sm:text-2xl md:text-3xl tracking-tight font-bold text-gray-900 dark:text-indigo-100">
          <span class="block xl:inline">Portfolio</span>
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      isDark: true
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    },
    changeTheme() {
      this.isDark = !this.isDark
      const html = document.querySelector("html");
      if (this.isDark) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }
  },
  mounted() {
    const html = document.querySelector("html");
    if (this.isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }
}
</script>
