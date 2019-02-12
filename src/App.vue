<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
     <!--不缓存的视图-->
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

