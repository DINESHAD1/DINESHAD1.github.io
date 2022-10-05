<template>
<div id="timemain">
    <div>
        <h1>count down</h1>
    </div>
    <div>
        <input type="number" name="number" id="number" v-model="count" >
        <button @click="more()">Enter</button>
        {{count}}
    </div> 
    <br><br>

    <div id="timecountdown">
        
        <h1>time count down</h1> 
        <div class="timesone">
            <div class="minutes one ">
                <label for="minutes">Minutes</label> <br>
                <input type="number"  id="minutes" v-model="minutes" class="time">
            </div>
           
            <button v-on:click="time">Enter</button>
            <h3 id="result">{{result}}</h3>
        </div>
    </div>
</div>

</template>

<script>
    export default {
        name:'CountDown',
        data:() => ({

            count:0,
           
            minutes:0,
            result:0
            
        }),
        
        methods:{
            more(){
                
               var inter=  setInterval(() => {
                    this.count--;
                    if(this.count<=0){
                        clearInterval(inter)
                    }
                }, 1000);
            },
            time(){
                const minute = this.minutes *60;
                this.result = minute;
                

              var times = setInterval(() => {
                this.result--;
                if(this.result<=0){
                    clearInterval(times)
                }
              }, 1000);  
            }

           
        }
    };
</script>

<style scoped>
.maincount{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    
}
.inner{
    margin: 10px;
}
#timecountdown{
    padding: 20px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
#days{
    width: 50px;
    margin: 10px;    
}
#hours{
    width: 50px; 
    margin: 10px;   
}
#minutes{
    width: 50px; 
    margin: 10px;   
}
.one{
    border-radius: 2px;
    border: 2px solid black;
    margin: 5px;

}

.timesone{
    display: flex;
   
}

#result{
    width: 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
}


#timemain{
    background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
height: 493px;
margin: 4px;
border-radius: 12px;
}
</style>