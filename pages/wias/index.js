import Link from "next/link";
import AppLayout from "../../components/AppLayout/index"
export default function Wias({userName}) {
    return (
    <>
    <AppLayout>
        <h1>This a timeLine of {userName}</h1>
        <Link href = "/"><a>Go Home</a></Link>
    </AppLayout>
    </>
    )

}
Wias.getInitialProps =  ()=>{
    return fetch("http://localhost:3000/api/hello")
    .then((data)=>data.json())
}