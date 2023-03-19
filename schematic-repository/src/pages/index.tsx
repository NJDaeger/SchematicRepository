import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'schem/styles/Home.module.css'
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Ripple } from 'primereact/ripple';
import PrimeReact from 'primereact/api';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css"; 
import "/node_modules/primeflex/primeflex.css";

const inter = Inter({ subsets: ['latin'] })

PrimeReact.ripple = true;

export default function Home() {
  return (
    <>
    <div className="flex justify-content-center" style={{height: "100vh", width: "100vw"}}>
      <div className="-mt-8 align-self-center">
        <Card title="Login">
          <div className='flex flex-column w-100'>
            <span className="p-input-icon-left mb-3">
              <i className="pi pi-user" />
              <InputText placeholder="Username" />
            </span>
            <span className="p-input-icon-left">
              <i className="pi pi-key" />
              <InputText placeholder="One Time Passcode" />
            </span>
            <div className="flex flex-row w-100 justify-content-center mt-3">
              <Button className='w-full mr-2 p-ripple' raised label='Register' text severity='secondary'>
                <Ripple></Ripple>
              </Button>
              <Button className='w-full ml-2 p-ripple' raised label='Login' >
                <Ripple></Ripple>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
    
      
    </>
  )
}
