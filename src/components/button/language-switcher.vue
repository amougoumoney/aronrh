<template>
  <div class="dropdown">
    <button class="btn btn-white dropdown-toggle d-flex align-items-center" type="button" id="languageDropdown"
      data-bs-toggle="dropdown" aria-expanded="false">
      <img :src="selectLanguage.icon" alt="Language icon" class="me-2 rounded-circle"
        style="width: 20px; height: 20px;" />
      <span class="font-bold">{{ $t(selectLanguage.name) }}</span>
      <i class="ti ti-chevron-down ms-2"></i>
    </button>

    <ul class="dropdown-menu dropdown-menu-end p-3" aria-labelledby="languageDropdown">
      <li v-for="(language, i) in languages" :key="i">
        <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center rounded-1"
          @click="setLanguage(language)">
          <img :src="language.icon" alt="Language icon" class="me-2 rounded-circle"
            style="width: 20px; height: 20px;" />
          <span class="me-auto">{{ language.name }}</span>
          <i v-if="selectLanguage.code === language.code" class="text-primary ti ti-check"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<!-- <script>
import us from '@/assets/img/flags/us.png'
import fr from '@/assets/img/flags/fr.png'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '@/lang/language'

export default {
  data() {
    return {
      languages: [
        { code: 'en', name: 'English', icon: us },
        { code: 'fr', name: 'French', icon: fr },
      ],
    }
  },
  computed: {
    t() {
      return useI18n({ useScope: 'global' })
    },
    useLanguage() {
      return useLanguageStore()
    },
    selectLanguage() {
      console.log("Langue actuelle dans le store:", this.useLanguage.locale);
      return this.languages.find(e => e.code === this.useLanguage.locale) || this.languages[0];
    }
  },
  created() {
    if (!this.useLanguage.locale) {
      this.setLanguage(this.languages[0]);
    }
  },
  methods: {
    setLanguage(lg) {
      if (lg.code !== this.useLanguage.locale) {
        console.log("Changement de langue vers :", lg.code);
        this.useLanguage.set(lg.code);
        this.$emit('changeLang', lg.code);
      }
    }
  }
}

</script> -->
<script setup>
import { computed, ref, defineEmits } from 'vue'
import us from '@/assets/img/flags/us.png'
import fr from '@/assets/img/flags/fr.png'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '@/lang/language'
const t = useI18n({ useScope: 'global' })
const emit = defineEmits();




const languages = [
  {
    code: 'en',
    name: 'English',
    icon: us,
  },
  {
    code: 'fr',
    name: 'French',
    icon: fr,
  },
]
const show = ref(false)
const useLanguage = useLanguageStore()
const selectLanguage = computed(() => {
  return languages.filter((e) => e.code === useLanguage.locale)[0]
})
const setLanguage = (lg) => {
  console.log('setLanguage', lg)
  show.value = !show
  if (lg.code !== t.locale.value) {
    t.locale.value = lg.code
    emit('changeLang', lg.code);
    useLanguage.set(t.locale.value)
  }
  console.log('useLanguage', useLanguage.locale)
}
</script>

