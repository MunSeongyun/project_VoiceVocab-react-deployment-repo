import { useAuth } from "../hooks/auth"

const Login = () => {

    const {user, login, isLoading} = useAuth()

    if(isLoading){
      return (
        <div>불러오는 중...</div>
      )
    }
    if(!isLoading && !user){
      return (
        <div>
          <button onClick={login}>로그인</button>
        </div>
      )
    }
    return (
      <>
        <div>{user.name} 님 환영합니다!</div>
      </>
      
    )
    
}

export default Login
