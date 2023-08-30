import {signIn, useSession, getProviders} from 'next-auth/react';
import {useRouter} from 'next/router'
function LoginPage(){
    const {data: session, status} = useSession()
    const router = useRouter()
    const providers = getProviders()
    if(status !='loading' && status == 'authenticated'){
        router.push('/')
    }
    return(
        <div>
            <button onClick={()=>signIn('github')}>
                singin with github
                </button>  
        </div>
    )
}
export default functionLoginPage