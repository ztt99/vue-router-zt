export default {
    name:'RouterLink',
    props:{
        to:{
            type:String
        },
        tag:{
            type:String,
            default:'a'
        }
    },
    methods:{
        handle(to){
            this.$router.push(to)
        }
    },
    render(){
        let {tag,to} = this
        return <tag onClick={this.handle.bind(this,to)}>{this.$slots.default}</tag>
    }
}