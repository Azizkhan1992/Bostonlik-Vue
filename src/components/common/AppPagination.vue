<template>
<div>
    <div class="footer-left-block">
        <button @click="prevPage">
            <img class="request-right" src="@/assets/src/Icons/Vector-left.svg" alt="" />
            <span>Пред .</span>
        </button>
        <button @click="nextPage">
            <img class="request-left" src="@/assets/src/Icons/chevron-right.svg" alt="" />
            <span>След .</span>
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
            if (this.data) {
                let x = this.data.length
                let y = this.limit
                currentRequestPages = Math.ceil(x / y)
            }

            return currentRequestPages
        },
    },
    methods: {
        nextPage() {console.log('next page', this.currentPages, this.pageNumber)
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
