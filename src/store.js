import { reactive } from 'vue'
import data from '../db.json'

export const store = reactive({
    products: []
    // data: data.products
})
console.log(data)