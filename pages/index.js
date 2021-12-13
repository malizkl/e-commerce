import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import products from '../pages/products'
import React from 'react';
import Link from "next/link"





export default function Home() {
  return (


    

    

    

    
      <div className="site-container">

        <div className="space-y-4">

            <h1 className="text-2xl text-gray-500 flex items-center justify-items-center justify-center">
                FEATURED COLLECTION
            </h1>

       


            


            <div className={styles.grid}>
          <a className={styles.card}>
            <img src="https://www.pidekorasyon.com/img/products/pt0089-panaromik-kirilmaz-cam-tablo-poster-ev-dekor-duvar-kagit---5-_30.09.2021_6e796ec.jpg" alt=" "/>

            
            <p className="py-2">Abstract Panoramic Glass Painting</p>
          </a>
          

         

          <a  className={styles.card}>

          <img src="https://www.pidekorasyon.com/img/products/pt0080-panaromik-kirilmaz-cam-tablo-poster-ev-dekor-duvar-kagit---5-_30.09.2021_8484f91.jpg" alt=""/>

            
            <p className="py-2">Elif Lam Mim Panoramic Glass Painting</p>
          </a>


          <a  className={styles.card}>

          <img src="https://www.pidekorasyon.com/img/products/pt0077-panaromik-kirilmaz-cam-tablo-poster-ev-dekor-duvar-kagit---5-_30.09.2021_b473494.jpg" alt=""/>

            
            <p className="py-2">Gold Leaves Panoramic Glass Painting</p>
          </a>



          <a  className={styles.card}>

          <img src="https://www.pidekorasyon.com/img/products/pt0066-panaromik-kirilmaz-cam-tablo-poster-ev-dekor-duvar-kagit---5-_27.09.2021_b7c0f60.jpg" alt=""/>

            
            <p className="py-2">Leaf Panoramic Glass Painting</p>
          </a>







          <a
            
            className={styles.card}
          >
                            <img  src="https://www.pidekorasyon.com/img/products/tr0079-cam-tablo-ev-dekorasyonu-3lu-cam-tabl-pidekorasyon-1_21.09.2021_43813f9.jpg" alt=" "/>

            <p className="py-2">Feathers Triple Glass Painting</p>
          </a>

          <a
            className={styles.card}
          >
                            <img  src="https://www.pidekorasyon.com/img/products/tr0076-cam-tablo-ev-dekorasyonu-3lu-cam-tabl-pidekorasyon-1_18.09.2021_d1222dc.jpg" alt=" "/>

            <p className="py-2">
            Abstract Patterns Triple Glass Painting
            </p>
          </a>

          <a
            
            className={styles.card}
          >
                    <img  src="https://www.pidekorasyon.com/img/products/tr0055-cam-tablo-ev-dekorasyonu-3lu-cam-tabl-pidekorasyon-1_24.08.2021_3b69491.jpg" alt=" "/>

            <p className="py-2">Gold Leaves Triple Glass Painting</p>
          </a>



          <a
            
            className={styles.card}
          >
                    <img  src="https://www.pidekorasyon.com/img/products/tr0054-cam-tablo-ev-dekorasyonu-3lu-cam-tabl-pidekorasyon-1_24.08.2021_238e26a.jpg" alt=" "/>

            <p className="py-2">Marble Patterns Triple Glass Table</p>
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
        {/* WhatsApp icon */}

        

       
      
      </div>




  )




}




