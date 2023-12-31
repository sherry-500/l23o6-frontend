import { defineStore } from "pinia";
import { request } from "~/utils/request";

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            username: '',
            name: '',
            type: '',
            idn: '',
            phone: '',
            mileAge: ''
        }
    },
    getters: {
        getUserName() {

        }
    },
    actions: {
        fetch() {
            request({
                url: '/user',
                method: 'GET'
            }).then((res) => {
                console.log(res.data);
                this.username = res.data.data.username;
                this.name = res.data.data.name;
                this.type = res.data.data.type;
                this.idn = res.data.data.idn;
                this.phone = res.data.data.phone;
                this.mileAge = res.data.data.mileage_points;
            }).catch((err) => {
                console.log(err)
            })
        }
    }

})
