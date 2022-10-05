<template>
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
              <tr v-for="(values,index) in EmployeeDetails" :key="index">
                <td>{{index}}</td>
                <td>{{values.name}}</td>
                <td>{{values.Email}}</td>
                <td>{{values.Age}}</td>
              </tr>
             
              
            </tbody>
          </table>
    </div>
    
</template>

<script>

    export default {
    name: "EmployeeD",
    data() {
        return {
            EmployeeDetailsone: [
                {
                    name: "T Dinesh kumar reddy",
                    Email: "dineshkumarreddy001@gmil.com",
                    Age: 22
                },
                {
                    name: "Bavan",
                    Email: "bavan@gmil.com",
                    Age: 20
                },
                {
                    name: "Easwar",
                    Email: "Easwar@gmil.com",
                    Age: 20
                }
            ]
        };
    },
   
}
</script>

<style scoped>
.heading>h4{
    display: flex;
}
table{
    border: 2px solid black;
  }

</style>