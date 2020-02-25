<template>
 <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        > 
    <div class="gutter-example">
        <a-row :gutter="16">
            <a-col class="gutter-row" :span="12">
                <div class="gutter-box"><a-icon style="font-size:22px !important;" type="gold" />
                <span class="secondary-text">Operations</span></div>
            </a-col>
        </a-row>
    </div>
 </a-layout-content>
</template>

<script>
export default {
  name: "Operations",
}
</script>