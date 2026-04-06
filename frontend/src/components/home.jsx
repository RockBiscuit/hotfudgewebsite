import Navbar from "./navbar";
import tailwindcss from '@tailwindcss/vite'


const Home = ({setStep}) => {

return (
    <>
   <Navbar setStep={setStep} />


    <div>
        <header>Hello</header>
    </div>
    <footer className="text-body-secondary py-5 text-center">
          <p>© 2025 Zombie Hotdish Records</p>
        </footer>
</>
  );

};

export default Home;
