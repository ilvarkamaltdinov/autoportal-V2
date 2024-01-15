<template>
  <div class="grid__col-12">
    <div class="grid__col-12">
      <div class="tabs">
        <ul class="tabs__list tabs__list--all tabs__list--all-models">
          <li role="presentation" class="tabs__item" v-for="folder in currentFolders" :key="folder.id">
            <a href="/used/land-rover/range-rover-sport"
               class="tabs__link">
              <span class="tabs__text">{{ folder.title }}</span>
              <span class="tabs__count">{{ folder.offers_count }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Folder} from '~/app/types/folders';

const route = useRoute();
const marks = [];

const currentFolders = computed<Folder[]>(() => {
  let currentMark = marks.find(mark => mark.slug === route.params.mark);
  if (currentMark) {
    return currentMark.folders;
  }

});
</script>