import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full min-h-dvh bg-background 
        flex items-center justify-center flex-col'>
      <div>
          <div>
              <h1>
                facebook
              </h1>
              <p>
                O Facebook ajuda você a se conectar 
                e compartilhar com as pessoas que fazem parte da sua vida.
              </p>
          </div>

          <div>
            <form>
              <div>
                <input type="email" name="email" id="email"/>
                <input type="password" name="password" id="password"/>
                <button>
                  entrar
                </button>
                <a href="#">
                  Esqueceu a senha?
                </a> 

              </div>

              <div>
                <button>
                  criar nova conta  
                </button>  
              </div>  
            </form>

            <p>
              <a href="#">
               Crie uma Página  
              </a>
              para uma celebridade, uma marca ou uma empresa.
            </p>
          </div>
      </div>
    </div>
  )
}

export default App
