<template>
    <div class="heading">
        <h4>Add Employee</h4>
    </div>
    <div class="AddEmployees">
      <div>
        <div class="mb-3 form" >
          <label for="fullname" class="form-label">Full Name</label>
          <input type="text" v-model="FullName" class="form-control" id="fullname" aria-describedby="emailHelp">
        </div>
        <div class="mb-3 form">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" v-model="Email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3 form">
          <label for="exampleInputPassword1" class="form-label">Age</label>
          <input type="number" v-model="Age" class="form-control" id="exampleInputPassword1">
        </div>
        
        <div class="submitdiv">
          <button type="button" class="btn btn-primary" @click="submit()">Submit</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name:'AddEmployee',
        data(){
          return{
            FullName:'',
            Email:'',
            Age:'',
            EmployeesAdded:[
              {
                    name: "mahesh reddy",
                    Email: "maheshreddy@gmil.com",
                    Age: 22
                },
            ],
          }
        },
        methods:{
          submit(){
            this.EmployeesAdded.push(
              {
                name:this.values
              },
              {
                Email:this.values
              },
              {
                Age:this.values
              }
              ),
            console.log("submited emplyee details");
            console.log("full name = : "+this.FullName);
            console.log("Email = : "+this.Email)
            console.log("Age = : "+this.Age)
            this.FullName='',
            this.Email='',
            this.Age=''
            
          }

        }
    }
</script>

<style scoped>

  .heading>h4{
    display: flex;
}  
.form{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  flex-wrap: wrap;
  /* margin: -35px; */
  /*margin-top: 40px;*/
  font-size: 25px;  
}
.form-control{
  width: 360px;
}
.submitdiv{
  width: 360px;
  display: flex;
}
</style>