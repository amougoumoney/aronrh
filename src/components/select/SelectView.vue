<template>
    <div>
        <select ref="selectRef" class="form-control" :id="id" :name="name" :disabled="disabled"
            :required="required"></select>
    </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import $ from "jquery";
import "select2/dist/js/select2.full.min";
import "select2/dist/css/select2.min.css";

const props = defineProps({
    modelValue: [String, Array],
    id: { type: String, default: "" },
    name: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    options: { type: Array, default: () => [] },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    settings: { type: Object, default: () => ({}) },
});

const emit = defineEmits(["update:modelValue", "select"]);

const selectRef = ref(null);
let select2Instance = null;

const setOptions = (val = []) => {
    if (select2Instance) {
        select2Instance.empty().select2({
            placeholder: props.placeholder,
            ...props.settings,
            data: val,
        });
        setValue(props.modelValue);
    }
};

const setValue = (val) => {
    if (select2Instance) {
        select2Instance.val(Array.isArray(val) ? val : [val]).trigger("change");
    }
};

watch(() => props.options, setOptions, { deep: true });
watch(() => props.modelValue, setValue, { deep: true });

onMounted(() => {
    if (!selectRef.value) return;

    select2Instance = $(selectRef.value).select2({
        placeholder: props.placeholder,
        ...props.settings,
        data: props.options,
    });

    select2Instance.on("select2:select select2:unselect", (ev) => {
        emit("update:modelValue", select2Instance.val());
        emit("select", ev.params.data);
    });

    setValue(props.modelValue);
});

onBeforeUnmount(() => {
    if (select2Instance) {
        select2Instance.select2("destroy");
    }
});
</script>
