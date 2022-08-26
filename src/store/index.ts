import {createPinia} from "pinia";
import {usePersist} from 'pinia-use-persist'
import type {App} from 'vue'

const pinia=createPinia()

export default function setupStore(app:App<Element>){
    pinia.use(usePersist)
    app.use(pinia);
}

export {pinia}
