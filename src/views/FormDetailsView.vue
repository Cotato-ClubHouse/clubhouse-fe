<template>
<!-- 동아리 정보: 코테이토, 앱/웹 플랫폼 개발 -->

<h1>지원 마감까지 {{ formDetail.remainDays }}일 남았습니다.</h1>
<!-- 여기부터 동아리 상세 정보 -->
<div class="card card-compact w-96 bg-base-100 shadow-xl">
    <h1 class="card-title">{{formDetail.title}}</h1>
    <figure>
      <img :src="formDetail.photoUrl" class="rounded-x1 w-200 h-150" />
    </figure>
  <div class="card-body">    
    <p>{{formDetail.content}}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-info-wide">
        모집 마감까지 {{ this.formDetail.remainDays }}일 남았습니다!!
      </button>
    </div>
  </div>
</div>
  </template>
  

<script>
import axios from 'axios';

  export default{
    data(){
        return{
            formDetail:{
                title: '',
                content: '',
                remainDays: 0,
                deadLine: '',
                photoUrl: '',
                categoryName: '',
                clubName: '',
                clubIntro:''
            },
        };
    },
    created(){
        this.formId = this.$route.params.formId;
        this.getFormDetails();
    },
    methods:{
        async getFormDetails(){
            const url = `http://localhost:8080/v1/forms/${this.formId}`
            // const form = {
            //     title: this.title,
            //     content: this.content,
            //     remainDay: this.remainDay,
            //     deadLine: this.deadLine,
            //     photoUrl: this.photoUrl,
            //     categoryName: this.categoryName,
            //     clubName: this.clubName,
            //     clubIntro: this.clubIntro
            // };
            const headers = {
               'Authorization': 'Bearer **'
            };
            await axios({
                method: 'get',
                url,
                headers: headers
            }).then((res)=>{
                console.log(this.formId);
                this.formDetail = res.data;
                console.log(res.data);
                console.log(this.formDetail.categoryName);
            })
            .catch((error)=>{
                console.log('Error Fetching Details',error);
                console.log(this.formId);
            })
    
        }

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
