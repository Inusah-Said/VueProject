<template>
  <div class="bg-appPurple h-screen w-[220px] fixed top-0 left-0 px-3 z-10">
    <h4 class="w-full text-center text-4xl font-caligra py-4 text-white">
      Todolist
    </h4>
    <div v-for="item in ListItem">
      <button
        @click="$router.push(`/${item.path}`)"
        key="item.name"
        class="flex items-center space-x-4 py-3 px-2 rounded-md w-full hover:bg-selectedItemColor cursor-pointer hover:bg-opacity-10"
      >
        <img :src="item.image" />
        <p class="text-appAlmostWhite">{{ item.name }}</p>
      </button>
    </div>
  </div>
</template>

<script setup>
import homeIcon from "../assets/assets/homeIcon.svg";
import tasksIcon from "../assets/assets/taksIcon.svg";
import settingsIcon from "../assets/assets/settingsIcon.svg";
import supportIcon from "../assets/assets/supportIcon.svg";
import calendarIcon from "../assets/assets/calenderIcon.svg";
import logoutIcon from "../assets/assets/logoutIcon.svg";
const ListItem = [
  { name: "Dashboard", image: homeIcon, id: 1, path: "home" },
  {
    name: "Tasks",
    image: tasksIcon,
    id: 2,
    path: "tasks",
  },
  {
    name: "Calendar",
    image: calendarIcon,
    path: "calendar",
    id: 5,
  },
  {
    name: "Settings",
    image: settingsIcon,
    id: 3,
    path: "settings",
  },
  {
    name: "Support",
    image: supportIcon,
    id: 4,
    path: "support",
  },
  {
    name: "auth",
    image: logoutIcon,
    id: 5,
    path: "",
  },
];
</script>
