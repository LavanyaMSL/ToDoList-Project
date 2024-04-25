<template class="loginBody">
<div>
  <div class="heading"> 
    <svg class="svgStyle" height="100px" width="100px" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,5 20,99 95,39 5,39 80,99" />
</svg>
  <span style="align-content: flex-end;
    padding-top: 50px;font-size:20px"><b>Welcome to your To-Do list</b></span>
</div>
  <div class="alignButton">
  <RouterLink class="button" to="/Login">Login</RouterLink>
  <span style="margin:50px"></span>
  <RouterLink class="button" to="/Register">Register</RouterLink>
  </div>
</div>
</template>


<script>
export default {

}
</script>

<style type="scoped">
.loginBody{
    background-color:purple;
}
.heading{
    margin: auto;
align-content: center;
  padding:30px;
  border-radius: 25px;
  background: #af608b;
  padding: 20px; 
  width: 50%;
  height: 50px;
  display:flex;
}
.button{
       margin: auto;
align-content: center;
  padding:30px;
  border-radius: 25px;
  background: #e05959;
  width: 50%;
  height: 50px;

}
.alignButton{
    margin-top:25%
}

.svgStyle{
      position: relative;
    bottom: 25px;
}
</style>