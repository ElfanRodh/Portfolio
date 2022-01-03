<template>
  <nav class="bg-blue-50 dark:bg-gray-900 w-full py-5 fixed top-0 left-0 z-10 shadow-lg shadow-neo-light active:shadow-neo-light-focus dark:shadow-neo-dark">
    <div class="max-w-screen-2xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button @click="toggle" type="button" class="shadow-neo-light dark:shadow-neo-dark inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.

              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg v-if="!isOpen" class="block lg:hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
              Icon when menu is open.

              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg v-if="isOpen" class="block lg:hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center font-code cursor-pointer" @click="scrollOnly('#main')">
            <!-- <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-sky-600.svg" alt="Workflow"> -->
            <!-- <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-sky-600-mark-white-text.svg" alt="Workflow"> -->
            <div class="block lg:hidden">
              <span class="font-bold text-2xl text-teal-500">Elfan</span>
              <span class="font-bold text-2xl text-sky-600">Rodhian</span>
            </div>
            <div class="hidden lg:block">
              <span class="font-bold text-3xl text-teal-500">Elfan</span>
              <span class="font-bold text-3xl text-sky-600">Rodhian</span>
            </div>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:text-white" -->
              <a @click="scrollTo('#main', $event)" class="btn-nav text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400 px-3 py-2 rounded-md font-medium cursor-pointer" aria-current="page">Home</a>

              <a @click="scrollTo('#about', $event)" class="btn-nav text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400 px-3 py-2 rounded-md font-medium cursor-pointer">About Me</a>

              <a @click="scrollTo('#skills', $event)" class="btn-nav text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400 px-3 py-2 rounded-md font-medium cursor-pointer">Skills</a>

              <a @click="scrollTo('#portfolio', $event)" class="btn-nav text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400 px-3 py-2 rounded-md font-medium cursor-pointer">Portfolio</a>
              
              <a @click="scrollTo('#contact', $event)" class="btn-nav text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400 px-3 py-2 rounded-md font-medium cursor-pointer">Contact</a>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- Profile dropdown -->
          <div class="ml-3 relative">
            <div>
              <button @click="changeTheme" type="button" class="text-indigo-600 hover:text-sky-600 flex text-sm rounded-full " id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Toogle Dark Menu</span>
                <!-- <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> -->
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div :class="[isOpen ? 'block' : 'hidden']" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:text-white" -->
        <a @click="scrollTo('#main', $event)" class="btn-nav text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>

        <a @click="scrollTo('#about', $event)" class="btn-nav text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">About Me</a>

        <a @click="scrollTo('#skills', $event)" class="btn-nav text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Skills</a>

        <a @click="scrollTo('#portfolio', $event)" class="btn-nav text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Portfolio</a>
        
        <a @click="scrollTo('#contact', $event)" class="btn-nav text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
      </div>
    </div>
  </nav>
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
    },
    // scroll button function
    scrollTo(element, event) {
      var otherBtn = document.getElementsByClassName('btn-nav');
      [].forEach.call(otherBtn, function(el) {
        el.classList.remove("shadow-lg", "shadow-neo-light", "dark:shadow-neo-dark", "dark:bg-gray-900");
      });

      var btn = event.target;
      btn.classList.add("shadow-lg", "shadow-neo-light", "dark:shadow-neo-dark", "dark:bg-gray-900");

      var elem = document.querySelector(element);
      elem.scrollIntoView({
        behavior: 'smooth'
      });
    },

    scrollOnly(element) {
      var otherBtn = document.getElementsByClassName('btn-nav');
      [].forEach.call(otherBtn, function(el) {
        el.classList.remove("shadow-lg", "shadow-neo-light", "dark:shadow-neo-dark", "dark:bg-gray-900");
      });
      
      var elem = document.querySelector(element);
      elem.scrollIntoView({
        behavior: 'smooth'
      });
    }
  },
  mounted() {
    const html = document.querySelector("html");
    html.classList.add("scroll-smooth");
    if (this.isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }
}
</script>