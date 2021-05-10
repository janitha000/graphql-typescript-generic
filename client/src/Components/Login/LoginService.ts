
interface ILoginProps {
    username: string | number,
    password: string | number
}

export const login = async (user: ILoginProps) => {
    const { username, password } = user;
    return new Promise<boolean>((resolve, reject) => {
        setTimeout(() => {
            if (username === 'janitha' && password === '1234')
                resolve(true)
            reject(false)
        }, 1000)
    })


}