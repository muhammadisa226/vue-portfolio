<template>
  <section id="contact" class="pt-36 pb-32 dark:bg-dark">
    <div class="container">
      <div class="w-full px-4">
        <div class="max-w-xl mx-auto text-center mb-16">
          <h4 class="font-semibold text-lg text-primary mb-2 uppercase">
            Contact
          </h4>
          <h2
            class="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white"
          >
            Contact Me
          </h2>
        </div>
      </div>
      <form action="" method="POST">
        <div class="w-full lg:w-2/3 lg:mx-auto">
          <div class="w-full px-4 mb-8">
            <label for="name" class="text-base font-bold text-primary"
              >Name</label
            >
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              required
            />
          </div>
          <div class="w-full px-4 mb-8">
            <label for="email" class="text-base font-bold text-primary"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              required
            />
          </div>
          <div class="w-full px-4 mb-8">
            <label for="message" class="text-base font-bold text-primary"
              >Message</label
            >
            <textarea
              type="text"
              id="message"
              name="message"
              class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
              required
            ></textarea>
          </div>
          <div class="w-full px-4">
            <button
              type="submit"
              class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
