const backendDomain = "http://localhost:8080"

// for api url
const SummeryApi = {
    signUp :{
        url : `${backendDomain}/api/signup`,
        method : "post" 
    },
    signIn :{
        url : `${backendDomain}/api/signin`,
        method : "post" 
    }
}

export default SummeryApi