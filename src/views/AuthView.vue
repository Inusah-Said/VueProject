<script></script>
<template>
  <div
    class="w-screen h-screen flex items-center justify-center auth-container"
  >
    <div class="bg-white px-10">
      <slot> </slot>
    </div>
  </div>
</template>

<style>
.auth-container {
  background: url("./src/assets/assets/authBg.svg");
}
</style>
