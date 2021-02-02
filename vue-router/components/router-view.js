export default {
    name:'RouterView',
    props:{
        tag:{
            type:String,
            default:'div'
        }
    },
    render(){
        let {tag} = this
        return <tag></tag>
    }
}