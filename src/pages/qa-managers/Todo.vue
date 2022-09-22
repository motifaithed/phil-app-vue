<template>
    <data-tables
    :title="title" 
    :description="description"></data-tables>
</template>
<script>
    import DataTables from '../../components/ui/Datatables.vue';
    export default {
        "name":"Todo",
        components:{
            DataTables
        },
        data(){
            return {
                title: "Patients",
                description: "List of Patients for QA"
            }
        }
    }
</script>