import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
  return (
      <div className="site-container">

        <div className="space-y-4">

            <h1 className="text-2xl text-gray-500 flex items-center justify-items-center justify-center">
                FEATURED COLLECTION
            </h1>


            


            <div className={styles.grid}>
          <a className={styles.card}>
            <img src="https://www.pidekorasyon.com/img/products/ckt04068-cam-mutfak-kesma-tahtasi-1_29.10.2020_22063a5.jpg" alt=" "/>

            
            <p className="py-2"> Drop Pattern Glass Cutting Table</p>
          </a>

          <a  className={styles.card}>

          <img src="https://www.pidekorasyon.com/img/products/ckt04071-cam-mutfak-kesma-tahtasi-1_29.10.2020_08a3949.jpg" alt=""/>

            
            <p className="py-2">Black Drop Pattern Glass Cutting Table</p>
          </a>

          <a
            
            className={styles.card}
          >
                            <img  src="https://www.pidekorasyon.com/img/products/ckt05018-cam-mutfak-kesma-tahtasi-1_30.10.2020_84a0233.jpg" alt=" "/>

            <p className="py-2">Minimal Pattern Glass Cutting Table</p>
          </a>

          <a
            className={styles.card}
          >
                            <img  src="https://www.pidekorasyon.com/img/products/ckt05009-cam-mutfak-kesma-tahtasi-1_30.10.2020_05b93a2.jpg" alt=" "/>

            <p className="py-2">
            Dark Prism Pattern Glass Cutting Table
            </p>
          </a>

          <a className={styles.card}>
            <img src="https://www.pidekorasyon.com/img/products/ckt04052-cam-mutfak-kesma-tahtasi-1_29.10.2020_acccba4.jpg" alt=" "/>

            
            <p className="py-2">Green Forest Pattern Glass Cutting Table</p>
          </a>


          <a className={styles.card}>
            <img src="https://www.pidekorasyon.com/img/products/ckt04048-cam-mutfak-kesma-tahtasi-3--1-_29.10.2020_2fcce5a.jpg" alt=" "/>

            
            <p className="py-2">Lake Pattern Glass Cutting Table</p>
          </a>


          <a className={styles.card}>
            <img src="https://www.pidekorasyon.com/img/products/ckt04043-cam-mutfak-kesma-tahtasi-1_29.10.2020_0be4c7c.jpg" alt=" "/>

            
            <p className="py-2">Macaron Pattern Glass Cutting Table</p>
          </a>



          <a className={styles.card}>
            <img src="https://www.pidekorasyon.com/img/products/ckt03084-cam-mutfak-kesma-tahtasi-1_29.10.2020_b9e7781.jpg" alt=" "/>

            
            <p className="py-2">Pepper Pattern Glass Cutting Table</p>
          </a>




        </div>







        </div>
      </div>




  )




}
