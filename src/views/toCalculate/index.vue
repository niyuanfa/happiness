<template>
    <div>
        <div class="title">计算</div>
        <span class="price">电费总价:<input type="number" v-model="pricedian"></span>
        <div class="main">
            <van-row>
                <van-col span="5"></van-col>
                <van-col span="9">本月度数</van-col>
                <van-col span="9">上月度数</van-col>
            </van-row>
            <van-row>
                <van-col span="5">鹅：</van-col>
                <van-col span="9"><input type="number" v-model="ePriceZ"/></van-col>
                <van-col span="9"><input type="number" v-model="ePriceS"/></van-col>
            </van-row>
            <van-row>
                <van-col span="5">武汉夫妻：</van-col>
                <van-col span="9"><input type="number" v-model="fPriceZ"/></van-col>
                <van-col span="9"><input type="number" v-model="fPriceS"/></van-col>
            </van-row>
            <van-row>
                <van-col span="5">绕一周：</van-col>
                <van-col span="9"><input type="number" v-model="sPriceZ"/></van-col>
                <van-col span="9"><input type="number" v-model="sPriceS"/></van-col>
            </van-row>
            <span class="pay">易支付电：<em>{{resultsyY}}仅支付共用区域电</em></span>
            <span class="pay">鹅支付电：<em>{{resultsyE}}</em></span>
            <span class="pay">武汉夫妻支付电：<em>{{resultsyF}}</em></span>
            <span class="pay">武汉夫妻支付电：<em>{{gebi}}仅支付共用区域电</em></span>
            <span class="pay">绕一周支付电：<em>{{resultsyS}}</em></span>
        </div>
        <div class="fineprice">用水总价：<input type="number" v-model="waterPrice"/></div>
        <div class="fineprice">燃气总价：<input type="number" v-model="gasPrice"/></div>

        <div class="btnJs" @click="yielePrice()">计算结果</div>
        <span class="pay">易总付：<em>{{ZresultsyY}}</em></span>
        <span class="pay">鹅总计：<em>{{ZresultsyE}}</em></span>
        <span class="pay">武汉夫妻总计：<em>{{ZresultsyF}}</em></span>
        <span class="pay">武汉夫妻总计：<em>{{Zgebi}}</em></span>
        <span class="pay">绕一周总计：<em>{{ZresultsyS}}</em></span>
        <div class="retu">注：电费按0.5/度计算，共用地区按5人计算，煤气，水按5人计算，计算所有结果保留俩位小数，计四舍五入制。</div>
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
            pricedian:187.7,
            ePriceZ:852,
            ePriceS:852,
            sPriceZ:1575,
            sPriceS:1575,
            fPriceZ:650,
            fPriceS:650,
            waterPrice:0,
            gasPrice:0,
            resultsyY:0,
            gebi:0,
            resultsyE:0,
            resultsyF:0,
            resultsyS:0,
            ZresultsyY:0,
            ZresultsyE:0,
            ZresultsyF:0,
            ZresultsyS:0,
            Zgebi:0,
            
        }
    },
    created(){
        this.yielePrice()
    },
    watch:{

    },
    computed:{

    },
    methods:{
        yielePrice(){
            let e =  (this.ePriceZ-this.ePriceS)*0.5
            let s = (this.sPriceZ-this.sPriceS)*0.5
            let f = (this.fPriceZ-this.fPriceS)*0.5
            let p = (this.pricedian - e - s - f )/5
            this.resultsyY = parseFloat(p).toFixed(2);
            this.gebi = parseFloat(p).toFixed(2)

            this.resultsyE = parseFloat(p+e).toFixed(2);
            this.resultsyF = parseFloat(p+f).toFixed(2);
            this.resultsyS = parseFloat(p+s).toFixed(2);
            let waterPrice  = parseFloat(this.waterPrice/5).toFixed(2);
            let gasPrice = parseFloat(this.gasPrice/5).toFixed(2);
            this.ZresultsyY = parseFloat(Number(this.resultsyY)+Number(waterPrice)+Number(gasPrice)).toFixed(2)
            this.Zgebi = parseFloat(Number(this.resultsyY)+Number(waterPrice)+Number(gasPrice)).toFixed(2)
            this.ZresultsyE = parseFloat(Number(this.resultsyE)+Number(waterPrice)+Number(gasPrice)).toFixed(2)
            this.ZresultsyF = parseFloat(Number(this.resultsyF)+Number(waterPrice)+Number(gasPrice)).toFixed(2)
            this.ZresultsyS = parseFloat(Number(this.resultsyS)+Number(waterPrice)+Number(gasPrice)).toFixed(2)
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
    .font{
        margin-top:10px;
        font-size: 14px;
        display: block;
        padding-left: 15px;
    }
    img{
        display: block;
        width: 100%;
        margin-bottom: 20px;
    }
    .btnJs{
        font-size: 14px;
        text-align: center;
        height: 30px;
        line-height: 30px;
        width: 150px;
        margin: 0 auto;
        background: #f5b790;
        color: #fff;
    }
</style>
