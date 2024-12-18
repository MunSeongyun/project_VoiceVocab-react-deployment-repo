import { useAuth } from "../hooks/auth"
import '../css/login.css'
const Login = () => {

    const {user, login, isLoading} = useAuth()
    
    if(isLoading){
      return (
        <div>불러오는 중...</div>
      )
    }
    if(!isLoading && !user){
      return (
        <button className="login" onClick={login}>로그인</button>
      )
    }
    return (
      <div className="loginSuccess">
        <div>{user.name} 님 환영합니다!</div>
        <a href="/vocabulary-list">단어장 목록으로 이동</a>
        <a href="/">메인으로 이동</a>
      </div>
      
    )
    
}

export default Login
