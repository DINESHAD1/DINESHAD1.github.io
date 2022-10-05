<template>
    <div>
        <h1>Calculator</h1>
    </div>
    <div id="Cmain">
        <div id="output">
            {{expression}}
        </div>
        <div class="buttons">
            <div class="numbers">
                <span class="list" @click="expression +='1'">1</span>
                <span class="list" @click="expression +='2'">2</span>
                <span class="list" @click="expression +='3'">3</span>
                <span class="list" @click="expression +='+'">+</span>
            </div>
            <div class="numbers">
                <span class="list" @click="expression +='4'">4</span>
                <span class="list" @click="expression +='5'">5</span>
                <span class="list" @click="expression +='6'">6</span>
                <span class="list" @click="expression +='-'">-</span>
            </div>
            <div class="numbers">
                <span class="list" @click="expression +='7'">7</span>
                <span class="list" @click="expression +='8'">8</span>
                <span class="list" @click="expression +='9'">9</span>
                <span class="list" @click="expression +='*'">*</span>
            </div>
            <div class="numbers">
                <span class="list" @click="expression +='0'">0</span>
                <span></span>
                <span class="list control"  @click="expression =' '">C</span>
                <span class="list control" @click="result">=</span>
            </div>
        </div>

    </div>
</template>

<script>
    import { evaluate } from "mathjs";
    export default {
        name:'CalculatorApp',
        data(){
            return{
                expression:'',

            }
        },
        methods:{
            result(){
                this.expression = evaluate(this.expression);
            }
        }
    }
</script>

<style scoped>
#Cmain{
    
    height: 485px;
    display: flex;
    padding-top: 10px;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;

}
#output{
    width: 300px;
    background: rgb(250, 255, 228);
    align-items: center;
    height: 50px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 24px;
    padding-right: 10px;
    box-shadow: 0px 0px 100px 2px rgb(44, 194, 131);
    border-radius: 15px;
}

.numbers{
    width: 290px;
    
    display: flex;
    justify-content: space-around;
    height: 60px;
    align-items: center;
    
    margin: 5px;
}

.buttons{
    background-color: #ADF0D1;
    border-radius: 15px;
    box-shadow: 2px 7px 31px #00203f;
    margin-top: 10px;
}

.list{
    border: 2px solid black;
    width: 22%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    font-size: 20px;
}
.list:hover{
    border: 2px solid white;
    background: #00203f;
    color: white;
    font-size: 35px;
    box-shadow: 0px 0px 100px 10px #00203f;
}
.control{
    width: 35%;
}
</style>