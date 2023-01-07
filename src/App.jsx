import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function App() {


  return (
    <div className="App bg-primary h-screen ">
      <div className="flex flex-col space-y-4 items-center p-10 text-center">
        <h1 className="text-6xl text-secondary font-extrabold">Hola mundo!</h1>
        <p className="text-secondary">Me agrada mucho que andes por aqui, pero esta pagina todavia se esta desarrollano</p>
        <p className="text-secondary pb-4">
          Por el momento, puedes visitar mis redes sociales.
        </p>
      </div>



      <div className="flex flex-col space-y-4 items-center text-center lg:flex-row lg:justify-center">
        <a className="bg-gray-900 w-40 p-4 rounded-xl shadow-xl text-white font-bold flex justify-around transition duration-500 ease-in-out hover:bg-terciary hover:text-primary transform hover:-translate-y-1 hover:scale-110a lg:ml-16" href="https://github.com/alfonso-ramos" >
          <div>
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </div>
          <div>GitHub</div>
        </a>

        <a className="bg-gray-900 w-40 p-4 rounded-xl shadow-xl text-white font-bold flex justify-around transition duration-500 ease-in-out hover:bg-terciary hover:text-primary transform hover:-translate-y-1 hover:scale-110a lg:ml-16" href="https://www.linkedin.com/in/ponchoramos/" >
          <div>
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </div>
          <div>Linkedin</div>
        </a>

        <a className="bg-gray-900 w-40 p-4 rounded-xl shadow-xl text-white font-bold flex justify-around transition duration-500 ease-in-out hover:bg-terciary hover:text-primary transform hover:-translate-y-1 hover:scale-110a lg:ml-16" href="https://twitter.com/PonchoRamosjsx" >
          <div>
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
          </div>
          <div>Twitter</div>
        </a>
      </div>

      {/* <nav>
        <div>Logo</div>
        <div>
          <a href="">Portfolio</a>
          <a href="">Contact</a>
          <a href="">Download my CV</a>
        </div>
      </nav>
      <main>
        <section>
          <div>
            <h2>Ponchor soy yo</h2>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti temporibus provident ipsam voluptatibus ratione exercitationem quis labore incidunt et tempore! Quis delectus officia cumque temporibus harum, maxime fugit ipsa modi.
          </div>
        </section>
      </main>
      <footer>

      </footer> */}
    </div>

  )
}

export default App
