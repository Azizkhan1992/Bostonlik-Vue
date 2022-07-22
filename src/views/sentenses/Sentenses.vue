<template>
    <div class="sentenses-container">
        <div class="sentenses-header">
            <div class="sentenses-header-left">
                <span>Жалобы и предложения</span>
                <p>Жалобы и предложения</p>
            </div>
            <img src="@/assets/src/Icons/Ellipse.png" alt="">
        </div>
        <div class="sentenses-content"></div>
    </div>
</template>
<script>
export default {
    name: 'sentense-app'
}
</script>
<style>
.sentenses-container{
    margin-left: 25px;
    margin-top: 10px;
}
.sentenses-container .sentenses-header{
    display: flex;
}
.sentenses-header .sentenses-header-left{
    margin-left: 10px;
    margin-top: 10px;
}
.sentenses-header .sentenses-header-left span{
    font-size: 20px;
    font-weight: 700;
}
</style>