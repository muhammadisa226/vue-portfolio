<template>
  <header
    class="bg-transparent absolute top-0 left-0 w-full flex items-center z-10"
  >
    <div class="container">
      <div class="flex items-center justify-between relative">
        <div class="px-4">
          <RouterLink
            :to="{ name: 'home' }"
            class="font-bold font-pacifico text-lg text-primary block py-6"
            >Muhammad Isa</RouterLink
          >
        </div>
        <div class="flex items-center px-4">
          <button
            @click="openmenu"
            id="hamburger"
            name="hamburger"
            type="button"
            class="block absolute right-4 lg:hidden"
          >
            <span
              class="hamburger-line transition duration-300 ease-in-out origin-top-left"
            ></span>
            <span
              class="hamburger-line transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"
            ></span>
          </button>
          <nav
            id="nav-menu"
            class="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-slate-500 lg:dark:bg-transparent"
          >
            <ul class="block lg:flex">
              <li class="group">
                <RouterLink
                  :to="{ name: 'home' }"
                  class="text-base font-monserrat text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                >
                  Home
                </RouterLink>
              </li>
              <li class="group">
                <RouterLink
                  :to="{ name: 'about' }"
                  class="text-base font-monserrat text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                >
                  About Me
                </RouterLink>
              </li>
              <li class="group">
                <RouterLink
                  :to="{ name: 'portfolios' }"
                  class="text-base font-monserrat text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                >
                  Portfolios
                </RouterLink>
              </li>
              <li class="group">
                <RouterLink
                  :to="{ name: 'skills' }"
                  class="text-base font-monserrat text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                >
                  Skills
                </RouterLink>
              </li>
              <li class="group">
                <RouterLink
                  :to="{ name: 'contact' }"
                  class="text-base font-monserrat text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                >
                  Contact
                </RouterLink>
              </li>
              <li class="mt-3 lg:mt-0 flex items-center pl-8">
                <button
                  @click="toggledark()"
                  class="bg-transparent rounded-full hover:bg-gray-200 dark:hover:bg-gray-100"
                >
                  <span class="dark:inline end:0 cursor-pointer"
                    ><svg
                      viewBox="0 0 24 24"
                      fill="none"
                      class="w-6 h-6 text-white"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                        class="fill-sky-400/20"
                      ></path>
                      <path
                        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                        class="fill-sky-500"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                        class="fill-sky-500"
                      ></path></svg
                  ></span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggledark = useToggle(isDark);
import { RouterLink } from "vue-router";
const openmenu = () => {
  document.querySelector("#hamburger").classList.toggle("hamburger-active");
  document.querySelector("#nav-menu").classList.toggle("hidden");
};
</script>

<style lang="scss" scoped></style>
