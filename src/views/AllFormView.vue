<template>
    <!-- 여기부터 로고 + 검색창  -->
    <div class="mockup-window border bg-base-300">
        <div class="navbar bg-base-100">
        <div class="flex-1">
            <img src="../assets/Group80.svg" />
            <a class="btn btn-ghost normal-case text-xl">Club-house</a>
        </div>
        <div class="flex-none gap-2">
        <div class="form-control">
            <input type="text" placeholder="찾고 싶은 동아리 이름을 입력하세요." class="input input-bordered w-24 md:w-auto" />
        </div>
        <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
                <img src="../assets/Group80.svg" />
            </div>
        </label>
        <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li><!--LogIn하고 swap되게 만들기, 버튼 누를때 기능 추가-->
        </ul>
    </div>
  </div>
</div>
<!-- 여기부터 카테고리별 아이콘 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <button class="btn join-item">전체</button>
        <button class="btn join-item">IT</button>
        <button class="btn join-item">봉사</button>
        <button class="btn join-item">운동</button>
        <button class="btn join-item">학술*교양</button>
        <button class="btn join-item">취업</button>
        <button class="btn join-item">어학</button>
        <button class="btn join-item">문화*예술</button>
        <button class="btn join-item">친목</button>
        <button class="btn join-item">기타</button>
    </div>

<!-- 여기부터 동아리 목록 -->
<div class="flex justify-center items-center min-h-screen">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        v-for="(form, index) in formList"
        :key="index"
        class="flex-shrink-0 card w-full bg-base-100 shadow-xl"
      >
        <h1>{{ form.categoryName }}</h1>
        <figure class="px-10 pt-10">
          <img :src="form.photoUrl" alt="cotato" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{{ form.clubName }}</h2>
          <p>{{ form.content }}</p>
          <div class="card-actions">
            <div>
              <div>{{ form.clubIntro }}</div>
              <button class="btn btn-info">D-{{ form.remainDay }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </template>
  

<script>
import axios from 'axios';

  export default{
    data(){
        return{
            formSummary:{
                categoryName: '',
                photoUrl: '',
                remainDay: 0,
                clubName: '',
                formStatus: '',
                content: ''
            },
            formList: [],
            formUrl:''
        };
    },
    created(){
        this.getAllForms();
    },
    methods:{
        async getAllForms(){
            const url = "http://localhost:8080/v1/forms";
            // const token = `Bearer ${this.$store.getters.getToken}`;
            const headers = {
                'Authorization': 'Bearer **'
            }
            await axios({
                method: 'get',
                url,
                headers: headers
            })
            .then((res)=>{
                this.formList = res.data;
                console.log(res.data);
                this.formUrl = this.formList[0].photoUrl;
                console.log(this.formUrl);
            }).catch((error)=>{
                console.log('Error Fetching All Forms',error);
                // console.log(token);
            })
        },
        // async getFormsByCategory(categoryName){
        //   // const url = categoryName?
        // }
    }
  }
</script>

<style>
.min-h-screen {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
</style>
