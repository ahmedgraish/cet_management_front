<script setup>
  
  import submitBtn from '../components/SubmitBtn.vue'
  import { ref } from 'vue'
  import {useUserStore} from '../stores/UserStore'
  const welcomeMsg = ref('مرحبًا بك   في نظام الحضور والغياب ');
  
  const password = ref('');
  const ref_number = ref('');
  
  const user = useUserStore();

  const login =async()=>{

    const loginData={
    ref_number:ref_number.value,
    password:password.value,
    }

    await user.login(loginData,document.URL);

    console.log(user.userData);
  }
  

</script>

<template>
  <div class="mainCont">
    <div class="side_part">

      <div class="logo"></div>

      <div class="bunner"></div>

    </div>

    <main>
      <h1>{{ welcomeMsg }}</h1>

      <form @submit.prevent="login">
        <input type="text" v-model="ref_number" class="LoginDetails" placeholder="اسم المستخدم" dir="rtl" required>
        <input type="password" v-model="password" class="LoginDetails" placeholder="كلمة المرور" dir="rtl" required>
        <submitBtn value="تسجيل الدخول" id="submitBtn"></submitBtn>
      </form>

    </main>

  </div>
 
</template>

<style>

.mainCont{
  display: flex;
}

main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 60%;
    height: 100vh;
    position: absolute;
    left: 42%;
    border-radius: 35px 0px 0px 35px;
    form{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 30vh;
      width: 30vw;
      margin-top: 15%;
    }
}

h1{
  position: absolute;
  top: 10%;
  font-size: 3rem;
  text-align: center;
  width: 70%;
  color: #626a7c;
}

.LoginDetails{
  height: 30%;
  width: 100%;
  padding: 0 25px 0 15px;
  border-radius: 50px;
  border: 1px solid #9e9e9e ;
  background-color: #dadada02;
  outline: none;
  transition: all 0.2s ease;
  font-size: large;
  font-family: "El Messiri", sans-serif;
}

.LoginDetails:focus{
  padding: 0 22px 0 15px;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.1);
}

#submitBtn{
  width: 60%;
  height: 25%;
  margin-bottom: -20%;
}

.side_part{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #4494D0;
  height: 100vh;
  width: 45vw;
}
.logo{
  width: 90%;
  height: 20%;
  background-image: url(../assets/images/main_logo.png);
  background-size: cover;
  scale: 0.9;
}
.bunner{
  height: 80%;
  width: 100%;
  position: absolute;
  top: 13%;
  left: 22%;
  scale: 0.95;
  z-index: 1000;
  background-image: url(../assets/images/login_main_img.png);
  background-size: cover;
}

</style>
