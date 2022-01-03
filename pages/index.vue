<template>
  <div class="bg-blue-50 dark:bg-gray-900">
    <!-- <Header /> -->
    <Navbar />
    <Main />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    <div class="fixed bottom-0 right-0 m-5">
      <div class="">
        <a id="btn-scroll" @click="scrollTop" class="transition-opacity font-bold hidden items-center justify-center p-3 border border-transparent text-base font-medium rounded-2xl bg-indigo-700 shadow-lg shadow-neo-blue active:shadow-neo-blue text-blue-50 md:text-lg cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IndexPage',
    methods: {
      // scroll button function
      scrollTo(element) {
        document.querySelector(element).scrollIntoView({
          behavior: 'smooth'
        });
      },
      // scroll to top
      scrollTop() {
        this.scrollTo('#main');
      },
      // hidden button when scroll
      scrollFunction() {
        const btn = document.getElementById('btn-scroll');
        if (window.scrollY > 500) {
          btn.classList.add("flex");
          btn.classList.remove("hidden");
        } else {
          btn.classList.add("hidden");
          btn.classList.remove("flex");
        }
      },
    },
    // listen is window scroll
    mounted() {
      window.addEventListener('scroll', this.scrollFunction);
      this.scrollFunction();
    },
  }
</script>
