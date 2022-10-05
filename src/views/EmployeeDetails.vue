<template>
    <div class="main card">
        
        <div>
            <ul class="nav nav-tabs">
            
                <li class="nav-item">
                  <button type="button" class="btn btn-outline-secondary buttons" @click="EmployeeDetails()"><strong>Employee Details</strong></button> &nbsp;
                </li>

                <li class="nav-item">
                  <button type="button" class="btn btn-outline-secondary buttons" @click="AddEmployee()"><strong>Add Employee</strong></button>
                </li>
               
              </ul>
              <div class="card-body" id="cardbody">
                <div class="EmployeeDetails" v-if='ED' >

                    <!-- <EmployeeD v-if='ED'/> -->

                    <div class="heading">
                        <h4>Employee Details</h4>
                    </div>
                    <div class="table">
                        <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Full name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Age</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(taskone,index) in EmployeeDetailsone" :key="index">
                                <td>{{index}}</td>
                                <td>{{taskone.Name}}</td>
                                <td>{{taskone.Email}}</td>
                                <td>{{taskone.Age}}</td>
                              </tr>
                            </tbody>
                          </table>
                    </div>

                </div>

                <div class="AddEmployee" v-if='AE' >
                    <!-- <AddEmployee v-if='AE'/> -->
                    <div class="AddEmployees">
                        <div>
                          <div class="mb-3 form" >
                            <label for="fullname" class="form-label">Full Name</label>
                            <input type="text" v-model="FullName" class="form-control" id="fullname" aria-describedby="emailHelp">
                          </div>
                          <div class="mb-3 form">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" v-model="AddEmail" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                          </div>
                          <div class="mb-3 form">
                            <label for="exampleInputPassword1" class="form-label">Age</label>
                            <input type="number" v-model="AddAge" class="form-control" id="exampleInputPassword1">
                          </div>
                          
                          <div class="submitdiv">
                            <button type="button" class="btn btn-primary" @click="save()">save</button>
                          </div>
                        </div>
                    
                </div>
              </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
    name: "EmployeeDetails",
    data(){
        return{
            ED:true,
            AE:false,
            EmployeeDetailsone: [
                {
                    Name: "T Dinesh kumar reddy",
                    Email: "dineshkumarreddy001@gmil.com",
                    Age: 22
                },
                {
                    Name: "Bavan",
                    Email: "bavan@gmil.com",
                    Age: 21
                },
                {
                    Name: "Easwar",
                    Email: "Easwar@gmil.com",
                    Age: 20
                }
            ],
        }
    },
    methods:{
        EmployeeDetails(){
            this.ED=true
            this.AE=false
        },
        AddEmployee(){
            this.ED=false
            this.AE=true
        },
        save(){
            if(this.FullName.length==0){
                return
            }else{
                this.EmployeeDetailsone.push(
                {
                   Name:this.FullName,
                   Email:this.AddEmail,
                   Age:this.AddAge
                }
            )
            }

            
            this.FullName='',
            this.AddEmail='',
            this.AddAge=''
        }
    }
}
</script>

<style  scoped>
.main{
    margin: 10px;
    width: 98%;
    background-color: rgb(239, 181, 181);
    height: 480px;
    /*padding: 10px;*/
}
.buttons{
    margin: 5px;
    color: white;

}
.buttons:hover{
    box-shadow: 0px 0px 28px 2px white;;
}

#cardbody{
    
    height: 430px;
}

.form{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    flex-wrap: wrap;
   margin-top: 0px;
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