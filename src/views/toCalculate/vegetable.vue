<template>
    <div>
        <div class="header">
            <h1 class="title">买菜</h1>
        </div>
        <div class="content">
            <span class="content_item" @click.stop="changeDate"><span>日期：</span><em>2019-10-23</em></span>
            <span class="content_item"><span>价格：</span><input type="Number"> 元</span>
        </div>
        <van-popup v-model="show" position="bottom" :style="{ height: '32%' }">
            <van-datetime-picker
                v-model="currentDate"
                type="date"
            />
        </van-popup>
            <!-- :min-date="minDate" -->
    </div>
</template>

<script>
import Vue from 'vue';
import { Popup,DatetimePicker } from 'vant';
Vue.use(Popup);
Vue.use(DatetimePicker);

    export default {
        name:"vegetable",
        data(){
            return{
                show:false,
                currentDate: new Date(),

            }
        },
        methods: {
            changeDate() {
                this.show=true
            }
        },
    }
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
        background: #fff;
        text-align: center;
        height: 50px;
        line-height: 50px;
    }
    .title{
        font-size: 22px;
    }
    .content{
        padding: 10px;
    }
    .content_item{
        display: flex;
        font-size: 12px;
        // background: #efefef;
    }
</style>