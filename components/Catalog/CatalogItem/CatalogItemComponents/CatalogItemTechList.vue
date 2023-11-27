<template>
	<ul class="catalog__tech-list">
		<li v-if="small"
        class="catalog__tech-item">{{ offer.engine_volume /* || engineVolume*/ }} л.
		</li>
		<li v-if="!small"
        class="catalog__tech-item">{{ offer.run /* || run*/ }} км
		</li>
		<li class="catalog__tech-item">
			{{ offer.engine_power }} л.с.
		</li>
		<li class="catalog__tech-item">{{ currentGearbox }}</li>
    <li class="catalog__tech-item"
        v-if="!small">{{ offer.engineType!.title }}
      {{ offer.owner!.title === '0 владельцев' ? 'Новый' : offer.owner!.title }}
    </li>
    <li v-if="!small"
        class="catalog__tech-item">{{ offer.driveType!.title }}
		</li>
		<li v-if="small"
        class="catalog__tech-item">{{ offer.run /* | run */ }} км
		</li>
	</ul>
</template>
<script setup lang="ts">
import {Offer} from '~/types/graphql';
import {computed} from '#imports';

type CatalogTechListProps = {
  isForm: boolean;
  offer: Offer;
  small: boolean;
}
const props = withDefaults(defineProps<CatalogTechListProps>(), {
  isForm: false,
  offer: null,
  small: false,
});
const gearbox = ref({
  gearbox: {
    'mechanical': 'МКПП',
    'cvt': 'Вариатор',
    'robot': 'Робот',
    'automatic': 'АКПП',
  }
});

const currentGearbox = computed(() => {
  return props.offer!.gearbox!.title_short_rus!;
});
</script>