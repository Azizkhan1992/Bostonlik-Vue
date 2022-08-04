<template>
<div class="pagination-container">
    <div class="footer-left-block">
        <button @click="prevPage">
            <img class="request-left" src="@/assets/src/Icons/Vector-left.svg" alt="" />
            Пред .
        </button>
        <button @click="nextPage">
            <img class="request-right-img" src="@/assets/src/Icons/chevron-right.svg" alt="" />
            След .
        </button>
    </div>
    <div class="footer-center">
        <span>Страница</span>
        <input type="text" :value="pageNumber" />
        <span>из {{currentPages}}</span>
        <button>
            <img src="@/assets/src/Icons/chevron-right.svg" alt="" />
        </button>
    </div>
</div>
</template>

<script>
export default {
    name: 'app-pagination',
    props: {
        data: {
            type: Array,
            default: () => []
        },
        limit: {
            type: [Number, String],
            default: 2
        }
    },
    data() {
        return {
            paginationData: null,
            pageNumber: 1
        }
    },
    computed: {
        currentPages() {
            let currentRequestPages;
            console.log(this.data)
            if (this.data) {
                let x = this.data.length
                let y = this.limit
                currentRequestPages = Math.ceil(x / y)
                
            }

            return currentRequestPages
        },
    },
    methods: {
        nextPage() {
            if (this.pageNumber < this.currentPages)
                this.pageNumber++
        },
        prevPage() {
            if (this.pageNumber > 1) {
                this.pageNumber--
            }
        },
        paginateData() {
            let pagination;
            if (this.data) {
                const start = this.pageNumber * this.limit,
                    end = start + this.limit;
                // console.log(1111, pageNews)
                pagination = this.data.slice(start, end)

                return this.$emit('paginate', pagination)
            }
            return []
        },
    },
    watch: {
        pageNumber: function (val) {
            console.log(val)
            this.paginateData()
        }
    }

}
</script>

<style>
.pagination-container{
    width: 100%;
    display: flex;
    flex-direction: row;
}
.footer-left-block{
    display: flex;
    flex-direction: row;
    width: 30%;
}
.footer-left-block button{
    width: 50%;
    position: relative;
    display: flex;
    align-items: center;
}
.footer-left-block button .request-left{
    display: block;
    margin-right: 50px;
    margin-top: 5px;
}
.footer-left-block button .request-right-img{
    display: block;
    position: absolute;
    right: 15px;
}
.footer-left-block button:hover{
    color: #1C9E3C;
}
.pagination-container .footer-center{
    width: 30%;
    display: flex;
}
.pagination-container .footer-center input{
    width: 50px;
}
</style>