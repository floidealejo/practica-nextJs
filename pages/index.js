import AppLayout from '../components/AppLayout/index'
import { colors } from '../styles/theme'
import Button from '../components/Button'
export default function Home() {
  return (
    <div>
      <AppLayout >
        <section>
        <nav>
          <img src= "/logo.png" alt="logo"></img>
        </nav>
        <h1>Devias</h1>
        <h2>Talk about development <br></br> with developers 👩‍💻👩‍💻</h2>
        <Button>Login with Github</Button>
        </section>
      </AppLayout>
      <style jsx>{`
          nav{
            margin-bottom: 1em;
          }
          section{
            display:grid;
            place-items: center;
            place-content:center;
            height:100%;
          }
         h1{
            color: ${colors.primary};
            font-size:24px;
            }
          h2{
            justify-self:center;
            color: ${colors.secondary};
            font-size: 21px;
          }
        `}</style>
    </div>
  )
        
}

