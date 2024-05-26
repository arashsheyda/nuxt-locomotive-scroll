<template>
  <div
    v-locomotive
    class="example vertical"
  >
    <header data-scroll-section>
      <h1>
        Vertical<br>
        Scroll
      </h1>
    </header>
    <div
      class="example-section"
      data-scroll-section
    >
      <div class="example-content">
        <div
          class="example-big-square"
          data-scroll
          data-scroll-speed="-0.5"
        />
        <div
          class="example-small-square"
          data-scroll
          data-scroll-speed="2.5"
        />
      </div>
    </div>
    <div
      class="example-section"
      data-scroll-section
    >
      <div class="example-content">
        <div
          class="example-small-square"
          data-scroll
          data-scroll-speed="2.5"
        />
        <div
          class="example-big-square"
          data-scroll
          data-scroll-speed="-0.5"
        />
      </div>
    </div>
    <div
      class="example-section"
      data-scroll-section
    >
      <div class="example-content">
        <div
          class="example-big-square"
          data-scroll
          data-scroll-speed="-0.5"
        />
        <div
          class="example-small-square"
          data-scroll
          data-scroll-speed="2.5"
        />
      </div>
    </div>
    <footer data-scroll-section>
      <NuxtLink to="/horizontal-scroll/">
        Go to Horizontal Scroll
      </NuxtLink>
    </footer>
  </div>
</template>
