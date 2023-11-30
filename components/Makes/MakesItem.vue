<template>
  <li class="makes__item"
      v-if="forChooseModal">
		<span @click="$emit('choose')"
          class="makes__link"
          :class="{'makes__link-active':active}">
			<span class="makes__title">
        <template v-if="isMark(item)">
          {{ item.title }}
        </template>
        <template v-else>
          {{ item.name }}
        </template>
				<span v-if="!isMark(item)">
					[{{ item.year_begin }} - {{ item.year_end ? item.year_end : 'н.в.' }}]
				</span>
			</span>
			<span class="makes__qty">
				{{ item.offers_count }}
			</span>
		</span>
  </li>

  <li class="makes__item"
      v-else>
    <nuxt-link :to="'/used/'+slug"
               @click="$emit('click')"
               class="makes__link">
      <div class="makes__title">
        <template v-if="isMark(item)">
          {{ slug === 'mercedes-benz' ? 'Mercedes' : item.title }}
          </template>
        <template v-else>
          {{ slug === 'mercedes-benz' ? 'Mercedes' : item.name }}
        </template>
      </div>
      <div class="makes__qty">
        {{ item.offers_count }}
      </div>
    </nuxt-link>
  </li>

</template>

<script setup lang="ts">
import {Generation, Mark} from '~/types/graphql';

function isMark(item: Mark | Generation): item is Mark {
  return Object.prototype.hasOwnProperty.call(item, 'title');
}

withDefaults(defineProps<{
  forChooseModal: boolean,
  item: Mark | Generation,
  active: boolean,
  slug: string,
}>(), {
  forChooseModal: false,
  active: false,
  slug: '',
});
</script>