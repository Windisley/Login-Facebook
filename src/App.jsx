import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-full w-full min-h-dvh bg-background 
        flex items-center justify-center flex-col m-0auto'>
      <div id='responsive' className='max-w-full w-1/2 ml-4 h-full m-0auto flex justify-around justify-center gap-24'>
        <div>
          <h1 className=' text-left w-full m-0auto text-primary font-black text-5xl capitalize'>
            facebook
          </h1>
          <p className='w-full m-0auto my-4 text-left text-2xl'>
            O Facebook ajuda você a se conectar
            e compartilhar com as pessoas que fazem parte da sua vida.
          </p>
        </div>

        <div className='w-full max-w-full h-full m-0auto flex justify-center items-center flex-col'>
          <form className='w-full max-w-lg m-0auto min-w-64 
           border-onepix rounded-lg p-4 min-h-full flex flex-col justify-center items-center gap-4'>
            <div className='w-full flex flex-col' >

              <input type="email" name="email" id="email" placeholder='email ou telefone'
                className='
                border-onepix rounded-lg text-left 
                p-2 placeholder:capitalize focus:border-primary  
                '
              />

              <input type="password" name="password" id="password" placeholder='senha'
                className='
                border-onepix rounded-lg text-left 
                p-2 placeholder:capitalize focus:border-primary my-4 
                '
              />
              <button className='capitalize w-full text-center bg-primary
                rounded-lg p-2 border-onepix  text-2xl font-semibold
                text-white hover:bg-black ease-in-out duration-300
              '>
                entrar
              </button>

              <a href="#" className='my-4 text-center capitalize text-primary 
               hover:underline'>
                Esqueceu a senha?
              </a>

            </div>


            <div className='w-full h-full border-t-2'>
              <div className='my-4'>
                <button className='capitalize w-full text-center bg-button
                rounded-lg p-2 border-onepix  text-base font-semibold
                text-white hover:bg-black ease-in-out duration-300'>
                  criar nova conta
                </button>
              </div>

            </div>
          </form>
          <div className='my-4'>
            <a href="#" className='font-semibold hover:underline'>
              Crie uma Página  
              
            </a>
            <p className='my-1'>
              para uma celebridade, uma marca ou uma empresa.
            </p>

            

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
