import useSWR from 'swr'

export const useAuth = () => {
    const { data: user, error, mutate, isLoading } = useSWR(`${import.meta.env.VITE_BACKEND_URL}/user/info`, () =>
        fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/user-info`,{
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
        error,
        mutate
    }
}