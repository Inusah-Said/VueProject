<script setup>
import AuthViewContainer from "../components/containers/AuthViewContainer.vue";
import { ref } from "vue";
import googleIcon from "../assets/assets/googleIcon.png";

let showPassword = ref(false);
const toggleShowPassword = (evt) => {
  evt.preventDefault();
  showPassword.value = !showPassword.value;
};
// const formSubmit = (evt)=>{
//   evt.preventDefault();
//   navigate.push('/about')
// }
</script>
<template>
  <AuthViewContainer>
    <div class="space-y-5">
      <h4 class="w-full text-center text-5xl font-caligra py-2 text-appBlack">
        Todolist
      </h4>
      <button
        class="w-full flex items-center justify-center text-2xl font-light space-x-5 border border-[#677ACB] py-2 px-5 rounded-md"
      >
        <img :src="googleIcon" class="w-6 h-6" alt="google logo" />
        <span class="text-appBlack text-lg font-light font-vernir">
          Continue with Google
        </span>
      </button>
      <img
        class="signIn"
        src="../assets/assets/signInEmail.svg"
        alt="sign in with email"
      />

      <form class="w-full">
        <label class="block space-y-1">
          <span class="block font-medium text-appBlack font-vernir">
            Email
          </span>
          <input
            type="email"
            placeholder="mary@example.com"
            class="peer w-full focus:outline-appPurple border shadow-sm border-slate-300 py-2 px-3 rounded-md"
          />
          <span
            class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm font-vernir"
          >
            Please provide a valid email address.
          </span>
        </label>
        <label class="block space-y-1">
          <span class="block font-medium text-appBlack font-vernir">
            Password
          </span>
          <span class="relative w-full">
            <input
              :type="showPassword === true ? 'text' : 'password'"
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
              class="peer w-full outline-[#29325A33] bg-inherit focus:outline-appPurple border shadow-sm border-slate-300 h-10 px-3 rounded-md"
            />
            <span class="absolute right-1 top-1">
              <button
                @click="toggleShowPassword"
                class="h-full hover:bg-transparent normal-case"
              >
                <img
                  v-if="showPassword"
                  src="../assets/assets/visibleEye.svg"
                  class="w-5 h-5 r-2"
                  alt="show password as text"
                />
                <img
                  v-else
                  src="../assets/assets/hidePassword.svg"
                  class="w-5 h-5 r-2"
                  alt="show password as hashed"
                />
              </button>
            </span>
          </span>
        </label>
        <div class="flex justify-between items-center pb-4 pt-2">
          <div class="flex items-center justify-center space-x-2">
            <input type="checkbox" />
            <p class="text-xs text-appBlack font-vernir">Remember me</p>
          </div>

          <p class="text-xs text-appPurple font-vernir">Forgot Password?</p>
        </div>
<router-link :to="{name:'about'}">
  <button
      type="submit"
      class="bg-appPurple w-full py-2 my-3 text-white rounded-md font-vernir"
  >
    Login
  </button>
</router-link>

        <p class="text-xs text-center font-medium text-appBlack font-vernir">
          Not registered yet?
          <span class="text-xs space-x-2 text-appPurple font-medium">
            Create account
          </span>
        </p>
      </form>
    </div>
  </AuthViewContainer>
</template>

<style>
.signIn {
  width: 400px;
  height: 30px;
}
</style>
