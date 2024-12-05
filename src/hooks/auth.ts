import useSWR from 'swr'

export const useAuth = () => {
    const { data: user, error, mutate, isLoading } = useSWR('http://localhost:3012/user/info', () =>
        fetch('http://localhost:8080/auth/user-info',{
            credentials:'include'
        })
        .then(res => res.json())   
        .then(data=>data.user)    
    )
    const login = () => {
        window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/login`
    }

    return {
        user,
        login,
        isLoading,
    }
}