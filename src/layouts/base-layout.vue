<template>
  <div class="base-layout flex">
    <slide-menu></slide-menu>
    <div class="flex1 base-container">
      <page-head />
      <div class="page-layout">
        <route-tabs></route-tabs>
        <div class="route-page">
          <router-view v-slot="{ Component }">
            <transition name="fade-slide" mode="out-in">
              <keep-alive :include="cacheTabs">
                <component :is="Component" v-if="route.name !== setting.refreshName" :key="route.fullPath"></component>
              </keep-alive>
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import pageHead from "./page-head.vue";
import slideMenu from "./slide-menu.vue";
import RouteTabs from "./components/route-tabs.vue";

let route = useRoute();
let setting = useSettingStore();
let cacheTabs = computed(() => {
  return setting.getCacheTabs.filter(item => item.name != setting.refreshName).map(item => item.name as string);
});
</script>

<style lang="less" scoped>
.base-layout {
  min-height: 100%;
  .page-layout {
    .route-page {
      margin: 0 12px 10px 12px;
      border-radius: 2px;
      padding: 6px;
      background: var(--content-bg-color);
    }
  }
  .base-container {
    overflow: hidden;
  }
}
</style>
