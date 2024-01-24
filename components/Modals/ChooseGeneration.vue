<template>
  <div class="modal__wrap">
    <div class="modal__choose-group">
      <h3 class="heading heading--h2">Поколение</h3>
      <div class="makes">
        <div class="makes__wrap">
          <ul class="makes__list makes__list--models">
            <li class="makes__item" @click="$emit('select', 'generation', generation)"
                v-for="generation in folder.generations" :key="generation.id">
              <span class="makes__link">
                <span class="makes__title">
                  {{ generation.name }}
                  <span>
                    [{{ generation.year_begin }} - {{ generation.year_end ? generation.year_end : 'н.в.' }}]
                  </span>
                </span>
                <span class="makes__qty">
                  {{ generation.offers_count }}
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FolderGeneration } from '~/types/graphql';

const props = defineProps<{
  folder: FolderGeneration
}>();

const emit = defineEmits(['select']);
props.folder.generations.length === 1 && emit('select', 'generation', props.folder.generations[0]);
</script>