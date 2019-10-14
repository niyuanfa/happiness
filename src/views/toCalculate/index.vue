<template>
    <div>
        <div class="title">计算</div>
        <span class="price">电费总价:<input v-model="pricedian"></span>
        <div class="main">
            <van-row>
                <van-col span="4"></van-col>
                <van-col span="9">本月度数</van-col>
                <van-col span="9">上月度数</van-col>
            </van-row>
            <van-row>
                <van-col span="4">鹅：</van-col>
                <van-col span="9"><input v-model="ePriceS"/></van-col>
                <van-col span="9"><input v-model="ePriceZ"/></van-col>
            </van-row>
            <van-row>
                <van-col span="4">绕一周：</van-col>
                <van-col span="9"><input v-model="sPriceS"/></van-col>
                <van-col span="9"><input v-model="sPriceZ"/></van-col>
            </van-row>
            <van-row>
                <van-col span="4">法哥：</van-col>
                <van-col span="9"><input v-model="fPriceS"/></van-col>
                <van-col span="9"><input v-model="fPriceZ"/></van-col>
            </van-row>
            <span class="pay">鹅支付：<em>{{elePrice}}</em></span>
            <span class="pay">绕一周支付：<em>{{elePriceT}}</em></span>
            <span class="pay">法哥支付：<em>{{elePriceS}}</em></span>
        </div>
        <div class="fineprice">用水总价：<input v-model="waterPrice"/></div>
        <div class="fineprice">燃气总价：<input v-model="gasPrice"/></div>

        <span class="pay">鹅总计：<em>333</em></span>
        <span class="pay">绕一周总计：<em>333</em></span>
        <span class="pay">法哥总计：<em>333</em></span>
        <div class="retu">注：电费按0.5/度计算，共用地区按4人计算，煤气，水按4人计算，计算所有结果保留俩位小数，计四舍五入制。</div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Row, Col } from 'vant';

Vue.use(Row).use(Col);
export default {
    name:"toCalculate",
    data(){
        return{
            pricedian:100,
            ePriceS:50,
            ePriceZ:30,
            sPriceS:100,
            sPriceZ:60,
            fPriceS:100,
            fPriceZ:20,
            waterPrice:0,
            gasPrice:0,
        }
    },
    computed:{
        elePrice(){
            let e =  (this.ePriceS-this.ePriceZ)*0.5
            let s = (this.sPriceS-this.sPriceZ)*0.5
            let f = (this.fPriceS-this.fPriceZ)*0.5
            let p = (this.pricedian - e - s - f)/3
            return Math.round(p+e); 
        },
        elePriceT(){
            let e =  (this.ePriceS-this.ePriceZ)*0.5
            let s = (this.sPriceS-this.sPriceZ)*0.5
            let f = (this.fPriceS-this.fPriceZ)*0.5
            let p = (this.pricedian - e - s - f)/3
            return Math.round(p+s); 
        },
        elePriceS(){
            let e =  (this.ePriceS-this.ePriceZ)*0.5
            let s = (this.sPriceS-this.sPriceZ)*0.5
            let f = (this.fPriceS-this.fPriceZ)*0.5
            let p = (this.pricedian - e - s - f)/3
            return Math.round(p+f); 
        }
    },
    watch:{
        num(){

        }
    }
}
</script>
<style lang="scss" scoped>
    input{
        border: none;
        outline: none;
        -webkit-appearance: none;
    }
    .title{
        font-size: 16px;
        position: fixed;
        left: 0;
        top:0;
        width: 100%;
        text-align: center;
        height: 42px;
        line-height: 42px;
        border-bottom:1px solid #cecece;
        background: #fff;
    }
    .price{
        font-size: 14px;
        padding: 50px 15px 5px;
        display: block;
        height: 25px;
        line-height: 25px;
        background: #fff;
        input{
            padding: 0;
            border: 1px solid #ccc;
            padding-left:5px;
            height: 23px;
        } 
    }
    .main{
        font-size: 12px;
        padding: 0 15px;
        background: #fff;
        margin-top:10px;
        /deep/ .van-row{
            padding: 5px 0;
        }
        /deep/ .van-col{
            height: 30px;
            line-height: 30px;
            
            input{
                padding-left: 5px;
                width:100%;
                height: 28px;
                border: 1px solid #ccc;
            }
        }
        /deep/ .van-col:last-child{
            margin-left: 10px;
        }  
        .pay{
            padding: 0;
        } 
    }
    .pay{
            font-size: 12px;
            display: block;
            height: 28px;
            margin: 5px 0;
            padding: 0 15px;
            background: #fff;
            line-height: 28px;
            em{
                font-style: normal;
                color: red;
            }
            
        }
    .fineprice{
        font-size: 14px;
        padding: 5px 15px;
        height: 25px;
        background: #fff;
        margin-bottom: 5px;
        input{
            padding: 0;
            border: 1px solid #ccc;
            padding-left:5px;
            height: 23px;
        } 
    }
    .retu{
        font-size: 14px;
        margin: 10px 0;
        padding: 15px;
        color: red;
    }
</style>
