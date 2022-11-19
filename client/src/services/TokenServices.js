let tokenName = 'token'
const JwtService= {

getToken:() =>{
    return localStorage.getItem(tokenName);
  },

  setToken:(token)=> {
    return localStorage.setItem(tokenName, token);
  },

 destroyToken:()=> {
    return localStorage.removeItem(this.tokenName);
  }
}

export default JwtService