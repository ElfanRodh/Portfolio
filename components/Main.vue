<template>
  <div class="bg-blue-50 dark:bg-gray-900" id="main">
    <div class="pt-28 pb-10 lg:absolute lg:top-20 lg:right-0 lg:w-1/2 md:pl-5">
      <!-- <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""> -->
      <img class="w-9/12 h-auto object-cover lg:w-7/12 hover:scale-110 duration-200 m-auto" src="~/assets/img/hero.png" alt="">
    </div>
    <main class="max-w-screen-2xl mx-auto px-4 sm:pt-24 sm:px-6 md:pt-16 md:pb-16 lg:pt-28 lg:px-8 xl:pt-28">
      <div class="text-center lg:text-left">
        <h3 class="text-3xl font-semibold text-sky-600 my-3 font-mono">
          <!-- <span class="italic">&lt;h3&gt;</span> -->
          <span>Hello World</span>
          <!-- <span class="italic">&lt;/h3&gt;</span> -->
        </h3>
        <h4 class="tracking-tight text-teal-900 font-bold font-mono italic dark:text-indigo-100 text-md sm:text-xl md:text-2xl">
          <!-- <span class="block xl:inline">I am</span> -->
        </h4>
        <h1 class="text-center md:text-left text-3xl sm:text-5xl md:text-6xl tracking-tight font-bold text-gray-900 dark:text-indigo-100">
          <!-- <span class="block xl:inline">M. Elfa Rodhian Putra</span> -->
          <span class="block xl:inline">Discover My Space!</span>
        </h1>
        <p class="text-center md:text-left text-sm sm:text-md md:text-xl my-5 block italic font-code">
          <!-- <span class="text-red-500 xl:inline">&lt;code&gt;</span> <br>
          <span class="ml-0 md:ml-10 text-teal-500 xl:inline">Front-End</span>
          <span class="text-gray-900 dark:text-indigo-100 xl:inline">&</span>
          <span class="text-sky-600 xl:inline">Back-End</span> <br>
          <span class="ml-0 md:ml-10 text-gray-900 dark:text-indigo-100 xl:inline">Web Developer</span> <br>
          <span class="text-red-500 xl:inline">&lt;/code&gt;</span> -->

          <span class="text-teal-500 xl:inline">Front-End</span>
          <span class="text-gray-900 dark:text-indigo-100 xl:inline">|</span>
          <span class="text-sky-600 xl:inline">Back-End</span> <br>
          <span class="text-gray-900 dark:text-indigo-100 xl:inline">Web Developer</span>
        </p>
        <!-- <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
        </p> -->
        <div class="my-8 sm:my-28 sm:flex sm:justify-center lg:justify-start">
          <div class="">
            <a @click="scrollTo('#about', $event)" class="font-bold w-3/4 m-auto md:w-full flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-2xl bg-blue-50 shadow-lg shadow-neo-light active:shadow-neo-light-focus dark:shadow-neo-dark dark:active:shadow-neo-dark-focus dark:bg-gray-900 text-indigo-700 md:py-4 md:text-lg md:px-10 cursor-pointer">
              <span class="mr-5 font-bold">
                EXPLORE NOW
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  methods : {
    scrollTo(element, event) {
      var elem = document.querySelector(element);
      elem.scrollIntoView({
        behavior: 'smooth'
      });
    },
  }
}
</script>