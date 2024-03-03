
<script>
import { store } from '../store.js';
export default {
    name:'Projects',
    data() {
        return {
            store,
            projects:[]
        }
    },
}
</script>

<template lang="">
    <div>
        lista dei progetti
    </div>
</template>

<style lang="scss">
@use '../style/general.scss' as*;
@use '../style/partials/variables' as*;   
</style>